import ScrollAnimation from "@/components/ui/ScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="bg-turq ">
      <div className="mx-auto text-center text-background p-4">
        <ScrollAnimation>
          <h2 className="">About</h2>
          <p className="mt-4 text-background">
            I'm a passionate software developer with a knack for building
            modern, scalable web and mobile applications. I enjoy crafting user
            experiences that delight and solve real-world problems.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
