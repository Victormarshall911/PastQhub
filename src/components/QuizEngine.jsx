import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  Zap,
  Target,
  Clock,
} from 'lucide-react';

export default function QuizEngine({ questions, courseCode, onExit }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // track each answer
  const [isFinished, setIsFinished] = useState(false);

  const current = questions[currentIndex];
  const total = questions.length;
  const progress = ((currentIndex + 1) / total) * 100;
  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleSelect = (index) => {
    if (isRevealed) return;
    setSelectedAnswer(index);
    setIsRevealed(true);

    const isCorrect = index === current.correctAnswer;
    if (isCorrect) setScore((prev) => prev + 1);

    setAnswers((prev) => [...prev, { questionId: current.id, selected: index, correct: current.correctAnswer, isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsRevealed(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsRevealed(false);
    setScore(0);
    setAnswers([]);
    setIsFinished(false);
  };

  const scorePercent = Math.round((score / total) * 100);
  const getGrade = () => {
    if (scorePercent >= 70) return { label: 'Excellent!', emoji: '🎉', color: 'text-emerald-600' };
    if (scorePercent >= 50) return { label: 'Good Job!', emoji: '👍', color: 'text-primary-600' };
    return { label: 'Keep Practicing!', emoji: '💪', color: 'text-warning' };
  };

  // Results Screen
  if (isFinished) {
    const grade = getGrade();
    return (
      <div className="max-w-lg mx-auto animate-scale-in">
        <div className="bg-white rounded-3xl border border-surface-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-center text-white">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Trophy className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold mb-1">Quiz Complete!</h2>
            <p className="text-primary-200 text-sm font-mono">{courseCode}</p>
          </div>

          {/* Score */}
          <div className="px-8 py-8 text-center">
            <div className="relative w-32 h-32 mx-auto mb-5">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="56" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle
                  cx="64" cy="64" r="56" fill="none"
                  stroke={scorePercent >= 70 ? '#10b981' : scorePercent >= 50 ? '#6366f1' : '#f59e0b'}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${scorePercent * 3.52} 352`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-surface-800">{score}/{total}</span>
                <span className="text-xs text-surface-400">{scorePercent}%</span>
              </div>
            </div>

            <p className={`text-xl font-bold ${grade.color} mb-1`}>
              {grade.emoji} {grade.label}
            </p>
            <p className="text-sm text-surface-500">
              You answered {score} out of {total} questions correctly
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-emerald-50 rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                <p className="text-lg font-bold text-emerald-700">{score}</p>
                <p className="text-[10px] text-emerald-600">Correct</p>
              </div>
              <div className="bg-red-50 rounded-xl p-3">
                <XCircle className="w-5 h-5 text-red-500 mx-auto mb-1" />
                <p className="text-lg font-bold text-red-700">{total - score}</p>
                <p className="text-[10px] text-red-600">Wrong</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-3">
                <Target className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                <p className="text-lg font-bold text-primary-700">{scorePercent}%</p>
                <p className="text-[10px] text-primary-600">Accuracy</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleRestart}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-surface-100 text-surface-700
                  text-sm font-semibold rounded-xl hover:bg-surface-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Retake
              </button>
              <button
                onClick={onExit}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500
                  text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary-500/25
                  hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Questions
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Question Screen
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {/* Quiz Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onExit}
          className="flex items-center gap-2 text-sm text-surface-500 hover:text-surface-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Exit Quiz
        </button>
        <div className="flex items-center gap-2 text-sm">
          <Zap className="w-4 h-4 text-primary-500" />
          <span className="font-bold text-primary-600">{courseCode}</span>
          <span className="text-surface-400">Quiz</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-surface-500">
            Question {currentIndex + 1} of {total}
          </span>
          <span className="text-xs font-mono text-primary-500">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-surface-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-surface-200 shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Question Meta */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2.5 py-1 bg-primary-50 text-primary-600 text-[11px] font-bold rounded-lg">
              Q{currentIndex + 1}
            </span>
            <span className="px-2.5 py-1 bg-surface-100 text-surface-500 text-[11px] font-medium rounded-lg flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {current.year}
            </span>
          </div>

          {/* Question Text */}
          <h3 className="text-lg font-semibold text-surface-800 leading-relaxed mb-6">
            {current.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {current.options.map((option, i) => {
              const isSelected = selectedAnswer === i;
              const isCorrectOption = i === current.correctAnswer;

              let classes = 'quiz-option cursor-pointer border-2 ';
              if (!isRevealed) {
                classes += isSelected
                  ? 'border-primary-400 bg-primary-50 ring-2 ring-primary-200'
                  : 'border-surface-200 bg-surface-50/80 hover:border-primary-300 hover:bg-primary-50/50';
              } else {
                classes += 'quiz-locked cursor-default ';
                if (isCorrectOption) {
                  classes += 'quiz-correct border-emerald-400 !bg-emerald-50';
                } else if (isSelected && !isCorrectOption) {
                  classes += 'quiz-incorrect border-red-400 !bg-red-50';
                } else {
                  classes += 'border-surface-100 bg-surface-50/50 opacity-60';
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={isRevealed}
                  className={`${classes} w-full flex items-center gap-4 px-5 py-4 rounded-xl text-sm text-left transition-all duration-200`}
                >
                  <span
                    className={`
                      w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors
                      ${isRevealed && isCorrectOption
                        ? 'bg-emerald-500 text-white'
                        : isRevealed && isSelected && !isCorrectOption
                          ? 'bg-red-500 text-white'
                          : isSelected
                            ? 'bg-primary-500 text-white'
                            : 'bg-surface-200 text-surface-600'
                      }
                    `}
                  >
                    {optionLetters[i]}
                  </span>
                  <span className="flex-1 font-medium">{option}</span>
                  {isRevealed && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {isRevealed && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {isRevealed && (
            <div
              className={`mt-5 p-4 rounded-xl text-sm font-medium animate-fade-in
                ${selectedAnswer === current.correctAnswer
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
                }
              `}
            >
              {selectedAnswer === current.correctAnswer ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Correct! Well done! 🎉
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Incorrect. The correct answer is{' '}
                  <strong>{optionLetters[current.correctAnswer]}: {current.options[current.correctAnswer]}</strong>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-surface-50 border-t border-surface-100 flex items-center justify-between">
          <div className="text-xs text-surface-400">
            Score: <span className="font-bold text-primary-600">{score}</span> / {currentIndex + (isRevealed ? 1 : 0)}
          </div>
          {isRevealed && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500
                text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary-500/25
                hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              {currentIndex < total - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  View Results
                  <Trophy className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Question Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${i === currentIndex
                ? 'bg-primary-500 w-6'
                : i < currentIndex
                  ? answers[i]?.isCorrect ? 'bg-emerald-400' : 'bg-red-400'
                  : 'bg-surface-300'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
