const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-indigo-900/20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800 dark:text-purple-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-400">
                Project Name
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Brief description of the project and your role in it.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 text-sm rounded-full">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
