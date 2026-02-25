"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { useState, useRef } from "react";
import { PinBoard } from "../components/PinBoard";

const projects = [
  {
    id: 1,
    title: "Flow",
    description:
      "An AI-powered automated drag-and-drop web scraping tool.",
    image: "/assets/projects/Flow.png", // Placeholder
    demo: "https://flow-chi-drab.vercel.app/", // Has Live Demo
    repo: "https://github.com/ruhamabek/flow",
  },
  {
    id: 2,
    title: "SkillSwap",
    description:
      "An AI-powered skill sharing platform empowering learners to grow together.",
    image: "/assets/projects/SkillSwap.png", // Placeholder
    demo: null,
    repo: "https://github.com/ruhamabek/SkillSwap",
  },
  {
    id: 3,
    title: "Food Ordering Platform",
    description:
      "A full-stack food ordering platform built using the MERN stack.",
    image: "/assets/projects/Food.png", // Placeholder
    demo: null,
    repo: "https://github.com/ruhamabek/Food-ordering",
  },
  {
    id: 4,
    title: "ALX Platform Clone",
    description:
      "A clone of the ALX learning platform.",
    image: "/assets/projects/alx.png", // Placeholder
    demo: null,
    repo: "https://github.com/ruhamabek/alx-clone",
  },
  {
    id: 5,
    title: "KidCare Hub",
    description:
      "A platform for parents to order tutors, drivers, and nannies.",
    image: "/assets/projects/kidcare.png",
    demo: null, // User specified only Flow and Gym Forge have live demos
    repo: "https://github.com/ruhamabek/colorful-playground-home",
  },
  {
    id: 6,
    title: "SimuShop",
    description:
      "A React Native e-commerce application featuring 3D and AR capabilities.",
    image: "/assets/projects/SimuShop.png", // Placeholder
    demo: null,
    repo: "https://github.com/ruhamabek/SimuShop",
  },
  {
    id: 7,
    title: "Gym Forge",
    description:
      "A landing page for the Gym Forge fitness center.",
    image: "/assets/projects/GymForge.png", // Placeholder
    demo: "https://gym-forge-nu.vercel.app/", // Has Live Demo
    repo: "https://github.com/ruhamabek/gym-forge",
  },
  {
    id: 8,
    title: "Bajaj SafeRide",
    description:
      "A MERN stack application for booking Bajaj rides.",
    image: "/assets/projects/Bajaj.png", // Placeholder
    demo: null,
    repo: "https://github.com/ruhamabek/Bajaj-safe-ride",
  },
  {
    id: 9,
    title: "Vaxilink",
    description:
      "A React Native application for vaccination awareness and tracking.",
    image: "/assets/projects/VaxiLink.png", // Placeholder
    demo: null,
    repo: "https://github.com/ruhamabek/VaxiLink",
  },
  {
    id: 10,
    title: "Amazon Clone",
    description:
      "A clone of Amazon built with JavaScript, HTML, and CSS.",
    image: "/assets/projects/amazon.png", // Placeholder
    demo: null,
    repo: "https://github.com/ruhamabek/javascript-amazon-project",
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState<'sunrise' | 'night' | 'dusty' | 'sunny'>('sunrise');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Split projects by time of day (first 4, next 2, next 2 as placeholder)
  const sections = {
    sunrise: projects.slice(0, 4),
    night: projects.slice(4, 8),
    dusty: projects.slice(0, 2),
    sunny: projects.slice(2, 4),
  };

  const sectionTitles = {
    sunrise: 'Early Morning Expeditions',
    night: 'Night Missions',
    dusty: 'Dusty Trails',
    sunny: 'Sunny Adventures',
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-sandy-light to-teal-bright text-dark-base overflow-x-hidden">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 rounded-full border-2 border-brown-dark bg-brown-warm/30 px-4 py-2 text-xs uppercase tracking-wider text-dark-base hover:bg-brown-warm/50 transition backdrop-blur-md shadow-md group font-bold"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start pt-24 px-6 md:px-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-dark-base mb-4 tracking-tight text-center drop-shadow-lg"
        >
          Mission Board
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-brown-dark/70 max-w-2xl mb-12 text-lg"
        >
          An adventure through my completed quests and ongoing missions
        </motion.p>

        {/* Time of Day Selector */}
        <div className="flex gap-3 mb-12 flex-wrap justify-center">
          {(['sunrise', 'night', 'dusty', 'sunny'] as const).map((section) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section)}
              className={`px-6 py-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                currentSection === section
                  ? 'adventure-btn-primary'
                  : 'adventure-btn opacity-60 hover:opacity-100'
              }`}
            >
              {section === 'sunrise' && '🌅 Sunrise'}
              {section === 'night' && '🌙 Night'}
              {section === 'dusty' && '🌪️ Dusty'}
              {section === 'sunny' && '☀️ Sunny'}
            </button>
          ))}
        </div>

        {/* Pin Board Section */}
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl"
        >
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-base text-center">
              {sectionTitles[currentSection]}
            </h2>
          </div>
          <PinBoard projects={sections[currentSection]} theme={currentSection} />
        </motion.div>

        {/* Scroll Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-brown-dark/60 mt-12 text-sm italic"
        >
          Switch between time periods to explore all my adventures
        </motion.p>
      </div>
    </section>
  );
}
