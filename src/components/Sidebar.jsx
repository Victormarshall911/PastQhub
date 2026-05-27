import { useState } from 'react';
import {
  GraduationCap,
  ChevronDown,
  ChevronRight,
  Atom,
  Wrench,
  BookOpen,
  Building2,
  X,
  Sprout,
  Palette,
  Microscope,
  Scale,
  Briefcase,
  HeartPulse,
  Pill,
  Users,
  PawPrint,
} from 'lucide-react';

const facultyIcons = {
  Atom,
  Wrench,
  Sprout,
  Palette,
  Microscope,
  Scale,
  Briefcase,
  HeartPulse,
  Pill,
  Users,
  PawPrint,
  Building2,
  GraduationCap,
};

export default function Sidebar({
  faculties,
  selectedCourse,
  onSelectCourse,
  isMobileOpen,
  onCloseMobile,
}) {
  const [expandedFaculty, setExpandedFaculty] = useState(faculties[0]?.id || '');
  const [expandedDept, setExpandedDept] = useState('');

  const toggleFaculty = (id) => {
    setExpandedFaculty(expandedFaculty === id ? '' : id);
    setExpandedDept('');
  };

  const toggleDept = (id) => {
    setExpandedDept(expandedDept === id ? '' : id);
  };

  const handleCourseClick = (course) => {
    onSelectCourse(course);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-surface-200
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col overflow-hidden
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-surface-900 leading-tight">PastQHub</h1>
              <p className="text-[10px] text-surface-400 font-medium tracking-wide uppercase">Question Bank</p>
            </div>
          </div>
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg hover:bg-surface-100 text-surface-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <p className="px-2 mb-2 text-[10px] font-semibold text-surface-400 uppercase tracking-wider">
            Browse Faculties
          </p>

          {faculties.map((faculty) => {
            const FacultyIcon = facultyIcons[faculty.icon] || BookOpen;
            const isExpanded = expandedFaculty === faculty.id;

            return (
              <div key={faculty.id} className="mb-1">
                {/* Faculty */}
                <button
                  onClick={() => toggleFaculty(faculty.id)}
                  className={`
                    w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-200 group
                    ${isExpanded
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-surface-600 hover:bg-surface-100 hover:text-surface-800'
                    }
                  `}
                >
                  <FacultyIcon className={`w-4 h-4 shrink-0 ${isExpanded ? 'text-primary-500' : 'text-surface-400 group-hover:text-surface-500'}`} />
                  <span className="flex-1 text-left truncate">{faculty.name}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-primary-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-surface-400" />
                  )}
                </button>

                {/* Departments */}
                {isExpanded && (
                  <div className="ml-3 mt-1 animate-fade-in">
                    {faculty.departments.map((dept) => {
                      const isDeptExpanded = expandedDept === dept.id;

                      return (
                        <div key={dept.id} className="mb-0.5">
                          <button
                            onClick={() => toggleDept(dept.id)}
                            className={`
                              w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[13px]
                              transition-all duration-200
                              ${isDeptExpanded
                                ? 'text-primary-600 font-medium'
                                : 'text-surface-500 hover:text-surface-700 hover:bg-surface-50'
                              }
                            `}
                          >
                            <Building2 className="w-3.5 h-3.5 shrink-0" />
                            <span className="flex-1 text-left truncate">{dept.name}</span>
                            {isDeptExpanded ? (
                              <ChevronDown className="w-3 h-3" />
                            ) : (
                              <ChevronRight className="w-3 h-3" />
                            )}
                          </button>

                          {/* Courses */}
                          {isDeptExpanded && (
                            <div className="ml-4 mt-0.5 space-y-0.5 animate-fade-in">
                              {dept.courses.map((course) => {
                                const isActive = selectedCourse?.code === course.code;
                                return (
                                  <button
                                    key={course.code}
                                    onClick={() => handleCourseClick(course)}
                                    className={`
                                      w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs
                                      transition-all duration-200
                                      ${isActive
                                        ? 'bg-primary-600 text-white font-semibold shadow-md shadow-primary-200'
                                        : 'text-surface-500 hover:bg-primary-50 hover:text-primary-600'
                                      }
                                    `}
                                  >
                                    <BookOpen className={`w-3 h-3 shrink-0 ${isActive ? 'text-primary-200' : ''}`} />
                                    <span className="font-mono font-semibold">{course.code}</span>
                                    <span className="truncate opacity-75">— {course.title}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-surface-100">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100/60 rounded-xl p-3">
            <p className="text-xs font-semibold text-primary-700">📚 Study Tip</p>
            <p className="text-[11px] text-primary-600/80 mt-1 leading-relaxed">
              Practice with past questions to boost your exam confidence!
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
