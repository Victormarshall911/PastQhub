/**
 * Groq Vision Service
 * Uses Llama 4 Scout to extract MCQ questions from uploaded images
 */

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const VISION_MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';

const EXTRACTION_PROMPT = `You are an expert at reading exam papers and extracting questions from images.

Look at this image carefully. It contains examination questions. Extract EVERY SINGLE question you can see.

## STRICT RULES — FOLLOW FOR EVERY QUESTION:

RULE 1: For EVERY question, determine if it is OBJECTIVE or THEORY.
- OBJECTIVE = has a single correct factual answer (e.g. "What is...", "Which of...", "The ___ is...", "Calculate...", fill-in-the-blank, true/false, definitions)
- THEORY = requires discussion/explanation (e.g. "Discuss...", "Explain in detail...", "Compare and contrast...", "Write an essay...")

RULE 2: For EVERY OBJECTIVE question, you MUST provide exactly 4 answer options.
- If options A, B, C, D are shown in the image: copy them exactly as written.
- If NO options are shown: YOU MUST GENERATE 4 plausible options yourself. One must be correct. The other 3 must be wrong but realistic. Set "correctAnswer" to the index of the correct one (0=A, 1=B, 2=C, 3=D).
- DO THIS FOR EVERY SINGLE OBJECTIVE QUESTION. NOT JUST THE FIRST ONE. EVERY ONE.

RULE 3: For THEORY questions only: set "options" to [] and "type" to "theory".

RULE 4: Return ONLY a raw JSON array. No markdown, no code fences, no explanation.

FORMAT:
[
  {"question": "extracted question text", "options": ["A", "B", "C", "D"], "correctAnswer": 1, "type": "objective"},
  {"question": "another question", "options": ["A", "B", "C", "D"], "correctAnswer": 0, "type": "objective"},
  {"question": "Discuss something...", "options": [], "correctAnswer": -1, "type": "theory"}
]

REMINDER: Generate 4 options for ALL objective questions — not just the first one. Every single objective question MUST have 4 options.`;

/**
 * Extract questions from an image using Groq Vision API
 * @param {string} base64Image - Base64-encoded image data (without data URL prefix)
 * @param {string} mimeType - Image MIME type (e.g., 'image/jpeg')
 * @returns {Promise<Array>} Array of extracted question objects
 */
export async function extractQuestionsFromImage(base64Image, mimeType) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey || apiKey === 'your_groq_api_key_here') {
    throw new Error(
      'Groq API key not configured. Add your key to the .env file as VITE_GROQ_API_KEY'
    );
  }

  try {
    const requestBody = {
      model: VISION_MODEL,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: EXTRACTION_PROMPT,
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:${mimeType};base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      temperature: 0.1,
      max_tokens: 4096,
    };

    console.log('[GroqVision] Sending request to:', GROQ_API_URL);
    console.log('[GroqVision] Model:', VISION_MODEL);
    console.log('[GroqVision] Image type:', mimeType, '| Base64 length:', base64Image.length);

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[GroqVision] API Error:', response.status, errorData);

      if (response.status === 429) {
        throw new Error(
          'Rate limit reached. The free Groq plan has usage limits — please wait a moment and try again.'
        );
      }
      if (response.status === 401) {
        throw new Error(
          'Invalid Groq API key. Please check your VITE_GROQ_API_KEY in the .env file.'
        );
      }
      if (response.status === 400) {
        throw new Error(
          errorData?.error?.message || 'Bad request — the image may be too large or in an unsupported format.'
        );
      }
      throw new Error(
        errorData?.error?.message || `Groq API error (${response.status})`
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    console.log('[GroqVision] Raw response content:', content);

    if (!content) {
      throw new Error('No response received from Groq Vision');
    }

    // Parse the JSON response — handle various formats the model might return
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      console.log('[GroqVision] Direct JSON parse failed, trying to extract JSON...');

      // Try extracting from markdown code fences: ```json ... ```
      const codeFenceMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (codeFenceMatch) {
        console.log('[GroqVision] Found code fence, extracting...');
        parsed = JSON.parse(codeFenceMatch[1].trim());
      } else {
        // Try extracting a JSON array
        const arrayMatch = content.match(/\[[\s\S]*\]/);
        if (arrayMatch) {
          console.log('[GroqVision] Found JSON array in response');
          parsed = JSON.parse(arrayMatch[0]);
        } else {
          // Try extracting a JSON object
          const objMatch = content.match(/\{[\s\S]*\}/);
          if (objMatch) {
            console.log('[GroqVision] Found JSON object in response');
            parsed = JSON.parse(objMatch[0]);
          } else {
            console.error('[GroqVision] Could not find any JSON in response:', content);
            throw new Error('AI could not extract structured data from this image. Try a clearer photo.');
          }
        }
      }
    }

    console.log('[GroqVision] Parsed result:', parsed);

    // Normalize: handle array, object with questions key, or single object
    let questions;
    if (Array.isArray(parsed)) {
      questions = parsed;
    } else if (parsed.questions && Array.isArray(parsed.questions)) {
      questions = parsed.questions;
    } else if (parsed.question) {
      questions = [parsed];
    } else {
      // Try to find any array property that looks like questions
      const arrayProp = Object.values(parsed).find((v) => Array.isArray(v));
      questions = arrayProp || [parsed];
    }

    // Filter out error responses
    questions = questions.filter((q) => !q.error);

    if (questions.length === 0) {
      throw new Error(
        'No questions could be extracted. The image may not contain recognizable MCQ questions, or the text may be too blurry.'
      );
    }

    // Validate and clean the extracted questions
    const cleaned = questions
      .filter((q) => q.question)
      .map((q) => {
        const isTheory = q.type === 'theory' || (Array.isArray(q.options) && q.options.length === 0);

        // For objective questions, ensure 4 options
        let options = Array.isArray(q.options) ? q.options : [];
        if (!isTheory) {
          while (options.length < 4) options.push('');
          options = options.slice(0, 4);
        }

        return {
          question: String(q.question).trim(),
          options: options.map((opt) => (typeof opt === 'string' ? opt.trim() : String(opt))),
          correctAnswer: typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3
            ? q.correctAnswer
            : -1,
          type: isTheory ? 'theory' : 'objective',
        };
      });

    console.log('[GroqVision] Final cleaned questions:', cleaned);

    if (cleaned.length === 0) {
      throw new Error(
        'The AI response did not contain valid question data. Please try again with a clearer image.'
      );
    }

    return cleaned;
  } catch (error) {
    console.error('[GroqVision] Error:', error);
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error(
        'Network error. Please check your internet connection and try again.'
      );
    }
    throw error;
  }
}

/**
 * Convert a File object to base64
 * @param {File} file
 * @returns {Promise<{base64: string, mimeType: string}>}
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const base64 = dataUrl.split(',')[1];
      resolve({ base64, mimeType: file.type });
    };
    reader.onerror = () => reject(new Error('Failed to read the image file'));
    reader.readAsDataURL(file);
  });
}
