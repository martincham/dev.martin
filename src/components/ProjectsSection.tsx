const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-zinc-800 rounded-3xl shadow-md">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="mt-2 ">
              A brief description of the project goes here.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
