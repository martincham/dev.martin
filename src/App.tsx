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
      <div className="min-h-screen  relative bg-background font-serif dark:font-sans">
        <DotGrid />
        <div className="mx-auto max-w-3xl">
          <Navbar />

          <div className="z-10 p-8 relative inset-0 flex mx-auto ">
            <div className="justify-center items-center width-auto space-y-20 mb-20">
              <ModeToggle />

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
