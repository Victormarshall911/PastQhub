import { useState, useMemo } from 'react';
import {
  BookOpen,
  PlayCircle,
  FileQuestion,
  Search,
  TrendingUp,
  Users,
  FolderOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { initialData } from './data/mockData';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import UploadModal from './components/UploadModal';
import QuizEngine from './components/QuizEngine';

export default function App() {
  const [questions, setQuestions] = useState(initialData.questions);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuizMode, setIsQuizMode] = useState(false);

  // Filter questions for the selected course
  const courseQuestions = useMemo(() => {
    if (!selectedCourse) return [];
    return questions.filter((q) => q.courseCode === selectedCourse.code);
  }, [selectedCourse, questions]);

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    const matchingCourses = [];

    initialData.faculties.forEach((faculty) => {
      faculty.departments.forEach((dept) => {
        dept.courses.forEach((course) => {
          if (
            course.code.toLowerCase().includes(query) ||
            course.title.toLowerCase().includes(query)
          ) {
            const qCount = questions.filter((q) => q.courseCode === course.code).length;
            matchingCourses.push({
              ...course,
              department: dept.name,
              faculty: faculty.name,
              questionCount: qCount,
            });
          }
        });
      });
    });

    return matchingCourses;
  }, [searchQuery, questions]);

  // Handle upload submission
  const handleUpload = (newQuestion) => {
    setQuestions((prev) => [newQuestion, ...prev]);
    // Auto-navigate to the uploaded question's course
    const allCourses = initialData.faculties.flatMap((f) =>
      f.departments.flatMap((d) => d.courses)
    );
    const course = allCourses.find((c) => c.code === newQuestion.courseCode);
    if (course) setSelectedCourse(course);
  };

  // Stats
  const totalQuestions = questions.length;
  const totalCourses = initialData.faculties.reduce(
    (sum, f) => sum + f.departments.reduce((s, d) => s + d.courses.length, 0),
    0
  );
  const totalDepartments = initialData.faculties.reduce(
    (sum, f) => sum + f.departments.length,
    0
  );

  return (
    <div className="flex h-screen overflow-hidden bg-surface-50">
      {/* Sidebar */}
      <Sidebar
        faculties={initialData.faculties}
        selectedCourse={selectedCourse}
        onSelectCourse={(course) => {
          setSelectedCourse(course);
          setIsQuizMode(false);
          setSearchQuery('');
        }}
        isMobileOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onUploadClick={() => setIsUploadOpen(true)}
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">

            {/* Search Results */}
            {searchResults !== null ? (
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-5">
                  <Search className="w-5 h-5 text-primary-500" />
                  <h2 className="text-lg font-bold text-surface-800">Search Results</h2>
                  <span className="px-2 py-0.5 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full">
                    {searchResults.length} found
                  </span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {searchResults.map((course) => (
                      <button
                        key={course.code}
                        onClick={() => {
                          setSelectedCourse(course);
                          setSearchQuery('');
                          setIsQuizMode(false);
                        }}
                        className="bg-white rounded-xl border border-surface-200 p-4 text-left
                          hover:shadow-lg hover:border-primary-200 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-xs font-mono font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
                              {course.code}
                            </span>
                            <h3 className="text-sm font-semibold text-surface-800 mt-2">{course.title}</h3>
                            <p className="text-xs text-surface-400 mt-1">
                              {course.faculty} → {course.department}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-primary-500">{course.questionCount}</span>
                            <p className="text-[10px] text-surface-400">questions</p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1 text-xs text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          View questions <ArrowRight className="w-3 h-3" />
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-2xl border border-surface-200">
                    <Search className="w-12 h-12 text-surface-300 mx-auto mb-3" />
                    <p className="text-surface-500 font-medium">No courses found for "{searchQuery}"</p>
                    <p className="text-xs text-surface-400 mt-1">Try searching by course code or title</p>
                  </div>
                )}
              </div>

            ) : selectedCourse && !isQuizMode ? (
              /* Course Question Feed */
              <div className="animate-fade-in">
                {/* Course Header */}
                <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-6 sm:p-8 mb-6 text-white shadow-xl shadow-primary-900/20">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 bg-white/20 rounded-lg text-xs font-bold backdrop-blur-sm">
                          {selectedCourse.code}
                        </span>
                        <span className="px-2.5 py-1 bg-white/10 rounded-lg text-[11px] font-medium">
                          {courseQuestions.length} Questions
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold">{selectedCourse.title}</h2>
                      <p className="text-primary-200 text-sm mt-1">Practice with past examination questions</p>
                    </div>

                    {courseQuestions.length > 0 && (
                      <button
                        onClick={() => setIsQuizMode(true)}
                        className="flex items-center gap-2 px-5 py-3 bg-white text-primary-700 text-sm font-bold
                          rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5
                          active:translate-y-0 transition-all duration-200"
                      >
                        <PlayCircle className="w-5 h-5" />
                        Start Quiz
                      </button>
                    )}
                  </div>
                </div>

                {/* Questions Grid */}
                {courseQuestions.length > 0 ? (
                  <div className="space-y-4">
                    {courseQuestions.map((q, i) => (
                      <QuestionCard key={q.id} question={q} index={i} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white rounded-2xl border border-surface-200">
                    <FileQuestion className="w-16 h-16 text-surface-300 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-surface-700 mb-1">No Questions Yet</h3>
                    <p className="text-sm text-surface-400 max-w-md mx-auto">
                      Be the first to upload a past question for {selectedCourse.code}!
                    </p>
                    <button
                      onClick={() => setIsUploadOpen(true)}
                      className="mt-4 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl
                        shadow-lg shadow-primary-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                      Upload Question
                    </button>
                  </div>
                )}
              </div>

            ) : isQuizMode && selectedCourse ? (
              /* Quiz Mode */
              <QuizEngine
                questions={courseQuestions}
                courseCode={selectedCourse.code}
                onExit={() => setIsQuizMode(false)}
              />

            ) : (
              /* Welcome / Dashboard */
              <div className="animate-fade-in">
                {/* Hero */}
                <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-8 sm:p-10 text-white mb-8 shadow-xl shadow-primary-900/20 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary-300" />
                      <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">
                        University Past Questions
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
                      Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">PastQHub</span>
                    </h1>
                    <p className="text-primary-200 text-sm sm:text-base max-w-lg leading-relaxed">
                      Access past examination questions, practice with interactive quizzes, and prepare confidently for your exams.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden flex items-center gap-2 px-5 py-3 bg-white text-primary-700 text-sm font-bold
                          rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                      >
                        <FolderOpen className="w-4 h-4" />
                        Browse Courses
                      </button>
                      <button
                        onClick={() => setIsUploadOpen(true)}
                        className="flex items-center gap-2 px-5 py-3 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold
                          rounded-xl border border-white/20 hover:bg-white/25 transition-all"
                      >
                        <BookOpen className="w-4 h-4" />
                        Upload a Question
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                  {[
                    { icon: FileQuestion, label: 'Total Questions', value: totalQuestions, color: 'primary' },
                    { icon: BookOpen, label: 'Courses', value: totalCourses, color: 'primary' },
                    { icon: Users, label: 'Departments', value: totalDepartments, color: 'primary' },
                    { icon: TrendingUp, label: 'Faculties', value: initialData.faculties.length, color: 'primary' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-surface-200 p-4 hover:shadow-md hover:border-primary-200
                        transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
                    >
                      <stat.icon className="w-5 h-5 text-primary-500 mb-2" />
                      <p className="text-2xl font-bold text-surface-800">{stat.value}</p>
                      <p className="text-xs text-surface-400 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Access */}
                <div>
                  <h3 className="text-base font-bold text-surface-800 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary-500" />
                    Quick Access — Popular Courses
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {initialData.faculties.flatMap((f) =>
                      f.departments.flatMap((d) =>
                        d.courses.slice(0, 1).map((course) => {
                          const qCount = questions.filter((q) => q.courseCode === course.code).length;
                          return (
                            <button
                              key={course.code}
                              onClick={() => {
                                setSelectedCourse(course);
                                setIsQuizMode(false);
                              }}
                              className="bg-white rounded-xl border border-surface-200 p-4 text-left
                                hover:shadow-lg hover:border-primary-200 hover:-translate-y-0.5
                                transition-all duration-300 group"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-mono font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
                                  {course.code}
                                </span>
                                <span className="text-xs text-surface-400 font-medium">{qCount} Qs</span>
                              </div>
                              <h4 className="text-sm font-semibold text-surface-700 group-hover:text-primary-700 transition-colors">
                                {course.title}
                              </h4>
                              <p className="text-[11px] text-surface-400 mt-1">{f.name} → {d.name}</p>
                              <div className="mt-3 flex items-center gap-1 text-xs text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                View questions <ArrowRight className="w-3 h-3" />
                              </div>
                            </button>
                          );
                        })
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Upload Modal */}
      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        faculties={initialData.faculties}
        onSubmit={handleUpload}
      />
    </div>
  );
}
