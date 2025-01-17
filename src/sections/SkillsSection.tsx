import ScrollAnimation from "@/components/ui/ScrollAnimation";

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-salmon">
      <h2 className="ml-[10vw]">Skills</h2>
      <div className="mx-auto text-left text-black space-y-6">
        <ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 ">
            <h3 className="col-start-1 col-span-full">Dev Languages</h3>
            <div className="">C#/.NET</div>
            <div className="">Python</div>
            <div className="">C++</div>
            <div className="">Java</div>
            <div className="">TypeScript</div>
            <div className="">JavaScript</div>
            <div className="">SQL</div>
            <div className="">Ruby</div>
            <div className="">M/Mumps</div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 ">
            <h3 className="col-start-1 col-span-full">Dev Tools</h3>
            <div className="">React</div>
            <div className="">Tailwind CSS</div>
            <div className="">Git</div>
            <div className="">Jira</div>
            <div className="">Pandas</div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 ">
            <h3 className="col-start-1 col-span-full">Design Tools</h3>
            <div className="">Figma</div>
            <div className="">Sketch</div>
            <div className="">Affinity Suite</div>
            <div className="">Illustrator</div>
            <div className="">InDesign</div>
            <div className="">Photoshop</div>
            <div className="">Solidworks</div>
            <div className="">Fusion360</div>
            <div className="">Inventor</div>
            <div className="">AutoCAD</div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SkillsSection;
