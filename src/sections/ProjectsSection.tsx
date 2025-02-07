import { useState } from "react";
import ReactModal from "react-modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

ReactModal.setAppElement("#root");

type Project = {
  title: string;
  description: string;
  details: string;
  github: string;
  year: string;
};

const projects = [
  {
    title: "NBA Player Analyzer",
    description:
      "Python CLI for evaluating player value. Analyzed and pushes data to Google Sheets API.",
    github: "https://github.com/martincham/espn-nba-fantasy-analyzer",
    year: "2023-24",
    details:
      "This command-line tool I built in 2023 solves the problem of inaccurate player valuation. It pulls data from ESPN's API, uses Pandas to normalize each stat to it's average in the league, and pushes to Google's Sheets API. It can also find marginal improvements a based on a team's schedule. See the GitHub for more detail.",
  },
  {
    title: "Arduino Sculpture",
    description:
      "A wirelessly communicating sculpture installation made with C++ and robotics.",
    github: "https://github.com/martincham/hubris",
    year: "2024",
    details: "Website in progress. Come back later!",
  },
  {
    title: "Developer Portfolio",
    description: "Built with React.js, Tailwind CSS.",
    github: "https://github.com/martincham/martincham.github.io",
    year: "2024",
    details: "Website in progress. Come back later!",
  },
  {
    title: "Art Portfolio Website",
    description: "Built with React.js, Tailwind CSS.",
    github: "https://github.com/martincham/martincham.github.io",
    year: "2024",
    details: "Website in progress. Come back later!",
  },
  {
    title: "Machine Learning Parts Catalog",
    description:
      "Art projects using Machine Learning to create a catalog of useless parts.",
    github: "https://github.com/martincham/mcMasterImageMosaic",
    year: "2021",
    details: "Website in progress. Come back later!",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="bg-golden text-black selection:bg-shadow selection:text-golden"
    >
      <div className="mx-auto text-left">
        <h2 className="">Projects</h2>
        <div className="grid opacity-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-2">
          {projects.map((project, index) => (
            <ScrollAnimation key={index}>
              <Card
                className="cursor-pointer hover:shadow-lg hover:scale-102 transition-all"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="justify-between">
                  <p></p>
                  <p className="text-black">{project.year}</p>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* ReactModal for Project Details */}
      <ReactModal
        isOpen={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
        className="bg-golden text-black p-6 w-[80vw] mx-auto rounded-xl shadow-lg mt-20 border border-black"
        overlayClassName="fixed inset-0 bg-shadow  flex justify-center items-center"
      >
        {selectedProject && (
          <div className="selection:bg-black selection:text-golden">
            <h2 className="text-xl ">{selectedProject.title}</h2>
            <p className="mt-2">{selectedProject.details}</p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href={selectedProject.github}
                className="text-turq hover:text-muted-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub -{">"}
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 border-black border  rounded-md hover:bg-red-500/50 hover:cursor-pointer hover:shadow-lg hover:scale-102"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </ReactModal>
    </section>
  );
};

export default ProjectsSection;
