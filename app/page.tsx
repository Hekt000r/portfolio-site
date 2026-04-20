import Navbar from "@/components/navbar";
import { Button } from "@heroui/react";
import { FileText, MailIcon } from "lucide-react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDiscord, FaGithub } from "react-icons/fa";
import {
  SiBun,
  SiDiscorddotjs,
  SiDocker,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function App() {
  return (
    <>
      <div className="fixed h-150 w-150 rounded-full bg-blue-600/40 top-[7%] bottom-[25%] right-[25%] left-[29%]"></div>
      <div className="h-full w-full bg-background/20 backdrop-blur-3xl">
        <Navbar />

        <div className="mt-8 w-full max-h-[50%] bg-background/20 flex items-center justify-center">
          <div className="w-[80%] h-full flex items-center justify-center">
            <div className="border-1  bg-background/20 border-foreground/20 rounded-md h-full w-[60%] flex p-6 flex-col space-y-4">
              <div className="w-full">
                <div className="h-10 w-full flex">
                  <div className="w-24 h-10 flex items-center">
                    <h1 className="text-3xl montserrat-bold">Hektor</h1>
                  </div>
                  <div className=" ml-auto mr-4 flex space-x-4 items-center">
                    <Button size="lg" variant="outline">
                      <FileText /> Resume
                    </Button>
                    <Button isIconOnly size="lg" variant="outline">
                      <MailIcon />{" "}
                    </Button>
                    <Button isIconOnly size="lg" variant="outline">
                      <FaDiscord />{" "}
                    </Button>
                    <Button isIconOnly size="lg" variant="outline">
                      <FaGithub />{" "}
                    </Button>
                  </div>
                </div>
              </div>
              {/**/}
              <p className="montserrat-medium text-xl">
                I'm a Fullstack Web Developer with 3+ years of experience. 
                I engineer secure, optimized, and reliable backend
                APIs and I design clean modern frontends.
              </p>
            </div>
          </div>
        </div>
        {/* -==Skills==- */}
        <div className="mt-8 w-full max-h-[50%] bg-background/20 flex items-center justify-center">
          <div className="w-[80%] h-full flex items-center justify-center">
            <div className="border-1  bg-background/20 border-foreground/20 rounded-md h-full w-[60%] flex p-6 flex-col space-y-4">
              <div className="w-full">
                <div className="h-10 w-full flex">
                  <div className="w-64 h-10 flex items-center">
                    <h1 className="text-3xl montserrat-bold">
                      My Technologies
                    </h1>
                  </div>
                </div>
              </div>
              {/**/}
              <div className="flex space-x-2">
                <div className="flex flex-col space-y-3">
                  {/* Row 1 */}
                  <div className="flex space-x-2">
                    <div className="h-14 w-36  border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiTypescript className="mr-2 text-xl text-blue-500" />{" "}
                        <span className="text-blue-200">TypeScript</span>
                      </h1>
                    </div>
                    <div className="h-14 w-24  border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiReact className="mr-2 text-xl text-cyan-300" />{" "}
                        <span className="text-cyan-200">React</span>
                      </h1>
                    </div>
                    <div className="h-14 w-28  border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiNextdotjs className="mr-2 text-xl text-white" />{" "}
                        <span className="text-white">NextJS</span>
                      </h1>
                    </div>
                    <div className="h-14 w-38  border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiTailwindcss className="mr-2 text-xl text-sky-400" />{" "}
                        <span className="text-sky-200">TailwindCSS</span>
                      </h1>
                    </div>
                    <div className="h-14 w-30 border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiDocker className="mr-2 text-xl text-blue-500" />{" "}
                        <span className="text-blue-200">Docker</span>
                      </h1>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex space-x-2">
                    <div className="h-14 w-36  border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiSupabase className="mr-2 text-xl text-emerald-500" />{" "}
                        <span className="text-emerald-200">Supabase</span>
                      </h1>
                    </div>
                    <div className="h-14 w-34  border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiMongodb className="mr-2 text-xl text-green-500" />{" "}
                        <span className="text-green-200">MongoDB</span>
                      </h1>
                    </div>
                    <div className="h-14 w-38 border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <BiLogoPostgresql className="mr-2 text-xl fill-blue-900" />{" "}
                        <span className="text-blue-200">PostgesSQL</span>
                      </h1>
                    </div>
                    <div className="h-14 w-38  border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiDiscorddotjs className="mr-2 text-xl text-indigo-600" />{" "}
                        <span className="text-indigo-200">Discord.JS</span>
                      </h1>
                    </div>
                    <div className="h-14 w-20 border-2 border-foreground/10 rounded-lg flex items-center justify-center">
                      <h1 className="montserrat-bold flex items-center justify-center back">
                        <SiBun className="mr-2 text-xl text-orange-200" />{" "}
                        <span className="text-orange-100">Bun</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
