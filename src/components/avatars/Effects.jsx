import { motion } from "framer-motion";
import { cn } from "./utils";
import { AvatarImage } from "./AvatarBase";

const demoSrc =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";

export const AvatarGlitch = ({ src = demoSrc }) => {
  const glitchAnim = { hover: { x: [0, -2, 2, -1, 1, 0], y: [0, 1, -1, 0] } };
  return (
    <motion.div
      className="relative w-16 h-16 group overflow-hidden rounded-lg bg-black"
      whileHover="hover"
    >
      <motion.div
        variants={glitchAnim}
        transition={{ duration: 0.2 }}
        className="relative z-10 w-full h-full"
      >
        <AvatarImage src={src} className="rounded-lg" />
      </motion.div>
      <motion.div
        variants={glitchAnim}
        transition={{ duration: 0.2, delay: 0.02 }}
        className="absolute inset-0 bg-red-500 mix-blend-screen opacity-0 group-hover:opacity-70 group-hover:translate-x-1 transition-all duration-100 z-0 rounded-lg pointer-events-none"
      >
        <AvatarImage
          src={src}
          className="rounded-lg grayscale brightness-150"
        />
      </motion.div>
      <motion.div
        variants={glitchAnim}
        transition={{ duration: 0.2, delay: 0.04 }}
        className="absolute inset-0 bg-cyan-500 mix-blend-screen opacity-0 group-hover:opacity-70 group-hover:-translate-x-1 transition-all duration-100 z-0 rounded-lg pointer-events-none"
      >
        <AvatarImage
          src={src}
          className="rounded-lg grayscale brightness-150"
        />
      </motion.div>
    </motion.div>
  );
};

export const AvatarRipple = ({ src = demoSrc }) => (
  <div className="relative flex items-center justify-center m-6">
    <span className="absolute inline-flex h-[140%] w-[140%] rounded-full bg-sky-400/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
    <span className="absolute inline-flex h-[110%] w-[110%] rounded-full bg-sky-500/40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-sky-500 bg-white z-10">
      <AvatarImage src={src} className="rounded-full" />
    </div>
  </div>
);

export const AvatarStory = ({ src = demoSrc, hasStory = true }) => (
  <motion.div
    className={cn(
      "p-[3px] rounded-full relative",
      hasStory
        ? "bg-linear-to-tr from-yellow-400 via-orange-500 to-fuchsia-600"
        : "bg-gray-200"
    )}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {hasStory && (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 8, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-linear-to-tr from-yellow-400 via-orange-500 to-fuchsia-600 opacity-80 blur-sm -z-10"
      />
    )}
    <div className="p-[3px] bg-white rounded-full relative z-10">
      <div className="w-14 h-14 rounded-full overflow-hidden">
        <AvatarImage src={src} className="rounded-full" />
      </div>
    </div>
  </motion.div>
);


export const AvatarGlow = ({ src = demoSrc }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white z-10">
      <AvatarImage src={src} />
    </div>
  </div>
);


export const AvatarSepia = ({ src = demoSrc }) => (
  <motion.div 
    className="w-14 h-14 rounded-full overflow-hidden border border-gray-200"
    whileHover={{ scale: 1.1 }}
  >
    <div className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300">
      <AvatarImage src={src} />
    </div>
  </motion.div>
);

export const AvatarZoom = ({ src = demoSrc }) => (
  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer">
    <div className="w-full h-full transition-transform duration-500 hover:scale-150">
      <AvatarImage src={src} />
    </div>
  </div>
);