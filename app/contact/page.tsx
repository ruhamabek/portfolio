"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const router = useRouter();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={30} />,
      url: "https://github.com/ruhamabek",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      url: "https://www.linkedin.com/in/ruhama-bekele", // Assuming this, user can update
      color: "hover:text-blue-400",
    },
    {
      name: "X",
      icon: <FaTwitter size={30} />,
      url: "https://x.com/RBekele192122", // Assuming this
      color: "hover:text-sky-400",
    },
    {
      name: "Telegram",
      icon: <FaTelegram size={30} />,
      url: "https://t.me/ruhamaBekele22", // Assuming this
      color: "hover:text-blue-300",
    },
  ];

  return (
    <section className="relative min-h-screen text-white font-mono overflow-hidden flex items-center justify-center">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg-contact.jpeg"
          alt="Contact Background"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle overlay to ensure text readability but keep image vibrant */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-white/20 transition backdrop-blur-md shadow-md group"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Content Card - Game Menu Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="game-panel relative z-10 max-w-lg w-full mx-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-game-cream drop-shadow-sm"
        >
          Let&apos;s Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-game-text-muted/90 mb-10 text-lg leading-relaxed"
        >
          Whether you have a question, a project idea, or just want to say hi, I&apos;d love to hear from you.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              className="px-6 py-3 bg-game-brown border-2 border-game-brown text-game-cream rounded-lg font-bold uppercase tracking-wider text-xs transition-all duration-200 hover:bg-game-brown hover:border-game-yellow hover:text-game-yellow hover:shadow-lg active:scale-95 flex items-center gap-2 shadow-lg group"
              aria-label={link.name}
            >
              {link.icon}
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 text-sm text-game-text-muted/70 font-semibold"
        >
            Based in Dire Dawa, Ethiopia
        </motion.div>
      </motion.div>
    </section>
  );
}
