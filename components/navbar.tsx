import { Button } from "@heroui/react";
import { Briefcase, HomeIcon, Send } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b h-16 w-full border-white/5 bg-background/30 backdrop-blur-md">
      <div className="h-full w-full flex">
        <div className="flex items-center justify-center w-40">
          <h1 className="montserrat-bold text-3xl">
            hektor<span className="text-blue-600">.</span>
          </h1>
        </div>
        <div className="h-full flex items-center ml-auto mr-12 space-x-4">
            <Button variant="secondary"><HomeIcon/>Home</Button>
            <Button variant="outline"> <Briefcase/> Experience</Button>
            <Button variant="primary"><Send/> Contact me</Button>
        </div>
      </div>
    </nav>
  );
}
