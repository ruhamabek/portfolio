"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import maya from "../../public/maya.png";

const menuItems = [
  { label: "About", route: "/about" },
  { label: "Projects", route: "/projects" },
  { label: "Resume", route: "https://drive.google.com/uc?export=download&id=1gqk83NqGhtbPujpbnoyUO64b6upwjmN0" },
  { label: "Contact", route: "/contact" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleNavigation = (route: string) => {
    if (route.startsWith("http")) {
      window.open(route, "_blank");
    } else {
      router.push(route);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev + 1) % menuItems.length);
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
      } else if (e.key === "Enter") {
        handleNavigation(menuItems[activeIndex].route);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, router]);

  return (
    <section className="relative w-full h-screen bg-[url('/alto.gif')] bg-cover bg-center overflow-hidden text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between h-full px-6 md:px-16 py-8 gap-12">
        {/* Left: Menu */}
        <div className="flex flex-col items-center md:items-start gap-4 mt-4 md:mt-[-50px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            Welcome to my Odyssey...
          </h1>
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 text-lg sm:text-xl md:text-2xl cursor-pointer transition ${index === activeIndex ? "text-yellow-300 scale-105" : "text-white/70"
                }`}
              onClick={() => {
                setActiveIndex(index);
                handleNavigation(item.route);
              }}
            >
              <span className="w-6">{index === activeIndex ? "➤" : ""}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Right: Maya Image */}
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src={maya}
            alt="Maya"
            width={550}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
