import React, { useState } from "react";
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

ReactModal.setAppElement("#root"); // Set root element for accessibility

const projects = [
  {
    title: "NBA Player Analyzer",
    description:
      "Python CLI for evaluating player value. Analyzed and pushes data to Google Sheets API.",
    github: "https://github.com/martincham/espn-nba-fantasy-analyzer",
    year: "2023-24",
    details: "More details about NBA Player Analyzer...",
  },
  {
    title: "Arduino Sculpture",
    description:
      "A wirelessly communicating sculpture installation made with C++ and robotics.",
    github: "https://github.com/martincham/hubris",
    year: "2024",
    details: "More details about Arduino Sculpture...",
  },
  {
    title: "Developer Portfolio",
    description: "Built with React.js, Tailwind CSS.",
    github: "https://github.com/martincham/martincham.github.io",
    year: "2024",
    details: "More details about Developer Portfolio...",
  },
  {
    title: "Art Portfolio Website",
    description: "Built with React.js, Tailwind CSS.",
    github: "https://github.com/martincham/martincham.github.io",
    year: "2024",
    details: "More details about Art Portfolio Website...",
  },
  {
    title: "Machine Learning Parts Catalog",
    description:
      "Art projects using Machine Learning to create a catalog of useless parts.",
    github: "https://github.com/martincham/mcMasterImageMosaic",
    year: "2021",
    details: "More details about ML Parts Catalog...",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-golden text-black selection:bg-black selection:text-golden"
    >
      <div className="mx-auto text-left">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid opacity-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-2">
          {projects.map((project, index) => (
            <ScrollAnimation key={index}>
              <Card
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="justify-between">
                  <a
                    href={project.github}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub -{">"}
                  </a>
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
        className="bg-white p-6 max-w-lg mx-auto rounded-lg shadow-lg mt-20 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedProject && (
          <div>
            <h2 className="text-xl font-bold">{selectedProject.title}</h2>
            <p className="text-gray-600 mt-2">{selectedProject.details}</p>
            <div className="mt-4 flex justify-between">
              <a
                href={selectedProject.github}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
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
