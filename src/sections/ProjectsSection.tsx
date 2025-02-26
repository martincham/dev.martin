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

import NbaChart from "@/components/charts/NbaChart";
import NbaChartPG from "@/components/charts/NbaChartPG";

ReactModal.setAppElement("#root");

type Project = {
  title: string;
  description: string;
  details: string;
  github: string;
  year: string;
  extra?: React.ComponentType[];
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
    extra: [NbaChart, NbaChartPG],
  },
  {
    title: "Arduino Sculpture",
    description:
      "A wirelessly communicating sculpture installation made with C++ and robotics.",
    github: "https://github.com/martincham/hubris",
    year: "2024",
    details: "See GitHub for photos and videos of the sculpture.",
  },
  {
    title: "Developer Portfolio",
    description: "Built with React.js, Tailwind CSS.",
    github: "https://github.com/martincham/martincham.github.io",
    year: "2024",
    details:
      "This website. Made to be simple. Currently built with Vite, React, Typescript, Tailwind.",
  },
  {
    title: "Art Portfolio Website",
    description: "Built with React.js, Tailwind CSS.",
    github: "https://github.com/martincham/martincham.github.io",
    year: "2024",
    details:
      "A website for documenting all my art projects. Built with React and Tailwind.",
  },
  {
    title: "Machine Learning Parts Catalog",
    description:
      "Art projects using Machine Learning to create a catalog of useless parts.",
    github: "https://github.com/martincham/mcMasterImageMosaic",
    year: "2021",
    details:
      "A AI project using TensorFlow and StyleGAN2 on University of Georgia supercomputer server.",
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
        className="bg-black text-golden p-6 w-[80vw] mx-auto rounded-xl shadow-lg mt-20 border border-golden focus:outline-none"
        overlayClassName="fixed inset-0 bg-shadow  flex justify-center items-center"
      >
        {selectedProject && (
          <div className="selection:bg-shadow selection:text-golden">
            <button
              onClick={() => setSelectedProject(null)}
              className="group  text-golden text-4xl float-right  hover:cursor-pointer hover:-white"
            >
              <div className="p-1 pb-2 object-contain">
                <span className="block w-5 h-0.5 bg-golden  group-hover:bg-muted-foreground rotate-45 translate-y-1.5"></span>

                <span className="block w-5 h-0.5 bg-golden mb-3 group-hover:bg-muted-foreground -rotate-45 translate-y-1"></span>
              </div>
            </button>

            <h2 className="text-xl display-inline ">{selectedProject.title}</h2>

            <p className="mt-2">{selectedProject.details}</p>
            <div className="justify-center flex flex-wrap gap-4 w-full">
              {/* Charts */}
              {selectedProject.extra &&
                selectedProject.extra.map((Extra, jindex) => (
                  <div key={jindex} className="flex-1 max-w-sm">
                    <Extra />
                  </div>
                ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <a
                href={selectedProject.github}
                className="text-turq hover:text-muted-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub -{">"}
              </a>
            </div>
          </div>
        )}
      </ReactModal>
    </section>
  );
};

export default ProjectsSection;
