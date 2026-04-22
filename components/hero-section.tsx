import { Button } from "@heroui/react";
import { FileText, MailIcon } from "lucide-react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { SectionWrapper } from "./section-wrapper";

interface HeroLinks {
  resume?: string;
  mail?: string;
  discord?: string;
  github?: string;
}

interface HeroSectionProps {
  links?: HeroLinks;
}

export const HeroSection = ({ links }: HeroSectionProps) => {
  const hasLinks = links && Object.values(links).some(link => !!link);

  const headerRight = hasLinks ? (
    <>
      {links.resume && (
        <a href={links.resume} target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline">
            <FileText /> Resume
          </Button>
        </a>
      )}
      {links.mail && (
        <a href={`mailto:${links.mail}`}>
          <Button isIconOnly size="lg" variant="outline">
            <MailIcon />
          </Button>
        </a>
      )}
      {links.discord && (
        <a href={links.discord} target="_blank" rel="noopener noreferrer">
          <Button isIconOnly size="lg" variant="outline">
            <FaDiscord />
          </Button>
        </a>
      )}
      {links.github && (
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          <Button isIconOnly size="lg" variant="outline">
            <FaGithub />
          </Button>
        </a>
      )}
    </>
  ) : null;

  return (
    <SectionWrapper title="Hektor" headerRight={headerRight}>
      <p className="montserrat-medium text-xl">
        I'm a Fullstack Web Developer with 3+ years of experience. I
        engineer secure, optimized, and reliable backend APIs and I
        design clean modern frontends.
      </p>
    </SectionWrapper>
  );
};
