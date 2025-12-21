const HeroSection = () => {
  return (
    <section className="h-full flex items-center px-8 overflow-y-auto">
      <div className="max-w-2xl py-12">
        <h1 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">I build things.</h1>

        <div className="border-t border-muted pt-6 mt-8">
          <p className="text-sm text-muted-foreground">
            BA Computer Science & Studio Art, Grinnell College, 2019
            <br />
            MFA Studio Arts, University of Georgia, 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
