import Navbar from "@/components/navbar";
import { SectionWrapper } from "@/components/section-wrapper";
import { ExperienceCard } from "@/components/experience-card";
import { SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useProjectsData } from "@/lib/stores";
import { Project } from "@/types/global";

const PROJECTS: Project[] = useProjectsData() as Project[]

export default function ProjectsPage() {
  return (
    <>
      <div className="fixed h-150 w-150 rounded-full bg-blue-600/40 top-[7%] bottom-[25%] right-[25%] left-[29%]"></div>
      <div className="h-full w-full bg-background/20 backdrop-blur-3xl min-h-screen">
        <Navbar />

        <SectionWrapper title="All Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
            {PROJECTS.map((project) => (
              <ExperienceCard key={project.title} project={project} />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
