'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import { useRef, useState } from 'react';

const BentoTilt = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [transform, setTransform] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tiltX = (y - 0.5) * 4;
    const tiltY = (x - 0.5) * -4;
    setTransform(`perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.97)`);
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform('')}
      style={{ transform }}
    >
      {children}
    </div>
  );
};

export default function AboutPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen bg-[url('/about-gif.gif')] bg-cover bg-center text-white font-mono">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70 z-0" />

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-white/20 transition backdrop-blur-md shadow-md"
        >
          <IoArrowBack />
          Go Back
        </button>
      </div>

      {/* Intro Section */}
      <div className="relative z-10 flex items-center justify-center h-[80vh] px-6">
        <div className="max-w-2xl text-center backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Behind the Ride
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            This portfolio is a quiet tribute to the rhythm of curiosity and craft.
            Like drifting through alpine slopes, each project here is a reflection
            of momentum, exploration, and the beauty of motion in stillness.
          </p>
          <p className="text-white/60 text-sm mt-6 italic">
            Inspired by Alto’s Adventure & the silent story of code.
          </p>
        </div>
      </div>

      {/* Projects Bento Section */}
      <div className="relative z-10 px-6 md:px-12 pb-24">
        <h2 className="text-xl md:text-2xl font-bold mb-6">✨ Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoTilt className="rounded-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/10 shadow-md">
            <div className="p-4">
              <video src="/videos/feature-1.mp4" autoPlay muted loop className="rounded-lg" />
              <h3 className="text-lg mt-3 font-semibold">KidCare Hub</h3>
              <p className="text-sm text-white/60">Childcare + scheduling platform built with React & Node.</p>
            </div>
          </BentoTilt>

          <BentoTilt className="rounded-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/10 shadow-md">
            <div className="p-4">
              <video src="/videos/feature-2.mp4" autoPlay muted loop className="rounded-lg" />
              <h3 className="text-lg mt-3 font-semibold">VaxiLink</h3>
              <p className="text-sm text-white/60">Vaccination tracking system for caregivers and HEWs.</p>
            </div>
          </BentoTilt>

          <BentoTilt className="rounded-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/10 shadow-md">
            <div className="p-4">
              <video src="/videos/feature-3.mp4" autoPlay muted loop className="rounded-lg" />
              <h3 className="text-lg mt-3 font-semibold">RedBlossom</h3>
              <p className="text-sm text-white/60">Restaurant website with animated UI and menu system.</p>
            </div>
          </BentoTilt>
        </div>

        {/* Technologies Used */}
        <h2 className="text-xl md:text-2xl font-bold mt-20 mb-6">🛠️ Technologies I Use</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center text-sm text-white/70">
          {[
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Next.js', icon: '/icons/nextjs.svg' },
            { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
            { name: 'TypeScript', icon: '/icons/ts.svg' },
            { name: 'Node.js', icon: '/icons/node.svg' },
            { name: 'MongoDB', icon: '/icons/mongo.svg' },
          ].map((tech, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 py-5 px-2 rounded-lg backdrop-blur-md border border-white/10 transition hover:bg-white/10 hover:shadow-md"
            >
              <img src={tech.icon} alt={tech.name} className="mx-auto h-6 w-6 mb-2 opacity-80" />
              <div className="text-xs">{tech.name}</div>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white/10 text-xs text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                {`Built with ${tech.name}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
