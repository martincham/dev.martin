import ProjectsSection from "@/sections/ProjectsSection";
import { ThemeProvider } from "@/components/theme-provider";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "@/sections/SkillsSection";

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen overflow-x-hidden bg-background selection:bg-golden selection:text-black flex flex-col md:flex-row">
        {/* Sidebar - Professional Identity */}
        <aside className="w-full md:w-[22%] border-b md:border-b-0 md:border-r border-muted flex flex-col p-3">
          <div>
            <h1 className="text-2xl font-semibold mb-1 leading-tight">Martin Chamberlin</h1>
            <p className="text-xs text-muted-foreground mb-1 leading-tight">New Haven, CT</p>
            <p className="text-sm text-muted-foreground mb-2 leading-tight">Software Engineer, Product</p>

            <div className="text-xs space-y-0.5 leading-tight border-t border-muted pt-2 mb-2">
              <p>BA Computer Science & Studio Art</p>
              <p className="text-muted-foreground">Grinnell College, 2019</p>
              <p className="mt-2">MFA Studio Arts</p>
              <p className="text-muted-foreground">University of Georgia, 2024</p>
            </div>
          </div>

          {/* Skills in Sidebar */}
          <div className="border-t border-muted pt-2 mb-2">
            <SkillsSection />
          </div>

          {/* Footer Links */}
          <div className="pt-2 border-t border-muted mt-auto">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium">
              <a
                href="https://www.linkedin.com/in/martincham"
                className="text-golden hover:text-muted-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/martincham"
                className="text-golden hover:text-muted-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="/MartinChamberlinResume.pdf"
                className="text-golden hover:text-muted-foreground transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </aside>

        {/* Content Area - All Sections */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <ExperienceSection />
          <ProjectsSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
