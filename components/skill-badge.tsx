import { ReactNode } from "react";
import { IconType } from "react-icons";

interface SkillBadgeProps {
  icon: IconType;
  name: string;
  iconColor?: string;
  textColor?: string;
  variant?: "large" | "small";
  className?: string;
}

export const SkillBadge = ({
  icon: Icon,
  name,
  iconColor,
  textColor,
  variant = "large",
  className = "",
}: SkillBadgeProps) => {
  const isLarge = variant === "large";

  return (
    <div
      className={`
        ${isLarge ? "h-14 px-6 skill-card-hover" : "h-10 px-4"} 
        border-2 border-foreground/10 rounded-lg flex items-center justify-center 
        ${className}
      `}
    >
      <h1 className={`montserrat-bold flex items-center justify-center ${isLarge ? "back" : "text-sm"}`}>
        <Icon className={`${isLarge ? "mr-2 text-xl" : "mr-2 text-lg"} ${iconColor}`} />
        <span className={textColor}>{name}</span>
      </h1>
    </div>
  );
};
