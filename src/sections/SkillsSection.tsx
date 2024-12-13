const SkillsSection = () => {
  return (
    <section id="skills" className="bg-salmon">
      <div className="mx-auto text-left text-background  p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 my-8">
          <h3 className="col-start-1 col-span-full">Languages</h3>
          <div className="p-2">C#/.NET</div>
          <div className="p-2">Python</div>
          <div className="p-2">C++</div>
          <div className="p-2">Java</div>
          <div className="p-2">TypeScript</div>
          <div className="p-2">SQL</div>
          <div className="p-2">SQL</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 my-8">
          <h3 className="col-start-1 col-span-full">Tools</h3>
          <div className="p-2">React</div>
          <div className="p-2">Tailwind CSS</div>
          <div className="p-2">Jira</div>
          <div className="p-2">Figma</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
