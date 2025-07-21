"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import maya from "../../public/maya.png";

// Define menu items and their corresponding routes
const menuItems = [
  { label: "About", route: "/about" },
  { label: "Projects", route: "/projects" },
  { label: "Resume", route: "/resume" },
  { label: "Contact", route: "/contact" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  // Handle keyboard up/down
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev + 1) % menuItems.length);
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
      } else if (e.key === "Enter") {
        router.push(menuItems[activeIndex].route);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, router]);

  return (
    <section className="relative w-full h-screen bg-[url('/alto.gif')] bg-cover bg-center overflow-hidden text-white font-mono">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-16">
        {/* Left: Game-style menu */}
        <div className="flex flex-col gap-6 mt-[-50px]">
          <h1 className="text-4xl font-bold mb-6">Welcome to my Odyssey...</h1>
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 text-2xl cursor-pointer transition ${
                index === activeIndex ? "text-yellow-300 scale-105" : "text-white/70"
              }`}
              onClick={() => {
                setActiveIndex(index); // ← Only change index on click
                router.push(item.route); // ← Navigate to page
              }}
            >
              <span className="w-6">{index === activeIndex ? "➤" : ""}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Right: Maya Image */}
        <div className="mr-[-60px]">
          <Image src={maya} alt="Maya" width={550} priority />
        </div>
      </div>
    </section>
  );
}
