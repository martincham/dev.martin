const ContactSection = () => {
  return (
    <section id="contact" className="">
      <div className="mx-auto text-center bg-secondary backdrop-blur-md border rounded-3xl p-4">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="mt-4">
          Let's connect! Feel free to reach out via email or LinkedIn.
        </p>
        <div className="mt-6">
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-200"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
