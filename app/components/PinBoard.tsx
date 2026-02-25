'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demo?: string;
  repo: string;
}

interface PinBoardProps {
  projects: Project[];
  theme: 'sunrise' | 'night' | 'dusty' | 'sunny';
}

const themeClasses = {
  sunrise: {
    bg: 'section-sunrise',
    textColor: 'text-dark-base',
    pinColor: 'bg-rust',
    threadColor: '#C8704A',
    accentColor: 'text-sunrise-orange'
  },
  night: {
    bg: 'section-night',
    textColor: 'text-night-silver',
    pinColor: 'bg-night-silver',
    threadColor: '#E8E8E8',
    accentColor: 'text-night-silver'
  },
  dusty: {
    bg: 'section-dusty',
    textColor: 'text-dusty-brown',
    pinColor: 'bg-dusty-rose',
    threadColor: '#A67C7C',
    accentColor: 'text-dusty-brown'
  },
  sunny: {
    bg: 'section-sunny',
    textColor: 'text-dark-base',
    pinColor: 'bg-sunny-yellow',
    threadColor: '#F4D35E',
    accentColor: 'text-sunny-green'
  }
};

export function PinBoard({ projects, theme }: PinBoardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  // Generate random but distributed positions for pins
  useEffect(() => {
    const newPositions = projects.map(() => ({
      x: Math.random() * (containerRef.current?.offsetWidth || 400) + 50,
      y: Math.random() * 300 + 60,
    }));
    setPositions(newPositions);
  }, [projects.length]);

  // Draw threads connecting pins
  useEffect(() => {
    if (!svgRef.current || positions.length < 2) return;

    const svg = svgRef.current;
    svg.innerHTML = '';

    for (let i = 0; i < positions.length - 1; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', String(positions[i].x));
      line.setAttribute('y1', String(positions[i].y));
      line.setAttribute('x2', String(positions[i + 1].x));
      line.setAttribute('y2', String(positions[i + 1].y));
      line.setAttribute('class', 'thread-line');
      line.setAttribute('stroke', themeClasses[theme].threadColor);
      svg.appendChild(line);
    }
  }, [positions, theme]);

  const themeStyle = themeClasses[theme];

  return (
    <div className={`pin-board ${themeStyle.bg} relative w-full p-8 md:p-12`} ref={containerRef}>
      {/* SVG for threading */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Pinned Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="pinned-item group"
            style={{
              transform: `rotate(${Math.random() * 6 - 3}deg)`,
            }}
          >
            {/* Pin */}
            <div className={`pin ${themeStyle.pinColor}`} />

            {/* Project Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-xl border-2 border-brown-dark/20 hover:shadow-2xl transition-all duration-300 h-full">
              {/* Image */}
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className={`text-lg font-bold ${themeStyle.textColor} line-clamp-2`}>
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className={`adventure-btn flex-1 text-xs !px-3 !py-2 text-center`}
                    >
                      View
                    </Link>
                  )}
                  <Link
                    href={project.repo}
                    target="_blank"
                    className={`adventure-btn flex-1 text-xs !px-3 !py-2 text-center`}
                  >
                    Code
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
