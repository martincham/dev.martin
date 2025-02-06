import ScrollAnimation from "@/components/ui/ScrollAnimation";

const skills = [
  {
    title: "Dev Languages",
    items: [
      "C#/.NET",
      "Python",
      "C++",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Ruby",
      "M/Mumps",
    ],
  },
  {
    title: "Dev Tools",
    items: ["React", "Tailwind", "Git", "Jira", "Pandas"],
  },
  {
    title: "Design Tools",
    items: [
      "Figma",
      "Sketch",
      "Affinity",
      "Illustrator",
      "InDesign",
      "Photoshop",
      "Solidworks",
      "Fusion360",
      "Inventor",
      "AutoCAD",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="border-y border-muted">
      <h2 className="">Skills</h2>
      <div className="mx-auto text-left space-y-6">
        <ScrollAnimation>
          {skills.map((skillCategory, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2">
                <h3 className="col-start-1 col-span-full">
                  {skillCategory.title}
                </h3>
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="">
                    {skill}
                  </div>
                ))}
              </div>
              {index < skills.length - 1 && (
                <hr className="my-4 mx-auto h-[1px] border-muted" />
              )}
            </div>
          ))}
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SkillsSection;
