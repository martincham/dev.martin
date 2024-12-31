import ScrollAnimation from "@/components/ui/ScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="bg-turq ">
      <div className="mx-auto bg-inherit text-left text-black">
        <ScrollAnimation>
          <h2 className="ml-[10vw]">About</h2>
          <p className=" text-black">
            Based in New Haven, CT. I'm passionate about improving systems
            through efficiency and design.
          </p>
          <p className="mt-4 text-black">
            BA in Computer Science and Art, Grinnell College, 2019.
          </p>
          <p className="">MFA in Art, University of Georgia, 2024.</p>
          <hr className="my-4 mx-auto h-[1px] bg-black" />
          <div className="bg-inherit flex flex-wrap justify-left mt-4 font-medium ">
            <a href="https://www.linkedin.com/in/martincham/">
              <div className="px-2 link">LinkedIn</div>
            </a>
            <a href="https://github.com/martincham">
              <div className="border-l border-black px-2 link ">GitHub</div>
            </a>
            <a href="/MartinChamberlinResume.pdf">
              <div className="border-l border-black px-2 link ">Resume</div>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
