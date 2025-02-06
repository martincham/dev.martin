import ScrollAnimation from "@/components/ui/ScrollAnimation";

const resume = [
  {
    role: "Freelance Software Engineer",
    company: "",
    details: [
      "C++ and electronic design and implementation for a custom infrared remote",
      "Building a project management tool with Ruby on Rails",
      "Front-end development with React, Tailwind, and Typescript",
    ],
    year: "2024-Present",
  },
  {
    role: "Design Teacher",
    company: "University of Georgia",
    details: [
      "Teaching problem solving, technical skills, and the creative process.",
    ],
    year: "2022-24",
  },
  {
    role: "Software Engineer",
    company: "Epic Systems",
    details: [
      "Developed population health analytics software using C#/.NET, SQL, and Typescript",
      "Created distributed-system web services to communicate between servers hosting over 100 million patients",
      "Researched, designed, and implemented data pipeline for OB/GYN data",
    ],
    year: "2019-21",
  },
  {
    role: "App Designer",
    company: "AppDev Grinnell",
    details: [
      "Designed an Android radio app with Figma and Sketch.",
      "Crafted  a brand identity that fit the radio station's mission.",
    ],
    year: "2018-19",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="">
      <div className="mx-auto  text-left">
        <h2 className="">Experience</h2>

        {resume.map((job, index) => (
          <ScrollAnimation key={index}>
            <div>
              <div className="flex justify-between">
                <h3 className="">{job.role}</h3>
                <h3 className="text-right">{job.year}</h3>
              </div>
              <p>{job.company}</p>
              <ul className="pl-4 list-disc">
                {job.details.map((detail, jindex) => (
                  <li key={jindex}>{detail}</li>
                ))}
              </ul>
            </div>
            {index < resume.length - 1 && (
              <hr className="my-4 mx-auto h-[1px] border-muted" />
            )}
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
