import { CheckCircle2, XCircle, Clock, User, Hash } from 'lucide-react';

export default function QuestionCard({ question, index }) {
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div
      className="bg-white rounded-2xl border border-surface-200/80 p-5 sm:p-6
        hover:shadow-lg hover:shadow-surface-200/50 hover:border-primary-200/60
        transition-all duration-300 animate-fade-in group"
      style={{ animationDelay: `${index * 0.06}s`, opacity: 0 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-700 text-[11px] font-bold rounded-lg">
            <Hash className="w-3 h-3" />
            Q{index + 1}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-100 text-surface-500 text-[11px] font-medium rounded-lg">
            <Clock className="w-3 h-3" />
            {question.year}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-surface-50 text-surface-400 text-[10px] font-medium rounded-md">
            {question.semester}
          </span>
        </div>
      </div>

      {/* Question */}
      <p className="text-[15px] text-surface-800 font-medium leading-relaxed mb-4">
        {question.question}
      </p>

      {/* Options */}
      <div className="space-y-2">
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctAnswer;
          return (
            <div
              key={i}
              className={`
                flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm border transition-all duration-200
                ${isCorrect
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-800'
                  : 'bg-surface-50/80 border-surface-100 text-surface-600'
                }
              `}
            >
              <span
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0
                  ${isCorrect
                    ? 'bg-emerald-500 text-white'
                    : 'bg-surface-200 text-surface-500'
                  }
                `}
              >
                {optionLetters[i]}
              </span>
              <span className="flex-1">{option}</span>
              {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-surface-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-surface-400">
          <User className="w-3 h-3" />
          <span>Uploaded by {question.uploadedBy}</span>
        </div>
        <span className="text-[11px] text-surface-300 font-mono">{question.courseCode}</span>
      </div>
    </div>
  );
}
