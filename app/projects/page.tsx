"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { Sun, Wind, Snowflake, Moon } from "lucide-react";
import { useState } from "react";
import { PinBoard } from "../components/PinBoard";

type ProjectEntry = {
  id: number;
  title: string;
  description: string;
  image: string;
  demo: string | null;
  repo: string | null;
};

/* ─── Project Data ─── */
const flow: ProjectEntry = {
  id: 1,
  title: "Flow",
  description: "An AI-powered automated drag-and-drop web scraping tool.",
  image: "/assets/projects/Flow.png",
  demo: "https://flow-chi-drab.vercel.app/",
  repo: "https://github.com/ruhamabek/flow",
};
const skillswap: ProjectEntry = {
  id: 2,
  title: "Docklet",
  description: "A lightweight desktop docker client.",
  image: "/assets/projects/docklet.png",
  demo: "https://docklet-ochre.vercel.app",
  repo: "https://github.com/ruhamabek/Docklet",
};
const dbstudio: ProjectEntry = {
  id: 11,
  title: "DBStudio",
  description: "A modern AI-powered database workspace for seamless data management.",
  image: "/assets/projects/dbstudio.png",
  demo: "https://dbstudio-lite.vercel.app/",
  repo: "https://github.com/ruhamabek/dbstudio-lite",
};
const vitra: ProjectEntry = {
  id: 12,
  title: "Vitra",
  description: "The Design Runtime For Agents",
  image: "/assets/projects/vitra.png",
  demo: "https://vitra-ten.vercel.app",
  repo:  "https://github.com/ruhamabek/vitra",
};
const foodOrdering: ProjectEntry = {
  id: 3,
  title: "Vortex",
  description: "Cloud-Native Distributed Video Infrastructure Engine.",
  image: "/assets/projects/vortex.png",
  demo: null,
  repo: "https://github.com/ruhamabek/vortex",
};
const kidcare: ProjectEntry = {
  id: 5,
  title: "Hooklet",
  description: "A self-hosted webhook capturing and replay engine.",
  image: "/assets/projects/hooklet.png",
  demo: null,
  repo: "https://github.com/ruhamabek/Hooklet",
};
const simushop: ProjectEntry = {
  id: 6,
  title: "Git-ts",
  description: "Git clone in typescript.",
  image: "/assets/projects/git.png",
  demo: null,
  repo: "https://github.com/ruhamabek/git-ts",
};
const alx: ProjectEntry = {
  id: 4,
  title: "Food ordering",
  description: "A MERN stack food ordering platform.",
  image: "/assets/projects/Food.png",
  demo: null,
  repo: "https://github.com/ruhamabek/Food-ordering",
};
const gymForge: ProjectEntry = {
  id: 7,
  title: "SimuShop",
  description: "A React Native AR powered e-commerce app.",
  image: "/assets/projects/SimuShop.png",
  demo: null,
  repo: "https://github.com/ruhamabek/SimuShop",
};
const bajaj: ProjectEntry = {
  id: 8,
  title: "SkillSwap",
  description: "An AI powered skill sharing platform.",
  image: "/assets/projects/SkillSwap.png",
  demo: null,
  repo: "https://github.com/ruhamabek/Bajaj-safe-ride",
};
const vaxilink: ProjectEntry = {
  id: 9,
  title: "Gym Forge", 
  description: "A landing page for the Gym Forge fitness center.",
  image: "/assets/projects/GymForge.png",
  demo: "https://gym-forge-nu.vercel.app/", 
  repo: "https://github.com/ruhamabek/gym-forge",
};
 

/* ─── Biome Project Assignments ─── */
const sunriseProjects: ProjectEntry[] = [flow, skillswap, dbstudio, vitra];
const dustyProjects: ProjectEntry[] = [foodOrdering, kidcare, simushop];
const snowyProjects: ProjectEntry[] = [alx, gymForge, bajaj];
const nightProjects: ProjectEntry[] = [vaxilink];

/* ─── Biome Config ─── */
type BiomeKey = "sunrise" | "dusty" | "snowy" | "night";

interface BiomeConfig {
  label: string;
  icon: typeof Sun;
  bg: string;
  overlay: string;
  titleColor: string;
  subtitleColor: string;
  tabActive: string;
  tabInactive: string;
  projects: typeof sunriseProjects;
  sectionTitle: string;
}

const biomeConfigs: Record<BiomeKey, BiomeConfig> = {
  sunrise: {
    label: "Sunrise",
    icon: Sun,
    bg: "/sunrise.jpeg",
    overlay:
      "linear-gradient(180deg, rgba(62,52,42,0.55) 0%, rgba(62,52,42,0.4) 30%, rgba(62,52,42,0.7) 100%)",
    titleColor: "text-sandy-light",
    subtitleColor: "text-sandy-light/60",
    tabActive:
      "bg-rust/80 border-rust-dark text-sandy-light shadow-lg shadow-rust/20",
    tabInactive:
      "bg-dark-base/30 border-brown-dark/40 text-sandy-light/60 hover:bg-dark-base/50 hover:text-sandy-light",
    projects: sunriseProjects,
    sectionTitle: "Dawn Expeditions",
  },
  dusty: {
    label: "Dusty",
    icon: Wind,
    bg: "/dusty.jpeg",
    overlay:
      "linear-gradient(180deg, rgba(112,79,42,0.5) 0%, rgba(112,79,42,0.35) 30%, rgba(62,52,42,0.7) 100%)",
    titleColor: "text-sandy-light",
    subtitleColor: "text-sandy-light/55",
    tabActive:
      "bg-brown-warm/80 border-brown-dark text-sandy-light shadow-lg shadow-brown-warm/20",
    tabInactive:
      "bg-dark-base/30 border-brown-dark/40 text-sandy-light/60 hover:bg-dark-base/50 hover:text-sandy-light",
    projects: dustyProjects,
    sectionTitle: "Dusty Trails",
  },
  snowy: {
    label: "Snowy",
    icon: Snowflake,
    bg: "/snowy.jpeg",
    overlay:
      "linear-gradient(180deg, rgba(30,50,70,0.45) 0%, rgba(30,50,70,0.3) 30%, rgba(26,26,46,0.7) 100%)",
    titleColor: "text-white/95",
    subtitleColor: "text-white/50",
    tabActive:
      "bg-teal-muted/70 border-teal-bright/60 text-white shadow-lg shadow-teal-bright/15",
    tabInactive:
      "bg-dark-base/30 border-white/10 text-white/50 hover:bg-dark-base/50 hover:text-white/80",
    projects: snowyProjects,
    sectionTitle: "Frozen Peaks",
  },
  night: {
    label: "Night",
    icon: Moon,
    bg: "/night.jpeg",
    overlay:
      "linear-gradient(180deg, rgba(26,26,46,0.5) 0%, rgba(26,26,46,0.35) 30%, rgba(26,26,46,0.75) 100%)",
    titleColor: "text-night-silver",
    subtitleColor: "text-night-silver/50",
    tabActive:
      "bg-night-purple/70 border-lavender/50 text-night-silver shadow-lg shadow-lavender/15",
    tabInactive:
      "bg-dark-base/30 border-white/10 text-night-silver/50 hover:bg-dark-base/50 hover:text-night-silver/80",
    projects: nightProjects,
    sectionTitle: "Night Missions",
  },
};

const biomeOrder: BiomeKey[] = ["sunrise", "dusty", "snowy", "night"];

/* ─── Main Page ─── */
export default function ProjectsPage() {
  const router = useRouter();
  const [currentBiome, setCurrentBiome] = useState<BiomeKey>("sunrise");
  const biome = biomeConfigs[currentBiome];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* ── Fullscreen Background with CSS Crossfade ── */}
      {biomeOrder.map((key) => (
        <div
          key={key}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${biomeConfigs[key].bg}')`,
            opacity: currentBiome === key ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      {/* ── Overlay ── */}
      <div
        className="absolute inset-0 z-[1] transition-all duration-700"
        style={{ background: biome.overlay }}
      />

      {/* ── Back Button ── */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 rounded-full border border-white/15 bg-dark-base/50 px-4 py-2 text-xs uppercase tracking-wider text-sandy-light hover:bg-dark-base/70 transition backdrop-blur-xl shadow-lg group font-bold"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center pt-24 pb-16 px-4 md:px-12 min-h-screen">
        {/* Title */}
        <h1
          className={`text-5xl md:text-7xl font-bold ${biome.titleColor} mb-3 tracking-tight text-center drop-shadow-2xl transition-colors duration-500`}
        >
          Mission Board
        </h1>

        <p
          className={`text-center ${biome.subtitleColor} max-w-2xl mb-10 text-lg transition-colors duration-500`}
        >
          An adventure through my completed quests and ongoing missions
        </p>

        {/* ── Biome Tabs ── */}
        <div className="flex gap-2 md:gap-3 mb-10 flex-wrap justify-center">
          {biomeOrder.map((key) => {
            const cfg = biomeConfigs[key];
            const isActive = currentBiome === key;
            const Icon = cfg.icon;
            return (
              <button
                key={key}
                onClick={() => setCurrentBiome(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider border-2 backdrop-blur-md transition-all duration-500 ${isActive ? cfg.tabActive : cfg.tabInactive
                  }`}
              >
                <Icon size={14} />
                {cfg.label}
              </button>
            );
          })}
        </div>

        {/* ── Section Title ── */}
        <div className="flex flex-col items-center mb-8">
          <h2
            className={`text-3xl md:text-4xl font-bold ${biome.titleColor} text-center drop-shadow-lg transition-colors duration-500`}
          >
            {biome.sectionTitle}
          </h2>
          <div className="about-shimmer-line w-20 mt-3" />
        </div>

        {/* ── Pin Board ── */}
        <div className="w-full max-w-6xl">
          <PinBoard
            key={currentBiome}
            projects={biome.projects}
            theme={currentBiome}
          />
        </div>

        {/* ── Bottom hint ── */}
        <p
          className={`text-center ${biome.subtitleColor} mt-12 text-sm italic transition-colors duration-500`}
        >
          Switch biomes to explore all adventures
        </p>
      </div>
    </section>
  );
}
