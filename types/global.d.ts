import { ReactElement } from "react";
import { IconType } from "react-icons";

type Skill = {
    name: string;
    icon: IconType;
    iconColor: string;
    textColor: string;
}

interface Project {
    title: string;
    image: string;
    description: string;
    href: string;
    liveUrl?: string;
    repoUrl?: string;
    images?: string[];
    skills: Skill[];
}