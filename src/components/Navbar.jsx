import { Search, Plus, Menu, GraduationCap } from 'lucide-react';

export default function Navbar({ searchQuery, onSearchChange, onUploadClick, onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 glass border-b border-surface-200/60">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 gap-3">
        {/* Left - Menu + Title */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-surface-100 text-surface-500 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center lg:hidden">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div className="hidden md:block">
              <h2 className="text-sm font-bold text-surface-800">Past Question Repository</h2>
              <p className="text-[10px] text-surface-400">Access thousands of university past questions</p>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
            <input
              type="text"
              placeholder="Search courses (e.g., CSC201, Thermodynamics)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-surface-100/80 border border-surface-200 rounded-xl
                text-sm text-surface-700 placeholder:text-surface-400
                focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 focus:bg-white
                transition-all duration-200"
            />
          </div>
        </div>

        {/* Right - Upload */}
        <button
          onClick={onUploadClick}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500
            text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary-500/25
            hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5
            active:translate-y-0 transition-all duration-200 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Upload</span>
        </button>
      </div>
    </header>
  );
}
