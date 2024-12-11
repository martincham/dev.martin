const SkillsSection = () => {
  return (
    <section id="skills" className="bg-salmon">
      <div className="mx-auto text-center   p-4">
        <h2 className="">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          <div className="p-4 e rounded-lg shadow-md">React</div>
          <div className="p-4  rounded-lg shadow-md">TypeScript</div>
          <div className="p-4  rounded-lg shadow-md">Tailwind CSS</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
