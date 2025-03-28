const HeroSection = () => {
  return (
    <section id="hero" className="selection:bg-golden">
      <div className="mx-auto mt-[20vh] ">
        <h1
          style={{ fontSize: "max(2rem, 5.8vw)" }}
          className="mx-auto m-0 p-0 font-normal"
        >
          Martin Chamberlin
        </h1>
        <p style={{ fontSize: "max(1rem, 2vw)" }} className="text mx-auto p-">
          Data | Backend | Frontend | UI/UX | IOT
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
