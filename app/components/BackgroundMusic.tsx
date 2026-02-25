"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Set initial volume
        audio.volume = 0.4;

        // Handle play state changes
        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        audio.addEventListener("play", onPlay);
        audio.addEventListener("pause", onPause);

        return () => {
            audio.removeEventListener("play", onPlay);
            audio.removeEventListener("pause", onPause);
        };
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch((err) => {
                console.warn("Autoplay blocked:", err);
                // Show label if blocked
                setShowLabel(true);
                setTimeout(() => setShowLabel(false), 3000);
            });
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-3">
            {/* Label for interaction cue */}
            <AnimatePresence>
                {(showLabel || (!isPlaying && !showLabel)) && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="px-3 py-1.5 rounded-lg bg-dark-base/60 backdrop-blur-md border border-sandy-light/10 text-[10px] uppercase tracking-widest font-bold text-sandy-light/70 whitespace-nowrap hidden md:block"
                    >
                        {isPlaying ? "Music Playing" : "Click to play Music"}
                    </motion.div>
                )}
            </AnimatePresence>

            <audio
                ref={audioRef}
                src="/audio/alto.m4a"
                loop
                preload="auto"
            />

            <button
                onClick={toggleMusic}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl backdrop-blur-xl border ${isPlaying
                        ? "border-rust/40 bg-rust/20 ring-4 ring-rust/10"
                        : "border-sandy-light/20 bg-dark-base/40"
                    }`}
                aria-label={isPlaying ? "Mute music" : "Play music"}
            >
                {/* Subtle pulse for playing state */}
                {isPlaying && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-rust/20 opacity-75" />
                )}

                <motion.div
                    animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    {isPlaying ? (
                        <Volume2 size={20} className="text-sandy-light" />
                    ) : (
                        <VolumeX size={20} className="text-sandy-light/50" />
                    )}
                </motion.div>
            </button>
        </div>
    );
}
