const HeroSection = () => {
  return (
    <section
      id="hero"
      className="m-8 rounded-3xl min-h-screen bg-gradient-to-b from-blue-500   to-transparent  flex flex-col justify-center items-center outline-"
    >
      <h1 className="text-5xl font-bold mx-auto">Hi, I'm Martin Chamberlin</h1>
      <p className="text-xl mt-4">
        Full-Stack Developer | Problem Solver | Tech Enthusiast
      </p>
      <a
        href="#projects"
        className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-200"
      >
        See My Work
      </a>
    </section>
  );
};

export default HeroSection;
