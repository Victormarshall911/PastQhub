import { useState, useMemo, useEffect } from 'react';
import {
  PlayCircle,
  FileQuestion,
  Search,
  ArrowRight,
} from 'lucide-react';
import { initialData } from './data/index';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import UploadModal from './components/UploadModal';
import QuizEngine from './components/QuizEngine';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import { supabase } from './lib/supabase';

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [faculties, setFaculties] = useState(initialData.faculties);
  const [questions, setQuestions] = useState(initialData.questions);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuizMode, setIsQuizMode] = useState(false);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

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

    faculties.forEach((faculty) => {
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
    const allCourses = faculties.flatMap((f) =>
      f.departments.flatMap((d) => d.courses)
    );
    const course = allCourses.find((c) => c.code === newQuestion.courseCode);
    if (course) setSelectedCourse(course);
  };

  // Handle adding new metadata from UploadModal
  const handleAddNewMetadata = (newFaculties) => {
    setFaculties(newFaculties);
  };



  return (
    <div className="flex h-screen overflow-hidden bg-surface-50">
      {/* Sidebar */}
      <Sidebar
        faculties={faculties}
        selectedCourse={selectedCourse}
        onSelectCourse={(course) => {
          setSelectedCourse(course);
          setIsQuizMode(false);
          setSearchQuery('');
        }}
        isMobileOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
        onHome={() => {
          setSelectedCourse(null);
          setIsQuizMode(false);
          setSearchQuery('');
        }}
        isHome={!selectedCourse && !isQuizMode && !searchQuery}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar
          user={user}
          onLoginClick={() => setIsAuthOpen(true)}
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
                user={user}
                onExit={() => setIsQuizMode(false)}
              />

            ) : (
              /* Dashboard */
              <Dashboard
                faculties={faculties}
                questions={questions}
                user={user}
                onSelectCourse={(course) => {
                  setSelectedCourse(course);
                  setIsQuizMode(false);
                }}
                onUploadClick={() => setIsUploadOpen(true)}
                onAuthClick={() => setIsAuthOpen(true)}
                onSidebarOpen={() => setIsSidebarOpen(true)}
              />
            )}
          </div>
        </main>
      </div>

      {/* Upload Modal */}
      {user && (
        <UploadModal
          isOpen={isUploadOpen}
          onClose={() => setIsUploadOpen(false)}
          faculties={faculties}
          onSubmit={handleUpload}
          onAddMetadata={handleAddNewMetadata}
          user={user}
        />
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
