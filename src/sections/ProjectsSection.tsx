type Project = {
  title: string;
  description: string;
  tech: string;
  github: string;
  year: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Synchronized Robotic Sculpture",
    description: "A choreographed motor sculpture I fabricated and programmed.",
    tech: "C++, Arduino, motor control, embedded systems",
    github: "https://github.com/martincham/hubris",
    year: "2024",
  },
  {
    title: "Statistical Basketball Analyzer",
    description:
      "A Python tool I wrote to give more accurate valuations of NBA basketball players.",
    tech: "Python, data analysis, statistical modeling, API",
    github: "https://github.com/martincham/espn-nba-fantasy-analyzer",
    year: "2023–2024",
  },
  {
    title: "Art Portfolio Website",
    description: "For my sculptures.",
    tech: "React, TypeScript, Tailwind CSS, shadcn/ui",
    github: "https://martinchamberlin.com",
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section className="h-full overflow-y-auto px-8 py-12">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-normal mb-12">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {project.image && (
                <div className="mb-4 overflow-hidden rounded bg-muted/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              <div className="flex items-baseline justify-between mb-2">
                <a
                  href={project.github}
                  className="text-xl font-medium hover:text-golden transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
                <span className="text-sm text-muted-foreground flex-shrink-0 ml-4">
                  {project.year}
                </span>
              </div>
              <p className="text-base text-muted-foreground mb-2 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-muted-foreground/70">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
