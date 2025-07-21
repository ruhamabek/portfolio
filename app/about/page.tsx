'use client';

import { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import type { ReactNode } from 'react';

// Tilt wrapper for 3D interaction
export const BentoTilt = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
    );
  };

  const handleMouseLeave = () => setTransformStyle('');

  return (
    <div
      ref={itemRef}
      className={`transition-transform duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: {
  src: string;
  title: ReactNode;
  description?: string;
  isComingSoon?: boolean;
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative size-full rounded-2xl overflow-hidden">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 font-mono text-white">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
          {description && (
            <p className="mt-4 text-sm md:text-lg text-white/70 max-w-md">{description}</p>
          )}
        </div>
        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoverOpacity(1)}
            onMouseLeave={() => setHoverOpacity(0)}
            className="relative flex items-center gap-2 cursor-pointer w-fit px-4 py-2 text-sm uppercase rounded-full bg-white/10 text-white/40 backdrop-blur-md"
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #ffffff33, transparent)`,
              }}
            />
            <TiLocationArrow className="z-10" />
            <span className="z-10">coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
};

const About = () => (
  <section className="bg-gradient-to-b from-[#1a1a1a] via-[#111] to-black text-white font-mono pb-32 min-h-screen">
    <div className="container mx-auto px-5 md:px-12">
      <header className="py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to the Odyssey
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/60">
          Journey through worlds of creativity, code, and craftsmanship. Discover the projects that map my story.
        </p>
      </header>

      {/* Hero Bento */}
      <BentoTilt className="mb-12 h-96 w-full rounded-2xl overflow-hidden">
        <BentoCard
          src="/videos/feature-1.mp4"
          title="My Journey"
          description="An evolving portfolio of experiences across design, code, and storytelling."
          isComingSoon
        />
      </BentoTilt>

      {/* Grid Bento Section */}
      <div className="grid min-h-[120vh] w-full grid-cols-1 md:grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="row-span-1 md:row-span-2">
          <BentoCard
            src="/videos/feature-2.mp4"
            title="Projects"
            description="Unique builds at the intersection of art and engineering."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt>
          <BentoCard
            src="/videos/feature-3.mp4"
            title="Initiatives"
            description="Community-led, impact-driven ideas in motion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt>
          <BentoCard
            src="/videos/feature-4.mp4"
            title="Tools"
            description="Handcrafted utilities and components for devs and creators."
            isComingSoon
          />
        </BentoTilt>
        <BentoTilt>
          <BentoCard
            src="/videos/feature-4.mp4"
            title="Tools"
            description="Handcrafted utilities and components for devs and creators."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt>
          <video
            src="/videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="h-full w-full object-cover object-center rounded-2xl"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default About;
