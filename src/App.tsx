import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

import DotGrid from "./components/ui/DotGrid";

function App() {
  return (
    <div className=" min-h-screen  relative">
      <DotGrid />
      <Navbar />
      <div className="z-10 p-8 relative inset-0 flex justify-center">
        <div className="justify-center ">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
