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
 
<div className="relative flex flex-col justify-center p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg grid-1">
  <motion.div
    className="z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
      Hi, I’m <span className="text-amber-400">Ruhama Bekele</span>
    </h1>

    <p className="text-sm md:text-base text-white/70 leading-relaxed">
      In this digital odyssey, I wander through lines of code, 
      turning ideas into experiences,  
      and crafting smooth journeys on the web. Discovering new adventures by the day. :)
    </p>


    <div className="flex items-center gap-3 mt-6">
      <motion.div
        className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <span className="text-xs uppercase tracking-wider text-white/50">
        Currently exploring new frontiers of <span className="text-amber-300">Tanstack Start</span>
      </span>
    </div>
  </motion.div>

  <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-amber-500/10" />
</div>


        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-xl text-white/50">
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
        <div className="grid-default-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Ethiopia, and open to  work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-black-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
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

