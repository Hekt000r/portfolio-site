import { Project } from "@/types/global";
import { SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { create } from "zustand";

export const useProjectsData = create((set) => ({
  myData: [
      {
        title: "Codefour.org",
        image: "code4-1.png",
        description: "Modern website for a client who needed a site for their server",
        href: "/projects/code-four",
        liveUrl: "https://hektor-codefour-demo.vercel.app",
        repoUrl: null,
        skills: [
          { name: "NextJS", icon: SiNextdotjs, iconColor: "text-white", textColor: "text-white" },
          { name: "TailwindCSS", icon: SiTailwindcss, iconColor: "text-sky-400", textColor: "text-sky-200" },
          { name: "Supabase", icon: SiSupabase, iconColor: "text-emerald-500", textColor: "text-emerald-200" },
          { name: "TypeScript", icon: SiTypescript, iconColor: "text-blue-500", textColor: "text-blue-200" },
        ],
        images: [
            "code4-1.png",
            "code4-2.png",
            "code4-3.png",
            "code4-4.png"
        ]
      },
  ], // Your JSON/Array starts here
  setData: (newData: Project[]) => set({ myData: newData }),
  addItem: (item:any[]) => set((state: any) => ({ myData: [...state.myData, item] })),
}));
