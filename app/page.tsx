import Navbar from "@/components/navbar";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiBun,
  SiDiscorddotjs,
  SiDocker,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { HeroSection } from "@/components/hero-section";
import { SectionWrapper } from "@/components/section-wrapper";
import { SkillBadge } from "@/components/skill-badge";
import { ExperienceCard } from "@/components/experience-card";

const SKILLS = [
  { name: "TypeScript", icon: SiTypescript, iconColor: "text-blue-500", textColor: "text-blue-200", width: "w-36" },
  { name: "React", icon: SiReact, iconColor: "text-cyan-300", textColor: "text-cyan-200", width: "w-24" },
  { name: "NextJS", icon: SiNextdotjs, iconColor: "text-white", textColor: "text-white", width: "w-28" },
  { name: "TailwindCSS", icon: SiTailwindcss, iconColor: "text-sky-400", textColor: "text-sky-200", width: "w-38" },
  { name: "Docker", icon: SiDocker, iconColor: "text-blue-500", textColor: "text-blue-200", width: "w-30" },
  { name: "Supabase", icon: SiSupabase, iconColor: "text-emerald-500", textColor: "text-emerald-200", width: "w-36" },
  { name: "MongoDB", icon: SiMongodb, iconColor: "text-green-500", textColor: "text-green-200", width: "w-34" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, iconColor: "fill-blue-900", textColor: "text-blue-200", width: "w-38" },
  { name: "Discord.JS", icon: SiDiscorddotjs, iconColor: "text-indigo-600", textColor: "text-indigo-200", width: "w-38" },
  { name: "Bun", icon: SiBun, iconColor: "text-orange-200", textColor: "text-orange-100", width: "w-20" },
];

const PROJECTS = [
  {
    title: "Codefour.org",
    image: "code4-1.png",
    description: "Modern website for a client who needed a site for their server",
    href: "/projects/code-four",
    liveUrl: "https://codefour.org",
    repoUrl: null, // Private client work
    skills: [
      { name: "NextJS", icon: SiNextdotjs, iconColor: "text-white", textColor: "text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, iconColor: "text-sky-400", textColor: "text-sky-200" },
      { name: "Supabase", icon: SiSupabase, iconColor: "text-emerald-500", textColor: "text-emerald-200" },
      { name: "TypeScript", icon: SiTypescript, iconColor: "text-blue-500", textColor: "text-blue-200" },
    ],
  },
];

export default function App() {
  return (
    <>
      <div className="fixed h-150 w-150 rounded-full bg-blue-600/40 top-[7%] bottom-[25%] right-[25%] left-[29%]"></div>
      <div className="h-full w-full bg-background/20 backdrop-blur-3xl">
        <Navbar />

        <HeroSection 
          links={{
            resume: "#",
            mail: "hektor@example.com",
            discord: "https://discord.gg/yourlink",
            github: "https://github.com/yourprofile"
          }}
        />

        {/* -==Skills==- */}
        <SectionWrapper title="My Skills">
          <div className="flex space-x-2">
            <div className="flex flex-col space-y-3">
              {/* Row 1 */}
              <div className="flex space-x-2">
                {SKILLS.slice(0, 5).map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    iconColor={skill.iconColor}
                    textColor={skill.textColor}
                    className={skill.width}
                  />
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex space-x-2">
                {SKILLS.slice(5).map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    iconColor={skill.iconColor}
                    textColor={skill.textColor}
                    className={skill.width}
                  />
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* -==Experience==- */}
        <SectionWrapper title="Experience">
          <div className="flex space-x-2">
            <div className="flex space-y-3 p-2">
              {PROJECTS.map((project) => (
                <ExperienceCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
