const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 backdrop-blur-sm rounded-3xl border-translucent-white"
    >
      <div className="max-w-4xl mx-auto text-center">
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
