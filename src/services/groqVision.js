/**
 * Groq Vision Service
 * Uses Llama 3.2 Vision to extract MCQ questions from uploaded images
 */

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const VISION_MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';

const EXTRACTION_PROMPT = `You are an expert at reading exam papers. Analyze this image of a past examination question paper.

Extract EACH multiple-choice question you can see. For each question, provide:
- The question text (verbatim as written)
- The options labeled A, B, C, D (verbatim as written)
- The correct answer index (0=A, 1=B, 2=C, 3=D) ONLY if the answer is marked/indicated in the image. If not marked, set to -1.

IMPORTANT RULES:
- Extract the questions EXACTLY as written — do not paraphrase
- If an option is partially obscured, include what you can read with "[unclear]" for missing parts
- If there are numbered questions, include the number in the question text
- Return ONLY valid JSON, no markdown formatting, no code fences

Return a JSON array in this exact format:
[
  {
    "question": "The full question text here?",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "correctAnswer": -1
  }
]

If you cannot read any questions from the image, return:
[{"error": "Could not extract questions from this image. Please ensure the image is clear and contains MCQ questions."}]`;

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
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
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
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
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
      throw new Error(
        errorData?.error?.message || `Groq API error (${response.status})`
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No response received from Groq Vision');
    }

    // Parse the JSON response
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      // Try to extract JSON from the response if it has extra text
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Could not parse AI response');
      }
    }

    // Handle both array and object with questions key
    const questions = Array.isArray(parsed) ? parsed : (parsed.questions || [parsed]);

    // Check for error responses
    if (questions.length === 1 && questions[0].error) {
      throw new Error(questions[0].error);
    }

    // Validate and clean the extracted questions
    return questions
      .filter((q) => q.question && Array.isArray(q.options))
      .map((q) => ({
        question: q.question.trim(),
        options: q.options.map((opt) => (typeof opt === 'string' ? opt.trim() : String(opt))),
        correctAnswer: typeof q.correctAnswer === 'number' ? q.correctAnswer : -1,
      }));
  } catch (error) {
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
