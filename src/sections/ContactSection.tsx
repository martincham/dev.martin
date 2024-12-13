const ContactSection = () => {
  return (
    <section id="contact" className="">
      <div className="mx-auto text-left  p-4">
        <h2 className=" ml-[10vw] py-2">Contact</h2>
        <div className="transition-all duration-150 text-turq text-lg font-semibold grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-8 gap-4 my-8">
          <a href="https://www.linkedin.com/in/martincham/">
            <div className="p-2 hover:text-muted-foreground">LinkedIn</div>
          </a>
          <a href="https://github.com/martincham">
            <div className="p-2 hover:text-muted-foreground">GitHub</div>
          </a>
          <div className="p-2">Jira</div>
          <div className="p-2">Figma</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
