import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

import DotGrid from "./components/ui/DotGrid";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" min-h-screen  relative bg-background">
        <DotGrid />
        <div className="mx-auto max-w-xl">
          <Navbar />

          <div className="z-10 p-8 relative inset-0 flex mx-auto ">
            <div className="justify-center width-auto">
              <div>
                <ModeToggle />
              </div>
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
