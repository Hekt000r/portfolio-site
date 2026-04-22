import { SkillBadge } from "./skill-badge";
import { IconType } from "react-icons";
import Link from "next/link";
import { Project } from "@/types/global";

interface ExperienceCardProps {
  project: Project;
}

export const ExperienceCard = ({ project }: ExperienceCardProps) => {
  const CardContent = (
    <div className="group relative border border-foreground/20 rounded-md w-full max-h-138 bg-background/20 backdrop-blur-3xl space-y-4 cursor-pointer transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
      <div>
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="rounded-md"
        />
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h1 className="text-2xl montserrat-bold text-white">{project.title}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              iconColor={skill.iconColor}
              textColor={skill.textColor}
              variant="small"
            />
          ))}
        </div>
        <p className="montserrat-medium text-foreground/70 text-sm">
          {project.description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
    </div>
  );

  if (project.href) {
    return <Link href={project.href} className="w-full">{CardContent}</Link>;
  }

  return CardContent;
};
