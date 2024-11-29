import mypic from "../../../assets/mypic.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Sushant Shrestha
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Software Developer & Designer
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-transparent text-gray-900 dark:text-white px-6 py-3 rounded-lg border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-400 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 rounded-full filter blur-xl opacity-50 animate-blob"></div>
            <img
              src={mypic}
              alt="Sushant Shrestha"
              className="relative w-full h-full object-cover rounded-full border-2 border-gray-300 dark:border-gray-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
