const SkillsSection = () => {
  return (
    <section id="skills" className="">
      <div className="mx-auto text-center bg-secondary backdrop-blur-md border rounded-3xl p-4">
        <h2 className="text-3xl font-semibold">Skills</h2>
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
