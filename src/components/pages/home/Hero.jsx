const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Sushant Shrestha
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Software Developer & Designer
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-white text-purple-600 dark:bg-gray-900 dark:text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="bg-transparent text-white px-6 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
