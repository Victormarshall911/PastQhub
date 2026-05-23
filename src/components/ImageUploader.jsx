import { useState, useRef, useCallback } from 'react';
import {
  ImagePlus,
  X,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  FileImage,
  Trash2,
  Camera,
} from 'lucide-react';
import { extractQuestionsFromImage, fileToBase64 } from '../services/groqVision';

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export default function ImageUploader({ onExtracted, onError }) {
  const [dragActive, setDragActive] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionResult, setExtractionResult] = useState(null); // { success, message, count }
  const fileInputRef = useRef(null);

  const handleFile = useCallback((file) => {
    // Validate type
    if (!ACCEPTED_TYPES.includes(file.type)) {
      onError?.('Please upload a JPG, PNG, or WEBP image');
      return;
    }

    // Validate size
    if (file.size > MAX_FILE_SIZE) {
      onError?.('Image must be under 4MB. Try compressing it first.');
      return;
    }

    setImageFile(file);
    setExtractionResult(null);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  }, [onError]);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragActive(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setExtractionResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleExtract = async () => {
    if (!imageFile) return;

    setIsExtracting(true);
    setExtractionResult(null);

    try {
      const { base64, mimeType } = await fileToBase64(imageFile);
      const questions = await extractQuestionsFromImage(base64, mimeType);

      if (questions.length === 0) {
        setExtractionResult({
          success: false,
          message: 'No MCQ questions found in this image. Try a clearer photo.',
        });
        return;
      }

      setExtractionResult({
        success: true,
        message: `Extracted ${questions.length} question${questions.length > 1 ? 's' : ''} successfully!`,
        count: questions.length,
      });

      onExtracted?.(questions);
    } catch (err) {
      setExtractionResult({
        success: false,
        message: err.message || 'Failed to extract questions',
      });
    } finally {
      setIsExtracting(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-4">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleInputChange}
        className="hidden"
        id="image-upload-input"
      />

      {!imagePreview ? (
        /* Drop Zone */
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleBrowse}
          className={`
            relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer
            transition-all duration-300 group
            ${dragActive
              ? 'border-primary-400 bg-primary-50/60 scale-[1.01] shadow-lg shadow-primary-500/10'
              : 'border-surface-300 bg-surface-50/50 hover:border-primary-300 hover:bg-primary-50/30'
            }
          `}
        >
          {/* Decorative gradient blob */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div
              className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full
                bg-gradient-to-br from-primary-400/20 to-primary-600/10 blur-2xl
                transition-all duration-500
                ${dragActive ? 'scale-150 opacity-100' : 'scale-100 opacity-0 group-hover:opacity-60'}
              `}
            />
          </div>

          <div className="relative">
            <div
              className={`
                w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                transition-all duration-300
                ${dragActive
                  ? 'bg-primary-500 shadow-lg shadow-primary-500/30 scale-110'
                  : 'bg-gradient-to-br from-primary-100 to-primary-200 group-hover:scale-105'
                }
              `}
            >
              {dragActive ? (
                <ImagePlus className="w-7 h-7 text-white" />
              ) : (
                <Camera className="w-7 h-7 text-primary-600" />
              )}
            </div>

            <p className="text-sm font-semibold text-surface-700 mb-1">
              {dragActive ? 'Drop your image here' : 'Upload exam paper image'}
            </p>
            <p className="text-xs text-surface-400 mb-3">
              Drag & drop or click to browse
            </p>
            <div className="flex items-center justify-center gap-3 text-[10px] text-surface-400">
              <span className="px-2 py-0.5 bg-surface-100 rounded-full">JPG</span>
              <span className="px-2 py-0.5 bg-surface-100 rounded-full">PNG</span>
              <span className="px-2 py-0.5 bg-surface-100 rounded-full">WEBP</span>
              <span className="px-2 py-0.5 bg-surface-100 rounded-full">Max 4MB</span>
            </div>
          </div>
        </div>
      ) : (
        /* Image Preview + Actions */
        <div className="space-y-3">
          {/* Preview Card */}
          <div className="relative rounded-2xl overflow-hidden border border-surface-200 bg-surface-900 group">
            <img
              src={imagePreview}
              alt="Uploaded exam paper"
              className="w-full max-h-64 object-contain bg-surface-900/95"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-surface-900/0 group-hover:bg-surface-900/20 transition-colors duration-200" />

            {/* Remove button */}
            <button
              type="button"
              onClick={removeImage}
              disabled={isExtracting}
              className="absolute top-2.5 right-2.5 p-2 bg-surface-900/70 backdrop-blur-sm text-white
                rounded-xl hover:bg-danger/80 transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* File info */}
          <div className="flex items-center gap-3 px-3 py-2.5 bg-surface-50 rounded-xl border border-surface-200">
            <FileImage className="w-5 h-5 text-primary-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-surface-700 truncate">{imageFile.name}</p>
              <p className="text-[10px] text-surface-400">{formatFileSize(imageFile.size)}</p>
            </div>
          </div>

          {/* Extract Button */}
          <button
            type="button"
            onClick={handleExtract}
            disabled={isExtracting}
            className={`
              w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-bold
              transition-all duration-300 relative overflow-hidden
              ${isExtracting
                ? 'bg-surface-100 text-surface-400 cursor-wait'
                : 'bg-gradient-to-r from-primary-600 via-primary-500 to-indigo-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0'
              }
            `}
          >
            {isExtracting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>AI is reading the image...</span>
                {/* Shimmer overlay */}
                <div className="absolute inset-0 ai-shimmer" />
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Extract Questions with AI</span>
              </>
            )}
          </button>

          {/* Result Feedback */}
          {extractionResult && (
            <div
              className={`
                flex items-start gap-3 p-4 rounded-xl text-sm animate-fade-in
                ${extractionResult.success
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-amber-50 border border-amber-200 text-amber-800'
                }
              `}
            >
              {extractionResult.success ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-semibold">{extractionResult.message}</p>
                {extractionResult.success && (
                  <p className="text-xs mt-1 opacity-75">
                    Review and edit below, then select the course and submit.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
