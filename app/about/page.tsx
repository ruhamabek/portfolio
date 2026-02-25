'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import {About} from "../section/About"
import { ParallaxHero } from '../components/ParallaxHero';


export default function AboutPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-sandy-light to-teal-bright text-dark-base font-sans">
      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 rounded-full border-2 border-brown-dark bg-brown-warm/30 px-4 py-2 text-xs uppercase tracking-wider text-dark-base hover:bg-brown-warm/50 transition backdrop-blur-md shadow-md group font-bold"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>
      
      {/* Parallax Hero Section */}
      <ParallaxHero />
      
      {/* About Content */}
      <div className="relative z-10 bg-gradient-to-b from-sandy-dark/20 to-brown-warm/20 backdrop-blur-sm">
        <div className="c-space">
          <About/>
        </div>
      </div>
    </section>
  );
}
