'use client';

import { useEffect, useState, useRef } from 'react';

export function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const elementScrollY = window.innerHeight - rect.top;
        setScrollY(Math.max(0, elementScrollY));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="parallax-container relative w-full h-96 md:h-screen overflow-hidden bg-gradient-to-b from-sunrise-gold via-sandy-light to-teal-bright"
    >
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-sandy-light opacity-60" />

      {/* Far mountains - slow parallax */}
      <div
        className="parallax-layer opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          height: '100%',
          background: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22%3E%3Cpath d=%22M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z%22 fill=%22%238B6F47%22/%3E%3C/svg%3E") repeat-x',
          backgroundPosition: `0 ${scrollY * 0.5}px`,
        }}
      />

      {/* Mid-ground trees - medium parallax */}
      <div
        className="parallax-layer opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          height: '80%',
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 300%22%3E%3Crect x=%2250%22 y=%22150%22 width=%2230%22 height=%22150%22 fill=%22%23704F2A%22/%3E%3Cpolygon points=%2265,120 35,180 95,180%22 fill=%22%235a3a1a%22/%3E%3Crect x=%22350%22 y=%22120%22 width=%2240%22 height=%22180%22 fill=%22%23704F2A%22/%3E%3Cpolygon points=%22370,80 330,150 410,150%22 fill=%22%235a3a1a%22/%3E%3Crect x=%22800%22 y=%22140%22 width=%2235%22 height=%22160%22 fill=%22%23704F2A%22/%3E%3Cpolygon points=%22817,100 795,160 839,160%22 fill=%22%235a3a1a%22/%3E%3C/svg%3E") repeat-x',
          backgroundPosition: `0 ${scrollY * 0.3}px`,
        }}
      />

      {/* Foreground - no parallax (or minimal) */}
      <div
        className="parallax-layer w-full"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          bottom: 0,
          height: '40%',
          background: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 200%22%3E%3Cellipse cx=%22200%22 cy=%22100%22 rx=%2240%22 ry=%2280%22 fill=%22%23704F2A%22/%3E%3Cpath d=%22M180,100 L220,100 L220,150 Q200,160 180,150 Z%22 fill=%22%235a3a1a%22/%3E%3Cellipse cx=%22900%22 cy=%22120%22 rx=%2250%22 ry=%22100%22 fill=%22%23704F2A%22/%3E%3Cpath d=%22M870,120 L930,120 L930,180 Q900,195 870,180 Z%22 fill=%22%235a3a1a%22/%3E%3Crect x=%220%22 y=%22150%22 width=%221200%22 height=%2250%22 fill=%22%23D4C5A9%22/%3E%3C/svg%3E") repeat-x",
          backgroundPosition: `0 ${scrollY * 0.1}px`,
        }}
      />

      {/* Center content text */}
      <div className="parallax-layer absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-dark-base mb-4 drop-shadow-lg">
          Welcome to My Odyssey
        </h1>
        <p className="text-lg md:text-xl text-dark-base/80 max-w-2xl drop-shadow-md">
          An adventure through code and creativity
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-base rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-dark-base rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
