import ScrollAnimation from "@/components/ui/ScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="bg-turq ">
      <div className="mx-auto  text-left text-black p-4">
        <ScrollAnimation>
          <h2 className="ml-[10vw]">About</h2>
          <p className="mt-4 text-black">
            Based in New Haven, CT. I design and build digital and physical
            things.
          </p>
          <p className="mt-4 text-black">
            BA Computer Scienc and Art, Grinnell College, 2019.
          </p>
          <p className="">MFA, Studio Art, University of Georgia, 2024.</p>
          <hr className="my-4 mx-auto h-[1px] bg-black" />
          <div className="flex flex-wrap justify-left mt-4 font-medium text-blue-700">
            <a href="https://www.linkedin.com/in/martincham/">
              <div className="px-2 hover:text-muted-foreground">LinkedIn</div>
            </a>
            <a href="https://github.com/martincham">
              <div className="border-l border-black px-2 hover:text-muted-foreground ">
                GitHub
              </div>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
