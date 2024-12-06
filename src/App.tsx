import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import { ThemeProvider } from "./components/theme-provider";

import DotGrid from "./components/ui/DotGrid";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" min-h-screen  relative ">
        <DotGrid />
        <div className="mx-auto max-w-xl">
          <Navbar />

          <div className="z-10 p-8 relative inset-0 flex mx-auto ">
            <div className="justify-center width-auto">
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
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
