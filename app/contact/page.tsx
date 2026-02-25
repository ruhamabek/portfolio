"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const router = useRouter();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/ruhamabek",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/ruhama-bekele",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={24} />,
      url: "https://x.com/RBekele192122",
    },
    {
      name: "Telegram",
      icon: <FaTelegram size={24} />,
      url: "https://t.me/ruhamaBekele22",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:ruhamabek@gmail.com",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-sandy-light via-brown-warm to-dark-deeper text-dark-base font-sans overflow-hidden flex items-center justify-center">
      {/* Decorative background parallax layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-bright rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-rust rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 rounded-full border-2 border-brown-dark bg-brown-warm/30 px-4 py-2 text-xs uppercase tracking-wider text-dark-base hover:bg-brown-warm/50 transition backdrop-blur-md shadow-md group font-bold"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      {/* Main Content - Game HUD Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hud-panel relative z-10 max-w-2xl w-full mx-4"
      >
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-dark-base drop-shadow-lg">
              Connection Quest
            </h1>
            <div className="w-24 h-1 bg-rust mx-auto mt-3 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-brown-dark/80 text-lg leading-relaxed"
          >
            Begin your communication adventure. Choose a path to reach out!
          </motion.p>
        </div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8 pb-6 border-b-2 border-brown-warm/30"
        >
          <div className="w-3 h-3 rounded-full bg-rust animate-pulse" />
          <span className="text-sm font-bold text-brown-dark uppercase tracking-wider">
            Online and ready for new challenges
          </span>
        </motion.div>

        {/* Social Links - Game Inventory Style */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-dark-base mb-6 uppercase tracking-widest text-center">
            Choose Your Communication Channel
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                className="adventure-btn group flex items-center justify-center gap-3 !p-4 text-sm md:text-base hover:scale-105"
                aria-label={link.name}
              >
                <span className="text-lg transition-transform group-hover:scale-125">
                  {link.icon}
                </span>
                <span className="font-bold">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="pt-6 border-t-2 border-brown-warm/30 text-center"
        >
          <p className="text-brown-dark/70 font-semibold text-sm mb-2">
            Current Location
          </p>
          <p className="text-lg font-bold text-dark-base">
            Dire Dawa, Ethiopia
          </p>
          <p className="text-xs text-brown-dark/60 mt-2">
            Timezone: UTC+3 (Available for worldwide collaboration)
          </p>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 pt-6 border-t-2 border-brown-warm/30 text-center"
        >
          <p className="text-xs font-mono text-brown-dark/60 uppercase tracking-wider">
            Response time: 24-48 hours | All inquiries welcome
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-20 h-20 bg-sandy-light/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-24 h-24 bg-teal-bright/20 rounded-full blur-xl"
      />
    </section>
  );
}
