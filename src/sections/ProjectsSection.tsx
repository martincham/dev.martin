type Project = {
  title: string;
  description: string;
  github: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Python Statistical Basketball Analyzer",
    description:
      "Identified inefficiencies and developed algorithms to create 'market' advantage from scheduling, scoring, and cognitive bias.",
    github: "https://github.com/martincham/espn-nba-fantasy-analyzer",
    year: "2023–2024",
  },
  {
    title: "Art Portfolio",
    description: "Built in React.js, TypeScript, Tailwind CSS, shadcn, and Radix UI.",
    github: "https://github.com/martincham/art-portfolio",
    year: "2024",
  },
  {
    title: "Synchronized Robotic Sculpture",
    description: "Used C++ and microcontrollers to drive motors for a sculpture installation.",
    github: "https://github.com/martincham/hubris",
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section className="p-3 border-b border-muted">
      <h2 className="text-base font-semibold mb-1">Projects</h2>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline gap-2 mb-0.5">
              <a
                href={project.github}
                className="text-sm font-semibold text-golden hover:text-muted-foreground transition-colors leading-tight"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
              <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{project.year}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-tight">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
