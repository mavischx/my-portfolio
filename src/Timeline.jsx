export default function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        My Journey
      </h2>
            {/* Continuous vertical line */}
  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-neutral-600 transform -translate-x-1/2"></div>
      {/* 2022 - Started College (LEFT) */}
      <div className="relative">
        <div className="flex items-center mb-8">
          {/* Left Content */}
          <div className="w-5/12 text-right pr-8 relative">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700">
              {/* connector from content to timeline */}
              <div className="hidden md:block absolute top-1/2 right-0 h-0.5 w-8 bg-gray-300 dark:bg-neutral-600 transform translate-x-4 -translate-y-1/2"></div>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase">
                New Beginning 🚀
              </span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-2">
                Started College Journey
              </h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400 mt-2">
                Began pursuing Bachelor's degree in Computer Science. The start of an exciting academic and professional journey!
              </p>
              <p className="text-xs text-gray-500 dark:text-neutral-500 mt-3 font-medium">
                September 2022
              </p>
            </div>
          </div>
          
          {/* Center Line with Dot */}
          <div className="w-2/12 flex justify-center relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-neutral-600 transform -translate-x-1/2"></div>
            {/* dot sits at the start of the line for left items */}
            <div className="relative z-10 transform -translate-x-1/2">
              <div className="w-6 h-6 flex items-center justify-center bg-indigo-600 dark:bg-indigo-500 rounded-full ring-4 ring-white dark:ring-neutral-900 shadow-md text-white text-sm transition-transform duration-200 hover:scale-110">•</div>
            </div>
          </div>
          
          {/* Right Empty */}
          <div className="w-5/12"></div>
        </div>
      </div>

      {/* 2024-2025 - Internship (RIGHT) */}
      <div className="relative">
        <div className="flex items-center mb-8">
          {/* Left Empty */}
          <div className="w-5/12"></div>
          
          {/* Center Line with Dot */}
          <div className="w-2/12 flex justify-center relative">
            <div className="w-1 h-full bg-gray-300 dark:bg-neutral-600 absolute top-0"></div>
            <div className="w-8 h-8 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-white dark:border-neutral-900 z-10 shadow-lg"></div>
          </div>
          
          {/* Right Content */}
          <div className="w-5/12 pl-8 relative">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700">
              {/* connector from content to timeline */}
              <div className="hidden md:block absolute top-1/2 left-0 h-0.5 w-8 bg-gray-300 dark:bg-neutral-600 transform -translate-x-4 -translate-y-1/2"></div>
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase">
                Professional Experience 💼
              </span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-2">
                Software Development Internship
              </h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400 mt-2">
                Gained hands-on industry experience. Worked on real-world projects and developed professional skills in software development.
              </p>
              <p className="text-xs text-gray-500 dark:text-neutral-500 mt-3 font-medium">
                Summer 2024 - 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2025 - Back to College (LEFT) */}
      <div className="relative">
        <div className="flex items-center mb-8">
          {/* Left Content */}
          <div className="w-5/12 text-right pr-8 relative">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700">
              <div className="hidden md:block absolute top-1/2 right-0 h-0.5 w-8 bg-gray-300 dark:bg-neutral-600 transform translate-x-4 -translate-y-1/2"></div>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase">
                Final Year 📚
              </span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-2">
                Returned to College
              </h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400 mt-2">
                Back on campus for the final year. Applying internship experience to coursework and final year project.
              </p>
              <p className="text-xs text-gray-500 dark:text-neutral-500 mt-3 font-medium">
                September 2025
              </p>
            </div>
          </div>
          
          {/* Center Line with Dot */}
          <div className="w-2/12 flex justify-center relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-neutral-600 transform -translate-x-1/2"></div>
            {/* dot sits at the start of the line for left items */}
            <div className="relative z-10 transform -translate-x-1/2">
              <div className="w-6 h-6 flex items-center justify-center bg-green-600 dark:bg-green-500 rounded-full ring-4 ring-white dark:ring-neutral-900 shadow-md text-white text-sm transition-transform duration-200 hover:scale-110">•</div>
            </div>
          </div>
          
          {/* Right Empty */}
          <div className="w-5/12"></div>
        </div>
      </div>

      {/* 2026 - Graduation (RIGHT) */}
      <div className="relative">
        <div className="flex items-center">
          {/* Left Empty */}
          <div className="w-5/12"></div>
          
          {/* Center Line with Dot */}
          <div className="w-2/12 flex justify-center relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-neutral-600 transform -translate-x-1/2"></div>
            {/* dot sits at the end of the line for right items */}
            <div className="relative z-10 transform translate-x-1/2">
              <div className="w-6 h-6 flex items-center justify-center bg-blue-600 dark:bg-blue-500 rounded-full ring-4 ring-white dark:ring-neutral-900 shadow-md text-white text-sm transition-transform duration-200 hover:scale-110">•</div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-5/12 pl-8">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">
                Expected Graduation 🎓
              </span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-2">
                Bachelor's Degree Completion
              </h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400 mt-2">
                Graduating with a degree in Computer Science. Ready to join the workforce full-time!
              </p>
              <p className="text-xs text-gray-500 dark:text-neutral-500 mt-3 font-medium">
                May 2026
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}