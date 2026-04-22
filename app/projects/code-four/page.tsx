"use client";
import Navbar from "@/components/navbar";
import { SectionWrapper } from "@/components/section-wrapper";
import { SkillBadge } from "@/components/skill-badge";
import { ImageCarousel } from "@/components/image-carousel";
import { SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Button } from "@heroui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useProjectsData } from "@/lib/stores";
import { Project } from "@/types/global";

export default function CodeFourPage() {
  const projects: Project[] = useProjectsData((state: any) => state.myData) as Project[] || []
  const project: Project | undefined = projects.find((project) => project.title == "Codefour.org");

  const images = project?.images

  const skills = project?.skills

  const liveUrl = project?.liveUrl
  const repoUrl = project?.repoUrl

  return (
    <>
      <div className="fixed h-150 w-150 rounded-full bg-blue-600/40 top-[7%] bottom-[25%] right-[25%] left-[29%]"></div>
      <div className="h-full w-full bg-background/20 backdrop-blur-3xl min-h-screen pb-20">
        <Navbar />

        <div className="mt-8 w-full flex flex-col items-center">
          <div className="w-[68%] flex justify-start mb-4">
             <Link href="/">
              <Button variant="outline" className="text-white/70 hover:text-white flex items-center gap-2">
                  <MoveLeft size={20} /> Back to Home
              </Button>
             </Link>
          </div>
          
          <SectionWrapper title="Codefour.org" className="!max-h-none" widthClassName="w-[85%]">
            <div className="space-y-8">
                <ImageCarousel images={images!} />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl montserrat-bold mb-4">Project Overview</h2>
                      <p className="montserrat-medium text-foreground/80 leading-relaxed">
                        Codefour.org is a modern website designed for a client's gaming community. 
                        The project focused on creating a seamless user experience with real-time data integration 
                        and a clean, futuristic aesthetic that matches their brand.
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl montserrat-bold mb-4">Key Features</h2>
                      <ul className="list-disc list-inside montserrat-medium text-foreground/70 space-y-2">
                        <li>Dynamic server status monitoring</li>
                        <li>User authentication via Discord</li>
                        <li>Automated donation and reward system</li>
                        <li>Fully responsive design for mobile and desktop</li>
                      </ul>
                    </div>

                    {(liveUrl || repoUrl) && (
                      <div className="flex gap-4">
                        {liveUrl && (
                          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="montserrat-bold px-8">
                              <FaExternalLinkAlt className="mr-2" /> Visit Demo
                            </Button>
                          </a>
                        )}
                        {repoUrl && (
                          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="montserrat-bold px-8">
                              <FaGithub className="mr-2" /> View Source
                            </Button>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl montserrat-bold mb-4">Technologies</h2>
                      <div className="flex flex-wrap gap-3">
                        {skills?.map((skill) => (
                          <SkillBadge
                            key={skill.name}
                            icon={skill.icon}
                            name={skill.name}
                            iconColor={skill.iconColor}
                            textColor={skill.textColor}
                            variant="small"
                            className="bg-foreground/5"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border border-foreground/10 rounded-xl bg-foreground/5 space-y-2">
                      <h3 className="montserrat-bold text-sm text-foreground/50 uppercase tracking-wider">Role</h3>
                      <p className="montserrat-bold">Lead Fullstack Developer</p>
                      
                      <h3 className="montserrat-bold text-sm text-foreground/50 uppercase tracking-wider pt-2">Timeline</h3>
                      <p className="montserrat-bold">January 2024 - March 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
    </>
  );
}
