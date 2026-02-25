'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import { About } from "../section/About";
import { ParallaxHero } from '../components/ParallaxHero';

export default function AboutPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen text-dark-base font-sans">
      {/* Fixed background image that persists behind everything */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/aboutbg.jpeg")' }}
      />
      {/* Dark overlay to tame the background and ensure text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-dark-base/40 via-dark-deeper/70 to-dark-deeper/90" />

      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 rounded-full border border-sandy-light/20 bg-dark-base/50 px-4 py-2 text-xs uppercase tracking-wider text-sandy-light hover:bg-dark-base/70 transition backdrop-blur-xl shadow-lg group font-bold"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      {/* Parallax Hero Section — scrolls naturally */}
      <div className="relative z-10">
        <ParallaxHero />
      </div>

      {/* Seamless gradient transition from hero into content — no hard edge */}
      <div className="relative z-10 -mt-32">
        <div
          className="h-32 w-full"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(45,36,28,0.6) 60%, rgba(45,36,28,0.75))',
          }}
        />
      </div>

      {/* About Content — scrolls over the fixed background */}
      <div className="relative z-10" style={{ background: 'linear-gradient(to bottom, rgba(45,36,28,0.75), rgba(45,36,28,0.55) 20%, rgba(45,36,28,0.4) 50%, rgba(45,36,28,0.55) 80%, rgba(45,36,28,0.8))' }}>
        <div className="c-space py-16 md:py-24">
          <About />
        </div>
      </div>
    </section>
  );
}
