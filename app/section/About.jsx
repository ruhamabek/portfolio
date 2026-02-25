import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeChild = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const About = () => {
  const grid2Container = useRef();

  return (
    <section className="relative" id="about">
      {/* ── Decorative Blobs ── */}
      <div
        className="about-blob w-[500px] h-[500px] -top-40 -left-40"
        style={{ background: "radial-gradient(circle, #C8704A 0%, #8B6F47 100%)" }}
      />
      <div
        className="about-blob w-[400px] h-[400px] top-[40%] -right-32"
        style={{
          background: "radial-gradient(circle, #704F2A 0%, #3E342A 100%)",
          animationDelay: "7s",
          animationDuration: "25s",
        }}
      />
      <div
        className="about-blob w-[350px] h-[350px] bottom-20 left-[20%]"
        style={{
          background: "radial-gradient(circle, #B85F3F 0%, #704F2A 100%)",
          animationDelay: "12s",
          animationDuration: "18s",
        }}
      />

      {/* ── Section 1: Intro ── */}
      <motion.div
        className="about-section max-w-3xl mx-auto text-center mb-8 md:mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h1
            variants={fadeChild}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-sandy-light/90">I'm </span>
            <span
              className="relative inline-block text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #C8704A, #F4D35E, #C8704A)",
                backgroundSize: "200% auto",
              }}
            >
              Ruhama Bekele
              <span className="absolute -bottom-2 left-0 w-full about-shimmer-line" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeChild}
            className="text-base md:text-lg text-sandy-light/70 leading-relaxed max-w-xl mx-auto mb-8"
          >
            In this digital odyssey, I wander through lines of code, turning ideas
            into experiences, and crafting smooth journeys on the web. Discovering
            new adventures by the day. :)
          </motion.p>

          <motion.div
            variants={fadeChild}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-dark-base/40 backdrop-blur-md border border-sandy-light/10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rust" />
            </span>
            <span className="text-xs uppercase tracking-widest text-sandy-light/60">
              Currently exploring{" "}
              <span className="text-rust font-bold">TanStack Start</span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Shimmer Divider ── */}
      <div className="about-shimmer-line max-w-md mx-auto mb-8 md:mb-16" />

      {/* ── Section 2: Tech Arsenal (Orbiting Frameworks) ── */}
      <motion.div
        className="relative mb-8 md:mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-section max-w-4xl mx-auto overflow-hidden">
          {/* Glow behind orbits */}
          <div className="about-glow w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <motion.h2
            variants={fadeChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl font-bold text-sandy-light/80 mb-2"
          >
            Tech Arsenal
          </motion.h2>
          <motion.p
            variants={fadeChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-sm text-sandy-light/50 mb-6"
          >
            Modern tools I wield to build scalable software
          </motion.p>

          <div className="relative h-[20rem] md:h-[22rem] flex items-center justify-center">
            <Frameworks />
          </div>
        </div>
      </motion.div>

      {/* ── Section 3: Interactive Playground ── */}
      <motion.div
        className="relative mb-8 md:mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-section max-w-4xl mx-auto">
          <motion.h2
            variants={fadeChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl font-bold text-sandy-light/80 mb-2"
          >
            Playground
          </motion.h2>
          <motion.p
            variants={fadeChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-sm text-sandy-light/50 mb-4"
          >
            Drag the icons around — go ahead, play!
          </motion.p>

          <div
            ref={grid2Container}
            className="relative w-full h-[18rem] md:h-[22rem] rounded-2xl overflow-hidden bg-gradient-to-br from-dark-base/30 to-brown-dark/20 border border-sandy-light/5"
          >
            {/* decorative inner blobs */}
            <div
              className="absolute w-48 h-48 rounded-full opacity-10 top-8 left-12"
              style={{ background: "radial-gradient(circle, #C8704A, transparent)", filter: "blur(60px)" }}
            />
            <div
              className="absolute w-40 h-40 rounded-full opacity-10 bottom-8 right-16"
              style={{ background: "radial-gradient(circle, #8B6F47, transparent)", filter: "blur(50px)" }}
            />

            <Card
              style={{ rotate: "12deg", top: "15%", left: "10%" }}
              image="assets/typescript-icon-svgrepo-com.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-8deg", top: "55%", left: "25%" }}
              image="assets/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "30%", left: "50%" }}
              image="assets/js-svgrepo-com.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "60%", left: "65%" }}
              image="assets/nodejs-icon-logo-svgrepo-com.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "5deg", top: "10%", left: "75%" }}
              image="assets/nextjs-icon-svgrepo-com.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "45%", left: "85%" }}
              image="assets/logos/better-auth.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Section 4: Global Presence ── */}
      <motion.div
        className="relative mb-8 md:mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-section max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text side */}
            <motion.div
              className="flex-1 text-center md:text-left"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeChild}
                className="text-2xl md:text-4xl font-bold text-sandy-light/80 mb-3"
              >
                Based in{" "}
                <span className="text-rust">Ethiopia</span>
              </motion.h2>
              <motion.p
                variants={fadeChild}
                className="text-sandy-light/50 text-sm md:text-base leading-relaxed"
              >
                Open to work worldwide. I love collaborating across time zones
                and building for a global audience.
              </motion.p>
            </motion.div>

            {/* Globe side */}
            <div className="relative flex-1 flex items-center justify-center min-h-[280px]">
              <div className="about-glow w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <Globe />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Shimmer Divider ── */}
      <div className="about-shimmer-line max-w-md mx-auto mb-8 md:mb-16" />

      {/* ── Section 5: Connect CTA ── */}
      <motion.div
        className="relative pb-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="about-section max-w-2xl mx-auto text-center">
          <motion.h2
            variants={fadeChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-sandy-light/80 mb-3"
          >
            Let's Build Something{" "}
            <span className="text-rust">Amazing</span>
          </motion.h2>
          <motion.p
            variants={fadeChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sandy-light/50 text-sm md:text-base mb-8"
          >
            Got a wild idea? A side project? Or just want to chat about code?
          </motion.p>
          <motion.div
            variants={fadeChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CopyEmailButton />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
