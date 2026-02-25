"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

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

  return (
    <section className="relative min-h-screen text-white font-mono overflow-hidden">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        {/* Using a standard img tag for the gif if it's in public, or Next Image if optimized. 
            Since it's a gif, unoptimized might be safer to ensure animation plays correctly if Next.js tries to optimize it.
            But let's try Next Image first. If it's a local file in public, it should work.
        */}
        <Image
          src="/bg-project.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-white/20 transition backdrop-blur-md shadow-md group"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />

        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-24 px-6 md:px-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-game-dark-olive mb-6 tracking-tight text-center drop-shadow-lg"
        >
          Projects Archive
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-game-dark-olive/70 max-w-2xl mb-20 text-lg"
        >
          A timeline of my creative and technical work, blending logic with art.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative h-[450px] rounded-lg overflow-hidden border-3 border-game-olive shadow-2xl bg-game-olive/20 hover:border-game-rust transition-all duration-200"
            >
              {/* Full Cover Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              
                />
              </div>

              {/* Game Panel Overlay - Always visible to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-game-dark-olive/95 via-game-olive/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <h3 className="text-3xl font-bold text-game-cream mb-2 drop-shadow-md">
                    {project.title}
                  </h3>
                  
                  {/* Description - Reveals/Expands on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                       <p className="text-game-cream/80 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                      </p>
                      
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            className="px-4 py-2 bg-game-rust border border-game-rust-dark text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-game-rust-dark transition-all hover:shadow-lg"
                          >
                            Live Demo
                          </Link>
                        )}
                        <Link
                          href={project.repo}
                          target="_blank"
                          className="px-4 py-2 bg-game-olive border-2 border-game-dark-olive text-game-cream text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-game-dark-olive transition-all hover:shadow-lg"
                        >
                          View Code
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Initial state hint (optional, maybe just the title is enough) */}
                  {/* We can keep the description hidden or show a truncated version. 
                      The user asked for "cooler", so the reveal effect is good. 
                      But if the user wants to see what it is at a glance, maybe a short subtitle?
                      Let's stick to the reveal for maximum "cool" and clean look.
                  */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
