const skills = [
  {
    title: "Languages",
    items: ["C#", ".NET", "C", "C++", "SQL", "Python", "Java", "Ruby", "Mumps", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    items: ["Git", "Figma", "Google Cloud", "Jira/Trello/Wrike", "HTML", "CSS", "React", "Tailwind", "Rails"],
  },
];

const SkillsSection = () => {
  return (
    <div>
      <h2 className="font-semibold mb-1">Skills</h2>
      <div className="space-y-2">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h3 className="text-xs font-semibold mb-0.5 text-muted-foreground leading-tight">{skillCategory.title}</h3>
            <p className="text-xs leading-tight">{skillCategory.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
