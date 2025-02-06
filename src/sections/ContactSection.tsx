import ScrollAnimation from "@/components/ui/ScrollAnimation";

const ContactSection = () => {
  return (
    <section id="contact" className="">
      <div className="mx-auto text-left">
        <ScrollAnimation>
          <p className="py-12">
            Did you know I also have a{" "}
            <a
              className="text-turq hover:text-muted-foreground font-medium"
              style={{ fontSize: "min(1rem, 5vw)" }}
              href="https://martinchamberlin.com"
            >
              {" "}
              sculpture website?
            </a>
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ContactSection;
