import {
  BookOpen,
  FileQuestion,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight,
  FolderOpen,
  Trophy,
  Clock,
  Zap,
  BarChart3,
  ChevronRight,
  GraduationCap,
  Star,
} from 'lucide-react';

export default function Dashboard({
  faculties,
  questions,
  user,
  onSelectCourse,
  onUploadClick,
  onAuthClick,
  onSidebarOpen,
}) {
  const totalQuestions = questions.length;
  const totalCourses = faculties.reduce(
    (sum, f) => sum + f.departments.reduce((s, d) => s + d.courses.length, 0),
    0
  );
  const totalDepts = faculties.reduce((sum, f) => sum + f.departments.length, 0);
  const totalFaculties = faculties.length;

  // Courses with the most questions
  const allCourses = faculties.flatMap((f) =>
    f.departments.flatMap((d) =>
      d.courses.map((c) => ({
        ...c,
        departmentName: d.name,
        facultyName: f.name,
        qCount: questions.filter((q) => q.courseCode === c.code).length,
      }))
    )
  );
  const topCourses = [...allCourses]
    .filter((c) => c.qCount > 0)
    .sort((a, b) => b.qCount - a.qCount)
    .slice(0, 6);

  const recentQuestions = [...questions]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  const facultyStats = faculties.map((f) => {
    const deptCount = f.departments.length;
    const courseCount = f.departments.reduce((s, d) => s + d.courses.length, 0);
    const qCount = questions.filter((q) =>
      f.departments.some((d) =>
        d.courses.some((c) => c.code === q.courseCode)
      )
    ).length;
    return { ...f, deptCount, courseCount, qCount };
  });

  const stats = [
    { icon: FileQuestion, label: 'Total Questions', value: totalQuestions, color: 'indigo', bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
    { icon: BookOpen, label: 'Courses', value: totalCourses, color: 'violet', bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100' },
    { icon: Users, label: 'Departments', value: totalDepts, color: 'sky', bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-100' },
    { icon: GraduationCap, label: 'Faculties', value: totalFaculties, color: 'emerald', bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
  ];

  return (
    <div className="animate-fade-in">

      {/* ── Hero Banner ── */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-8 sm:p-10 text-white mb-8 shadow-xl shadow-primary-900/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 pointer-events-none" />
        <div className="absolute top-8 right-12 w-20 h-20 bg-white/10 rounded-2xl rotate-12 pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary-300" />
            <span className="text-xs font-semibold text-primary-300 uppercase tracking-widest">
              Nigerian University Past Questions
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            Welcome{user ? `, ${user.email?.split('@')[0]}` : ''} to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">
              PastQHub
            </span>
          </h1>
          <p className="text-primary-200 text-sm sm:text-base max-w-lg leading-relaxed mb-6">
            Access past exam questions across{' '}
            <strong className="text-white">{totalFaculties} faculties</strong> and{' '}
            <strong className="text-white">{totalDepts} departments</strong>. Practice with interactive quizzes and prepare smarter.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onSidebarOpen}
              className="lg:hidden flex items-center gap-2 px-5 py-2.5 bg-white text-primary-700 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <FolderOpen className="w-4 h-4" />
              Browse Courses
            </button>
            {user ? (
              <button
                onClick={onUploadClick}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/25 transition-all"
              >
                <Zap className="w-4 h-4" />
                Upload a Question
              </button>
            ) : (
              <button
                onClick={onAuthClick}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/25 transition-all"
              >
                <Users className="w-4 h-4" />
                Sign In to Contribute
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border ${stat.border} p-5 animate-slide-up hover:shadow-md transition-all duration-300`}
            style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
          >
            <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.text}`} />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-surface-800">{stat.value}</p>
            <p className="text-xs text-surface-400 font-medium mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ── Two-column layout ── */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        {/* Top Courses (2/3 width) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-surface-800 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              Top Courses by Questions
            </h2>
            <span className="text-xs text-surface-400">{topCourses.length} courses with content</span>
          </div>

          {topCourses.length > 0 ? (
            <div className="space-y-2">
              {topCourses.map((course, i) => (
                <button
                  key={course.code}
                  onClick={() => onSelectCourse(course)}
                  className="w-full bg-white rounded-xl border border-surface-200 px-4 py-3.5 flex items-center gap-4
                    hover:shadow-md hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-200 group text-left"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-black text-primary-600">#{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
                        {course.code}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-surface-700 truncate mt-1 group-hover:text-primary-700 transition-colors">
                      {course.title}
                    </p>
                    <p className="text-[11px] text-surface-400">{course.facultyName} → {course.departmentName}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="text-lg font-extrabold text-primary-600">{course.qCount}</span>
                    <p className="text-[10px] text-surface-400">questions</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-surface-300 group-hover:text-primary-400 flex-shrink-0 transition-colors" />
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-surface-200 p-10 text-center">
              <FileQuestion className="w-12 h-12 text-surface-200 mx-auto mb-3" />
              <p className="text-surface-400 text-sm">No questions uploaded yet. Be the first!</p>
            </div>
          )}
        </div>

        {/* Recent Activity (1/3 width) */}
        <div>
          <h2 className="text-base font-bold text-surface-800 flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-primary-500" />
            Recent Questions
          </h2>
          <div className="space-y-2">
            {recentQuestions.length > 0 ? recentQuestions.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-surface-200 p-3.5"
              >
                <span className="inline-block text-[10px] font-mono font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md mb-2">
                  {q.courseCode}
                </span>
                <p className="text-xs text-surface-600 leading-relaxed line-clamp-2">{q.question}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-surface-400">{q.year}</span>
                  <span className="w-1 h-1 rounded-full bg-surface-300" />
                  <span className="text-[10px] text-surface-400">{q.semester}</span>
                </div>
              </div>
            )) : (
              <div className="bg-white rounded-xl border border-surface-200 p-6 text-center">
                <p className="text-xs text-surface-400">No questions yet</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Faculty Overview Grid ── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-surface-800 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary-500" />
            Faculty Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {facultyStats.map((faculty, i) => {
            const colors = [
              { bg: 'from-indigo-500 to-primary-600', light: 'bg-indigo-50', text: 'text-indigo-600' },
              { bg: 'from-violet-500 to-purple-600', light: 'bg-violet-50', text: 'text-violet-600' },
              { bg: 'from-sky-500 to-blue-600', light: 'bg-sky-50', text: 'text-sky-600' },
              { bg: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50', text: 'text-emerald-600' },
              { bg: 'from-amber-500 to-orange-600', light: 'bg-amber-50', text: 'text-amber-600' },
              { bg: 'from-rose-500 to-pink-600', light: 'bg-rose-50', text: 'text-rose-600' },
              { bg: 'from-cyan-500 to-sky-600', light: 'bg-cyan-50', text: 'text-cyan-600' },
              { bg: 'from-fuchsia-500 to-violet-600', light: 'bg-fuchsia-50', text: 'text-fuchsia-600' },
              { bg: 'from-lime-500 to-green-600', light: 'bg-lime-50', text: 'text-lime-600' },
              { bg: 'from-orange-500 to-amber-600', light: 'bg-orange-50', text: 'text-orange-600' },
              { bg: 'from-teal-500 to-emerald-600', light: 'bg-teal-50', text: 'text-teal-600' },
              { bg: 'from-purple-500 to-fuchsia-600', light: 'bg-purple-50', text: 'text-purple-600' },
              { bg: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', text: 'text-blue-600' },
            ];
            const c = colors[i % colors.length];
            return (
              <div
                key={faculty.id}
                className="bg-white rounded-2xl border border-surface-200 p-4 hover:shadow-md hover:border-primary-200 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 0.04}s`, opacity: 0 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.bg} flex items-center justify-center mb-3 shadow-sm`}>
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-surface-800 leading-tight mb-3">{faculty.name}</h3>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-surface-400">Departments</span>
                    <span className="text-[11px] font-semibold text-surface-600">{faculty.deptCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-surface-400">Courses</span>
                    <span className="text-[11px] font-semibold text-surface-600">{faculty.courseCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-surface-400">Questions</span>
                    <span className={`text-[11px] font-bold ${faculty.qCount > 0 ? c.text : 'text-surface-400'}`}>
                      {faculty.qCount > 0 ? faculty.qCount : '—'}
                    </span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-3 h-1.5 bg-surface-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${c.bg} rounded-full transition-all duration-700`}
                    style={{ width: totalQuestions > 0 ? `${Math.min(100, (faculty.qCount / totalQuestions) * 100 * 5)}%` : '5%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Call-to-action footer ── */}
      {!user && (
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-violet-50 border border-primary-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-surface-800 mb-1">Join PastQHub & Contribute</h3>
            <p className="text-sm text-surface-500">Sign in to upload past questions and help fellow students prepare.</p>
          </div>
          <button
            onClick={onAuthClick}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
