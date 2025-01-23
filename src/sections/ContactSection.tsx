import ScrollAnimation from "@/components/ui/ScrollAnimation";

const ContactSection = () => {
  return (
    <section id="contact" className="">
      <div className="mx-auto text-left">
        <ScrollAnimation>
          <p className="py-12">
            Did you know I also have a{" "}
            <a
              className="link font-medium"
              style={{ fontSize: "min(1rem, 5vw)" }}
              href="https://martinchamberlin.com"
            >
              {" "}
              sculpture website?
            </a>
          </p>
        </ScrollAnimation>
        <div className="transition-all duration-150 text-turq text-lg font-semibold grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-8 gap-4 my-8"></div>
      </div>
    </section>
  );
};

export default ContactSection;
