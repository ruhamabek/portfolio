"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { MapPin, Clock, Sparkles } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      url: "https://github.com/ruhamabek",
      color: "hover:border-white/40",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/ruhama-bekele",
      color: "hover:border-blue-400/50",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={20} />,
      url: "https://x.com/RBekele192122",
      color: "hover:border-sky-400/50",
    },
    {
      name: "Telegram",
      icon: <FaTelegram size={20} />,
      url: "https://t.me/ruhamaBekele22",
      color: "hover:border-cyan-400/50",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={20} />,
      url: "mailto:ruhamabek@gmail.com",
      color: "hover:border-rust/50",
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* ── Fixed Background: contact.jpeg (team/unity scene) ── */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact.jpeg')" }}
      />
      {/* Warm overlay for readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-dark-deeper/90 via-dark-base/60 to-dark-base/40" />

      {/* ── Back Button ── */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 rounded-full border border-white/15 bg-dark-base/50 px-4 py-2 text-xs uppercase tracking-wider text-sandy-light hover:bg-dark-base/70 transition backdrop-blur-xl shadow-lg group font-bold"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 md:px-8">

        {/* ── Top: Maya Character + Heading ── */}
        <div className="flex flex-col items-center pt-16 md:pt-20 mb-8">
          {/* Maya floating above the content */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 mb-6">
            {/* Glow behind Maya */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(200,112,74,0.3) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.5)",
              }}
            />
            <Image
              src="/maya.png"
              alt="Maya — your adventure companion"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-sandy-light text-center drop-shadow-2xl mb-3">
            Join the{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #C8704A, #F4D35E, #C8704A)",
              }}
            >
              Adventure
            </span>
          </h1>

          <p className="text-sandy-light/60 text-center text-base md:text-lg max-w-lg mb-2 leading-relaxed">
            Every great quest starts with a conversation.
            <br className="hidden md:block" />
            Let&apos;s build something legendary together.
          </p>

        </div>

        {/* ── Shimmer Divider ── */}
        <div className="about-shimmer-line w-20 mb-8" />

        {/* ── Social Links: Radial / Campfire Arrangement ── */}
        <div className="w-full max-w-2xl mb-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles size={14} className="text-rust" />
            <h2 className="text-xs uppercase tracking-[0.25em] text-sandy-light/50 font-bold text-center">
              Choose Your Path
            </h2>
            <Sparkles size={14} className="text-rust" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 p-5 rounded-2xl backdrop-blur-xl border border-sandy-light/10 bg-dark-base/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-dark-base/50 ${link.color}`}
              >
                <span className="text-sandy-light/70 group-hover:text-sandy-light group-hover:scale-110 transition-all duration-300">
                  {link.icon}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sandy-light/50 group-hover:text-sandy-light/80 transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Info Cards Row ── */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          

         
        </div>

        {/* ── Bottom: Team Spirit Message + Silhouette fade ── */}
        <div className="text-center pb-12">
          <p className="text-sandy-light/30 text-xs font-bold uppercase tracking-[0.3em]">
            Every adventurer needs a party — let&apos;s team up
          </p>
        </div>
      </div>
    </section>
  );
}
