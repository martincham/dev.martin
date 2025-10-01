const resume = [
  {
    role: "Software Engineer",
    company: "Town Fair Tire",
    year: "Apr 2024–Present",
    bullets: ["Built POS and retail operations platform with C#/.NET and SQL Server"],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    year: "Sep 2024–Apr 2025",
    bullets: [
      "Developed a property-management web-app in Ruby on Rails and JavaScript.",
      "C++ and Arduino design and implementation for a custom infrared remote.",
      "Website design and development in React, TypeScript, Tailwind, and Python.",
    ],
  },
  {
    role: "Design Teacher",
    company: "University of Georgia",
    year: "Aug 2022–May 2024",
    bullets: [
      "Designed curriculum and taught 4 semesters of undergrad design classes.",
      "Guided students through month-long projects with weekly check-ins and design criticism.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Epic Systems",
    year: "Sep 2019–Jun 2021",
    bullets: [
      "Developed population health analytics software using C#/.NET, SQL, and TypeScript.",
      "Created distributed system web services serving over 100 million patients.",
    ],
  },
  {
    role: "UI/UX App Designer",
    company: "AppDev Grinnell",
    year: "Aug 2018–May 2019",
    bullets: ["Designed a mobile radio app in Figma, met with stakeholders to develop brand identity."],
  },
];

const ExperienceSection = () => {
  return (
    <section className="p-3 border-b border-muted">
      <h2 className="text-base font-semibold mb-1">Experience</h2>
      <div className="space-y-2">
        {resume.map((job, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline gap-2 mb-0.5">
              <h3 className="text-sm font-semibold leading-tight">{job.role}</h3>
              <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{job.year}</span>
            </div>
            {job.company && <p className="text-xs text-muted-foreground leading-tight mb-0.5">{job.company}</p>}
            <ul className="space-y-0.5">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="text-xs leading-tight flex">
                  <span className="mr-1.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
