import { useState } from 'react';
import {
  X,
  Upload,
  ChevronDown,
  AlertCircle,
  Sparkles,
  PenLine,
  Camera,
  ChevronLeft,
  ChevronRight,
  Plus,
  Check,
} from 'lucide-react';
import ImageUploader from './ImageUploader';

export default function UploadModal({ isOpen, onClose, faculties, onSubmit }) {
  const [activeTab, setActiveTab] = useState('manual'); // 'manual' | 'image'
  const [formData, setFormData] = useState({
    facultyId: '',
    departmentId: '',
    courseCode: '',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: -1,
    year: '2024/2025',
    semester: 'First Semester',
  });

  const [errors, setErrors] = useState({});
  const [extractedQuestions, setExtractedQuestions] = useState([]);
  const [currentExtractedIndex, setCurrentExtractedIndex] = useState(0);
  const [aiError, setAiError] = useState('');
  const [wasAutoFilled, setWasAutoFilled] = useState(false);

  if (!isOpen) return null;

  const selectedFaculty = faculties.find((f) => f.id === formData.facultyId);
  const selectedDept = selectedFaculty?.departments.find((d) => d.id === formData.departmentId);
  const availableCourses = selectedDept?.courses || [];

  const updateOption = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.courseCode) newErrors.courseCode = 'Select a course';
    if (!formData.question.trim()) newErrors.question = 'Enter a question';
    if (formData.options.some((opt) => !opt.trim())) newErrors.options = 'Fill in all options';
    if (formData.correctAnswer === -1) newErrors.correctAnswer = 'Select the correct answer';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      facultyId: '',
      departmentId: '',
      courseCode: '',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: -1,
      year: '2024/2025',
      semester: 'First Semester',
    });
    setErrors({});
    setExtractedQuestions([]);
    setCurrentExtractedIndex(0);
    setAiError('');
    setWasAutoFilled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      id: `q-${Date.now()}`,
      courseCode: formData.courseCode,
      departmentId: formData.departmentId,
      question: formData.question,
      options: formData.options,
      correctAnswer: formData.correctAnswer,
      year: formData.year,
      semester: formData.semester,
      uploadedBy: 'You',
      createdAt: new Date().toISOString().split('T')[0],
    });

    // If there are more extracted questions, load the next one
    if (extractedQuestions.length > 1 && currentExtractedIndex < extractedQuestions.length - 1) {
      const nextIndex = currentExtractedIndex + 1;
      setCurrentExtractedIndex(nextIndex);
      loadExtractedQuestion(extractedQuestions[nextIndex]);
      return; // Don't close - let user submit the next question
    }

    resetForm();
    onClose();
  };

  const loadExtractedQuestion = (q) => {
    // Ensure we always have exactly 4 options
    const opts = [...(q.options || [])];
    while (opts.length < 4) opts.push('');

    setFormData((prev) => ({
      ...prev,
      question: q.question || '',
      options: opts.slice(0, 4),
      correctAnswer: typeof q.correctAnswer === 'number' ? q.correctAnswer : -1,
    }));
    setWasAutoFilled(true);
    setErrors({});
  };

  const handleExtracted = (questions) => {
    setExtractedQuestions(questions);
    setCurrentExtractedIndex(0);
    setAiError('');

    if (questions.length > 0) {
      loadExtractedQuestion(questions[0]);
      setActiveTab('manual'); // Switch to manual to let user review
    }
  };

  const handleAiError = (msg) => {
    setAiError(msg);
  };

  const navigateExtracted = (direction) => {
    const newIndex = currentExtractedIndex + direction;
    if (newIndex >= 0 && newIndex < extractedQuestions.length) {
      setCurrentExtractedIndex(newIndex);
      loadExtractedQuestion(extractedQuestions[newIndex]);
    }
  };

  const handleClose = () => {
    resetForm();
    setActiveTab('manual');
    onClose();
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-surface-900/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-6 pt-5 pb-4 border-b border-surface-100 rounded-t-2xl z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-surface-900">Upload Question</h3>
                <p className="text-xs text-surface-400">Add a new past question to the repository</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-xl hover:bg-surface-100 text-surface-400 hover:text-surface-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Toggle */}
          <div className="flex bg-surface-100 rounded-xl p-1 gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('manual')}
              className={`
                flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold
                transition-all duration-200
                ${activeTab === 'manual'
                  ? 'bg-white text-surface-800 shadow-sm tab-active-indicator'
                  : 'text-surface-500 hover:text-surface-700'
                }
              `}
            >
              <PenLine className="w-3.5 h-3.5" />
              Manual Entry
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('image')}
              className={`
                flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold
                transition-all duration-200
                ${activeTab === 'image'
                  ? 'bg-white text-surface-800 shadow-sm tab-active-indicator'
                  : 'text-surface-500 hover:text-surface-700'
                }
              `}
            >
              <Camera className="w-3.5 h-3.5" />
              Upload Image
              <span className="px-1.5 py-0.5 bg-gradient-to-r from-primary-500 to-indigo-500 text-white text-[9px] font-bold rounded-full">
                AI
              </span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {/* Image Upload Tab */}
          {activeTab === 'image' && (
            <div className="animate-fade-in">
              <div className="mb-4 p-3 bg-primary-50/60 rounded-xl border border-primary-100">
                <p className="text-xs text-primary-700 leading-relaxed">
                  <Sparkles className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
                  Upload a photo of a past exam paper and our AI will automatically extract the
                  questions and options for you.
                </p>
              </div>

              <ImageUploader onExtracted={handleExtracted} onError={handleAiError} />

              {aiError && (
                <div className="mt-3 p-3 bg-danger/5 border border-danger/20 rounded-xl text-xs text-danger flex items-start gap-2 animate-fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  {aiError}
                </div>
              )}
            </div>
          )}

          {/* Manual Entry / Review Tab */}
          {activeTab === 'manual' && (
            <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
              {/* Extracted questions navigator */}
              {extractedQuestions.length > 1 && (
                <div className="flex items-center justify-between p-3 bg-primary-50/60 rounded-xl border border-primary-100 extract-highlight">
                  <span className="text-xs font-semibold text-primary-700">
                    Question {currentExtractedIndex + 1} of {extractedQuestions.length}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => navigateExtracted(-1)}
                      disabled={currentExtractedIndex === 0}
                      className="p-1.5 rounded-lg hover:bg-primary-100 text-primary-600
                        disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateExtracted(1)}
                      disabled={currentExtractedIndex >= extractedQuestions.length - 1}
                      className="p-1.5 rounded-lg hover:bg-primary-100 text-primary-600
                        disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Auto-fill banner */}
              {wasAutoFilled && extractedQuestions.length === 1 && (
                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 extract-highlight">
                  <p className="text-xs text-emerald-700 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    AI-extracted question loaded. Review, select the course, mark the correct answer, then submit.
                  </p>
                </div>
              )}

              {/* Faculty */}
              <div>
                <label className="block text-xs font-semibold text-surface-600 mb-1.5">Faculty</label>
                <div className="relative">
                  <select
                    value={formData.facultyId}
                    onChange={(e) =>
                      setFormData({ ...formData, facultyId: e.target.value, departmentId: '', courseCode: '' })
                    }
                    className="w-full px-4 py-2.5 pr-10 bg-surface-50 border border-surface-200 rounded-xl text-sm
                      appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                  >
                    <option value="">Select Faculty</option>
                    {faculties.map((f) => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none" />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-xs font-semibold text-surface-600 mb-1.5">Department</label>
                <div className="relative">
                  <select
                    value={formData.departmentId}
                    onChange={(e) =>
                      setFormData({ ...formData, departmentId: e.target.value, courseCode: '' })
                    }
                    disabled={!selectedFaculty}
                    className="w-full px-4 py-2.5 pr-10 bg-surface-50 border border-surface-200 rounded-xl text-sm
                      appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400
                      disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <option value="">Select Department</option>
                    {selectedFaculty?.departments.map((d) => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none" />
                </div>
              </div>

              {/* Course */}
              <div>
                <label className="block text-xs font-semibold text-surface-600 mb-1.5">Course Code</label>
                <div className="relative">
                  <select
                    value={formData.courseCode}
                    onChange={(e) => setFormData({ ...formData, courseCode: e.target.value })}
                    disabled={!selectedDept}
                    className={`w-full px-4 py-2.5 pr-10 bg-surface-50 border rounded-xl text-sm
                      appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400
                      disabled:opacity-50 disabled:cursor-not-allowed transition-all
                      ${errors.courseCode ? 'border-danger' : 'border-surface-200'}
                    `}
                  >
                    <option value="">Select Course</option>
                    {availableCourses.map((c) => (
                      <option key={c.code} value={c.code}>{c.code} — {c.title}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none" />
                </div>
                {errors.courseCode && (
                  <p className="text-[11px] text-danger mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.courseCode}
                  </p>
                )}
              </div>

              {/* Year & Semester */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-surface-600 mb-1.5">Academic Year</label>
                  <div className="relative">
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-3 py-2.5 pr-8 bg-surface-50 border border-surface-200 rounded-xl text-sm
                        appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                    >
                      <option>2024/2025</option>
                      <option>2023/2024</option>
                      <option>2022/2023</option>
                      <option>2021/2022</option>
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-surface-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-surface-600 mb-1.5">Semester</label>
                  <div className="relative">
                    <select
                      value={formData.semester}
                      onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                      className="w-full px-3 py-2.5 pr-8 bg-surface-50 border border-surface-200 rounded-xl text-sm
                        appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                    >
                      <option>First Semester</option>
                      <option>Second Semester</option>
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-surface-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Question */}
              <div>
                <label className="block text-xs font-semibold text-surface-600 mb-1.5">
                  Question
                  {wasAutoFilled && (
                    <span className="ml-2 text-primary-500 font-normal">
                      <Sparkles className="w-3 h-3 inline-block -mt-0.5 mr-0.5" />
                      AI-extracted
                    </span>
                  )}
                </label>
                <textarea
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  rows={3}
                  placeholder="Enter the past question..."
                  className={`w-full px-4 py-3 bg-surface-50 border rounded-xl text-sm resize-none
                    focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all
                    placeholder:text-surface-400
                    ${errors.question ? 'border-danger' : 'border-surface-200'}
                    ${wasAutoFilled ? 'extract-highlight' : ''}
                  `}
                />
                {errors.question && (
                  <p className="text-[11px] text-danger mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.question}
                  </p>
                )}
              </div>

              {/* Options */}
              <div>
                <label className="block text-xs font-semibold text-surface-600 mb-2">
                  Answer Options
                  {errors.options && (
                    <span className="text-danger ml-2 font-normal">— {errors.options}</span>
                  )}
                </label>
                <div className="space-y-2">
                  {formData.options.map((opt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, correctAnswer: i })}
                        className={`
                          w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0
                          transition-all duration-200 border
                          ${formData.correctAnswer === i
                            ? 'bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/25'
                            : 'bg-surface-50 border-surface-200 text-surface-500 hover:border-primary-300 hover:text-primary-500'
                          }
                        `}
                      >
                        {optionLabels[i]}
                      </button>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => updateOption(i, e.target.value)}
                        placeholder={`Option ${optionLabels[i]}`}
                        className={`flex-1 px-3 py-2 bg-surface-50 border border-surface-200 rounded-lg text-sm
                          focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all
                          placeholder:text-surface-400
                          ${wasAutoFilled && opt ? 'extract-highlight' : ''}
                        `}
                      />
                    </div>
                  ))}
                </div>
                {errors.correctAnswer && (
                  <p className="text-[11px] text-danger mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.correctAnswer}
                  </p>
                )}
                <p className="text-[10px] text-surface-400 mt-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Click the letter to mark it as the correct answer
                </p>
              </div>

              {/* Submit */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 text-sm font-medium text-surface-600 hover:bg-surface-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold
                    rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:-translate-y-0.5
                    active:translate-y-0 transition-all duration-200 flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  {extractedQuestions.length > 1 && currentExtractedIndex < extractedQuestions.length - 1
                    ? `Upload & Next (${currentExtractedIndex + 1}/${extractedQuestions.length})`
                    : 'Upload Question'
                  }
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
