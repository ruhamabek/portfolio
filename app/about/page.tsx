'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import {About} from "../section/About"


export default function AboutPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen bg-[url('/about-gif.gif')] bg-cover bg-center text-white font-mono">
             <h2 className="text-amber-900">
           <div className="absolute top-6 left-6 z-20 text-heading">
                <button
                  onClick={() => router.push('/')}
                  className="flex items-center gap-2 rounded-full border  border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-white/20 transition backdrop-blur-md shadow-md"
                >
                  
                </button>
              </div>
              .
        </h2>
       <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-white/20  transition backdrop-blur-md shadow-md"
        >
          <IoArrowBack />
          
        </button>
      </div>
      <About/>
    </section>
  );
}
