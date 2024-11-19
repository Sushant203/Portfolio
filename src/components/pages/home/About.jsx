const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/50 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-800 dark:text-purple-400">
          About Me
        </h2>
        <div className="prose lg:prose-lg mx-auto dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300">
            Hello! I&apos;m Sushant, a passionate software developer with a keen
            eye for design and user experience. I specialize in building modern
            web applications that are both beautiful and functional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
