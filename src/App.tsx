import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "@/sections/SkillsSection";

type View = "home" | "projects" | "resume";

function App() {
  const [currentView, setCurrentView] = useState<View>("home");

  return (
    <ThemeProvider>
      <div className="h-screen overflow-hidden bg-background selection:bg-golden selection:text-black flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-muted flex flex-col p-6">
          <div className="mb-6">
            <button
              onClick={() => setCurrentView("home")}
              className="text-lg font-medium mb-2 hover:text-golden transition-colors text-left"
            >
              Martin Chamberlin
            </button>
            <p className="text-sm text-muted-foreground mb-1">New Haven, CT</p>
            <p className="text-sm text-muted-foreground">Software Engineer, Artist</p>
          </div>

          {/* Navigation */}
          <nav className="border-t border-muted pt-4 mb-4">
            <div className="flex flex-col gap-2 text-sm">
              <button
                onClick={() => setCurrentView("projects")}
                className={`text-left hover:text-golden transition-colors ${
                  currentView === "projects" ? "text-golden" : ""
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setCurrentView("resume")}
                className={`text-left hover:text-golden transition-colors ${
                  currentView === "resume" ? "text-golden" : ""
                }`}
              >
                Resume
              </button>
            </div>
          </nav>

          {/* Skills */}
          <div className="border-t border-muted pt-4 mb-4">
            <SkillsSection />
          </div>

          {/* Footer Links */}
          <div className="pt-4 border-t border-muted mt-auto">
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://github.com/martincham"
                className="text-golden hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/martincham"
                className="text-golden hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-hidden">
          {currentView === "home" && <HeroSection />}
          {currentView === "projects" && <ProjectsSection />}
          {currentView === "resume" && <ExperienceSection />}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
