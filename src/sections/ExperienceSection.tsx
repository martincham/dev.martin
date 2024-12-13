import ScrollAnimation from "@/components/ui/ScrollAnimation";

const ExperienceSection = () => {
  return (
    <section id="about" className="bg-purp">
      <div className="mx-auto  text-left !text-black p-4">
        <ScrollAnimation>
          <h2 className="ml-[10vw]">Experience</h2>
          <div>
            <div className="flex justify-between">
              <h3 className="">Freelance Software Engineer</h3>
              <h3 className="">Present</h3>
            </div>
            <p>
              <a href="https://cosmos.epic.com/">Cosmos</a> team at Epic
              Systems.
            </p>
            <div className="pl-4">
              <p>
                •Developed population health analytics software using C#/.NET,
                SQL, and Typescript
              </p>
              <p>
                • Created distributed-system web services to communicate between
                servers hosting over 100 million patients
              </p>
            </div>
          </div>
          {/* Epic Systems */}
          <div>
            <div className="flex justify-between">
              <h3 className="">Software Engineer</h3>
              <h3 className="">2019-21</h3>
            </div>
            <p>
              <a href="https://cosmos.epic.com/">Cosmos</a> team at Epic
              Systems.
            </p>
            <div className="pl-4">
              <p>
                •Developed population health analytics software using C#/.NET,
                SQL, and Typescript
              </p>
              <p>
                • Created distributed-system web services to communicate between
                servers hosting over 100 million patients
              </p>
            </div>
          </div>
          <hr className="my-4 mx-auto h-[1px] bg-black" />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ExperienceSection;
