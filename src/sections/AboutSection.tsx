import ScrollAnimation from "@/components/ui/ScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto bg-inherit text-left pt-8">
        <ScrollAnimation>
          <p className="">
            I love building and designing: robots, data tools, websites, and
            more. I value ergonomics and efficiency.
          </p>
          <p className="mt-4 ">
            BA in Computer Science and Art, Grinnell College, 2019.
          </p>
          <p className="">MFA in Art, University of Georgia, 2024.</p>
          <p> Based in New Haven, CT.</p>
          <hr className="my-4 mx-auto h-[1px] border-muted" />
          <div className="bg-inherit flex flex-wrap justify-left mt-4 font-medium ">
            <a href="https://www.linkedin.com/in/martincham/">
              <div className="px-2 link">LinkedIn</div>
            </a>
            <a href="https://github.com/martincham">
              <div className="border-l border-muted px-2 link ">GitHub</div>
            </a>
            <a href="/MartinChamberlinResume.pdf">
              <div className="border-l border-muted px-2 link ">Resume</div>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
