import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { motion } from "framer-motion";
 

export const About = () => {
  const grid2Container = useRef();
  return (
    <section className="" id="about">

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
 
<div className="game-card grid-1">
  <motion.div
    className="z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-2xl md:text-3xl font-semibold game-text-primary mb-2">
      Hi, I'm <span className="text-game-rust">Ruhama Bekele</span>
    </h1>

    <p className="text-sm md:text-base text-game-dark-olive/80 leading-relaxed">
      In this digital odyssey, I wander through lines of code, 
      turning ideas into experiences,  
      and crafting smooth journeys on the web. Discovering new adventures by the day. :)
    </p>


    <div className="flex items-center gap-3 mt-6">
      <motion.div
        className="w-2 h-2 rounded-full bg-game-rust animate-pulse"
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <span className="text-xs uppercase tracking-wider text-game-dark-olive/60">
        Currently exploring new frontiers of <span className="text-game-rust font-bold">Tanstack Start</span>
      </span>
    </div>
  </motion.div>
</div>

        {/* Grid 2 */}
        <div className="game-card-dark grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-xl text-game-cream/70">
               Drag the icons
            </p>

            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/typescript-icon-svgrepo-com.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "35%" }}
              image="assets/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "50%", left: "10%" }}
              image="assets/js-svgrepo-com.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "15%", left: "60%" }}
              image="assets/nodejs-icon-logo-svgrepo-com.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/nextjs-icon-svgrepo-com.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "25%", left: "90%" }}
              image="assets/logos/better-auth.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="game-card grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext game-text-primary">Time Zone</p>
            <p className="subtext text-game-dark-olive/70">
              I'm based in Ethiopia, and open to  work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="game-panel grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext text-game-dark-olive">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="game-card grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext game-text-primary">Tech Stack</p>
            <p className="subtext text-game-dark-olive/70">
             I use modern tech to build scalable software.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

