import ScrollAnimation from "@/components/ui/ScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="bg-turq ">
      <div className="mx-auto  text-left text-background p-4">
        <ScrollAnimation>
          <h2 className="ml-[10vw]">About</h2>
          <p className="mt-4 text-background">
            I'm a passionate software developer with a knack for building
            modern, scalable web and mobile applications. I enjoy crafting user
            experiences that delight and solve real-world problems.
          </p>
          <hr className="my-4 mx-auto h-[1px] bg-background" />
          <div className="flex flex-wrap justify-left mt-4 font-medium">
            <a href="https://www.linkedin.com/in/martincham/">
              <div className="px-2 hover:text-muted-foreground">LinkedIn</div>
            </a>
            <a href="https://github.com/martincham">
              <div className="border-l border-background px-2 hover:text-muted-foreground">
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
