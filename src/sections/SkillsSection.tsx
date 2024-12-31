import ScrollAnimation from "@/components/ui/ScrollAnimation";

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-salmon">
      <h2 className="ml-[10vw]">Skills</h2>
      <div className="mx-auto text-left text-black">
        <ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 ">
            <h3 className="col-start-1 col-span-full">Languages</h3>
            <div className="">C#/.NET</div>
            <div className="">Python</div>
            <div className="">C++</div>
            <div className="">Java</div>
            <div className="">TypeScript</div>
            <div className="">JavaScript</div>
            <div className="">SQL</div>
            <div className="">Ruby</div>
            <div className="">M</div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 my-8">
            <h3 className="col-start-1 col-span-full">Tools</h3>
            <div className="">React</div>
            <div className="">Tailwind CSS</div>
            <div className="">Git</div>
            <div className="">Jira</div>
            <div className="">Figma</div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SkillsSection;
