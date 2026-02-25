'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demo?: string | null;
  repo: string | null;
}

interface PinBoardProps {
  projects: Project[];
  theme: 'sunrise' | 'night' | 'snowy' | 'dusty';
}

/* ─── Biome-specific styles ─── */
const themeStyles = {
  sunrise: {
    pinColor: '#C8704A',
    pinGlow: 'rgba(200, 112, 74, 0.6)',
    threadColor: '#C8704A',
    cardBg: 'rgba(62, 52, 42, 0.65)',
    cardBorder: 'rgba(200, 112, 74, 0.25)',
    cardHoverBorder: 'rgba(200, 112, 74, 0.6)',
    textColor: 'text-sandy-light',
    subtextColor: 'text-sandy-light/60',
    btnClass: 'bg-rust/70 hover:bg-rust border-rust-dark/40 text-sandy-light',
    btnSecondary: 'bg-white/5 hover:bg-white/10 border-white/10 text-sandy-light',
  },
  dusty: {
    pinColor: '#A67C7C',
    pinGlow: 'rgba(166, 124, 124, 0.6)',
    threadColor: '#A67C7C',
    cardBg: 'rgba(112, 79, 42, 0.55)',
    cardBorder: 'rgba(166, 124, 124, 0.25)',
    cardHoverBorder: 'rgba(166, 124, 124, 0.6)',
    textColor: 'text-sandy-light',
    subtextColor: 'text-sandy-light/60',
    btnClass: 'bg-brown-warm/70 hover:bg-brown-warm border-brown-dark/40 text-sandy-light',
    btnSecondary: 'bg-white/5 hover:bg-white/10 border-white/10 text-sandy-light',
  },
  snowy: {
    pinColor: '#7DD3C0',
    pinGlow: 'rgba(125, 211, 192, 0.6)',
    threadColor: '#7DD3C0',
    cardBg: 'rgba(30, 50, 70, 0.6)',
    cardBorder: 'rgba(125, 211, 192, 0.15)',
    cardHoverBorder: 'rgba(125, 211, 192, 0.5)',
    textColor: 'text-white/90',
    subtextColor: 'text-white/50',
    btnClass: 'bg-teal-muted/50 hover:bg-teal-bright/70 border-teal-bright/30 text-white',
    btnSecondary: 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80',
  },
  night: {
    pinColor: '#7a57db',
    pinGlow: 'rgba(122, 87, 219, 0.6)',
    threadColor: '#7a57db',
    cardBg: 'rgba(26, 26, 46, 0.65)',
    cardBorder: 'rgba(122, 87, 219, 0.15)',
    cardHoverBorder: 'rgba(122, 87, 219, 0.5)',
    textColor: 'text-night-silver',
    subtextColor: 'text-night-silver/50',
    btnClass: 'bg-night-purple/60 hover:bg-lavender/60 border-lavender/30 text-night-silver',
    btnSecondary: 'bg-white/5 hover:bg-white/10 border-white/10 text-night-silver/80',
  },
};

/*
 * Scattered positions for each project count.
 * { left%, top%, rotation deg, width px }
 * Carefully positioned to avoid overlaps and look organic.
 */
const scatteredLayouts: Record<number, { left: number; top: number; rot: number; w: number }[]> = {
  2: [
    { left: 8, top: 10, rot: -2.5, w: 300 },
    { left: 55, top: 8, rot: 2, w: 300 },
  ],
  3: [
    { left: 3, top: 5, rot: -3, w: 280 },
    { left: 36, top: 30, rot: 2.5, w: 280 },
    { left: 66, top: 3, rot: -1.5, w: 280 },
  ],
};

/* Which pins connect to which */
const connectionOrder: Record<number, [number, number][]> = {
  2: [[0, 1]],
  3: [[0, 1], [1, 2], [0, 2]],
};

/* Generate a droopy catenary path between two pin centers */
function threadPath(x1: number, y1: number, x2: number, y2: number): string {
  const midX = (x1 + x2) / 2;
  const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const sag = Math.min(dist * 0.22, 70);
  const midY = Math.max(y1, y2) + sag;
  return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
}

export function PinBoard({ projects, theme }: PinBoardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [pinPositions, setPinPositions] = useState<{ x: number; y: number }[]>([]);
  const style = themeStyles[theme];
  const count = projects.length;
  const layout = scatteredLayouts[count] || scatteredLayouts[3];
  const connections = connectionOrder[count] || connectionOrder[3];

  const updatePaths = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPaths: string[] = [];
    const newPinPos: { x: number; y: number }[] = [];

    // Get pin centers relative to container
    for (let i = 0; i < pinRefs.current.length; i++) {
      const pin = pinRefs.current[i];
      if (!pin) {
        newPinPos.push({ x: 0, y: 0 });
        continue;
      }
      const r = pin.getBoundingClientRect();
      newPinPos.push({
        x: r.left - containerRect.left + r.width / 2,
        y: r.top - containerRect.top + r.height / 2,
      });
    }

    setPinPositions(newPinPos);

    for (const [a, b] of connections) {
      if (!newPinPos[a] || !newPinPos[b]) continue;
      newPaths.push(
        threadPath(newPinPos[a].x, newPinPos[a].y, newPinPos[b].x, newPinPos[b].y)
      );
    }

    setPaths(newPaths);
  }, [connections]);

  useEffect(() => {
    // Multiple delays to catch layout settling
    const t1 = setTimeout(updatePaths, 50);
    const t2 = setTimeout(updatePaths, 200);
    const t3 = setTimeout(updatePaths, 500);
    window.addEventListener('resize', updatePaths);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', updatePaths);
    };
  }, [projects, updatePaths]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ minHeight: '480px', height: '58vh', maxHeight: '680px' }}
    >
      {/* ── SVG Threads ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[15]">
        <defs>
          <filter id={`tglow-${theme}`}>
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {paths.map((d, i) => (
          <g key={i}>
            {/* Glow */}
            <path
              d={d}
              fill="none"
              stroke={style.pinGlow}
              strokeWidth="6"
              strokeLinecap="round"
              filter={`url(#tglow-${theme})`}
              opacity="0.35"
            />
            {/* Thread */}
            <path
              d={d}
              fill="none"
              stroke={style.threadColor}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
            />
          </g>
        ))}

        {/* ── Small circles at each pin to mark thread endpoints ── */}
        {pinPositions.map((pos, i) => (
          <circle
            key={`dot-${i}`}
            cx={pos.x}
            cy={pos.y}
            r="4"
            fill={style.pinColor}
            opacity="0.9"
          />
        ))}
      </svg>

      {/* ── Scattered Project Cards ── */}
      {projects.map((project, index) => {
        const pos = layout[index];
        if (!pos) return null;

        return (
          <div
            key={project.id}
            className="absolute z-10"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              width: `${pos.w}px`,
              maxWidth: '80vw',
              transform: `rotate(${pos.rot}deg)`,
            }}
          >
            {/* ── Pin ── */}
            <div
              ref={(el) => { pinRefs.current[index] = el; }}
              className="absolute -top-3 left-8 z-30"
              style={{ width: '24px', height: '24px' }}
            >
              {/* Pin glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: style.pinGlow,
                  filter: 'blur(6px)',
                  transform: 'scale(1.8)',
                }}
              />
              {/* Pin body */}
              <div
                className="relative w-6 h-6 rounded-full border-2 border-white/30 shadow-lg"
                style={{ background: style.pinColor }}
              >
                <div className="absolute top-0.5 left-0.5 w-2 h-2 rounded-full bg-white/40" />
              </div>
              {/* Pin needle shadow */}
              <div
                className="absolute top-5 left-2 w-2 h-3 rounded-b-full opacity-30"
                style={{ background: style.pinColor }}
              />
            </div>

            {/* ── Card ── */}
            <div
              className="rounded-2xl p-4 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl group cursor-default mt-2"
              style={{
                background: style.cardBg,
                border: `1.5px solid ${style.cardBorder}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = style.cardHoverBorder;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = style.cardBorder;
              }}
            >
              {/* Image */}
              <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Title & description */}
              <h3 className={`text-base font-bold ${style.textColor} mb-1`}>
                {project.title}
              </h3>
              <p className={`text-xs ${style.subtextColor} mb-3 line-clamp-2 leading-relaxed`}>
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-2">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className={`flex-1 text-center text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg border ${style.btnClass} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                  >
                    View
                  </Link>
                )}
                {project.repo && (
                  <Link
                    href={project.repo}
                    target="_blank"
                    className={`flex-1 text-center text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg border ${style.btnSecondary} transition-all duration-300 hover:-translate-y-0.5`}
                  >
                    Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
