import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";
import { ThemeProvider } from "@/components/theme-provider";
import ExperienceSection from "./sections/ExperienceSection";

/*import DotGrid from "./components/ui/DotGrid"; */

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen mx-auto relative bg-background selection:bg-golden selection:text-black">
        {/* <DotGrid /> */}
        <div className="mx-auto">
          <Navbar />

          <div className="z-10 mx-auto">
            <div className="justify-center items-center width-auto  mb-20">
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ExperienceSection />
              <SkillsSection />
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
