import ScrollAnimation from "@/components/ui/ScrollAnimation";

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-purp">
      <div className="mx-auto  text-left !text-black p-4">
        <h2 className="ml-[10vw]">Experience</h2>
        {/* Freelance */}
        <ScrollAnimation>
          <div>
            <div className="flex justify-between">
              <h3 className="">Freelance Software Engineer</h3>
              <h3 className="">2024-Present</h3>
            </div>

            <ul className="pl-4 list-disc">
              <li>Building a project management tool with Ruby on Rails</li>
              <li>
                Front-end development with React, Tailwind, and Typescript
              </li>
            </ul>
          </div>
          <hr className="my-4 mx-auto h-[1px] bg-black" />
        </ScrollAnimation>

        {/* UGA */}
        <ScrollAnimation>
          <div>
            <div className="flex justify-between">
              <h3 className="">Design Teacher</h3>
              <h3 className="">2022-24</h3>
            </div>
            <p>University of Georgia</p>
            <ul className="pl-4 list-disc">
              <li>
                Teaching problem solving, technical skills, and the creative
                process.
              </li>
            </ul>
          </div>
          <hr className="my-4 mx-auto h-[1px] bg-black" />
        </ScrollAnimation>

        {/* Epic Systems */}
        <ScrollAnimation>
          <div>
            <div className="flex justify-between">
              <h3 className="">Software Engineer</h3>
              <h3 className="">2019-21</h3>
            </div>
            <p>
              <a
                className="ink text-sky-700 hover:text-muted-foreground "
                href="https://cosmos.epic.com/"
              >
                Cosmos
              </a>{" "}
              team at Epic Systems.
            </p>
            <ul className="pl-4 list-disc">
              <li>
                Developed population health analytics software using C#/.NET,
                SQL, and Typescript
              </li>
              <li>
                Created distributed-system web services to communicate between
                servers hosting over 100 million patients
              </li>
              <li>
                Researched, designed, and implemented data pipeline for OB/GYN
                data
              </li>
            </ul>
          </div>
          <hr className="my-4 mx-auto h-[1px] bg-black" />
        </ScrollAnimation>

        {/* Grinnell */}
        <ScrollAnimation>
          <div>
            <div className="flex justify-between">
              <h3 className="">App Designer</h3>
              <h3 className="">2018-219</h3>
            </div>
            <p>AppDev Grinnell</p>
            <ul className="pl-4 list-disc">
              <li>
                Designed an Android radio app with Figma and Sketch. Designed a
                brand identity that fit the radio station's mission.
              </li>
            </ul>
          </div>
          <hr className="my-4 mx-auto h-[1px] bg-black" />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ExperienceSection;
