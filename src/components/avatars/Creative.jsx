import { motion } from "framer-motion";
import { AvatarImage } from "./AvatarBase";

const demoSrc = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix";

export const AvatarBlob = ({ src = demoSrc }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 5 }}
    className="w-16 h-16 overflow-hidden bg-gray-100 shadow-md"
    style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
  >
    <AvatarImage src={src} className="scale-110" />
  </motion.div>
);


export const AvatarStar = ({ src = demoSrc }) => (
  <motion.div
    whileHover={{ rotate: 180, scale: 1.1 }}
    className="w-16 h-16 bg-yellow-400 p-0.5"
    style={{
      clipPath:
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    }}
  >
    <div
      className="w-full h-full bg-white"
      style={{
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      }}
    >
      <AvatarImage src={src} className="scale-125 object-cover" />
    </div>
  </motion.div>
);


export const AvatarBrutalist = ({ src = demoSrc }) => (
  <motion.div
    whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0px 0px #000" }}
    className="w-14 h-14 border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white transition-all"
  >
    <AvatarImage src={src} />
  </motion.div>
);


export const AvatarReflection = ({ src = demoSrc }) => (
  <div className="relative flex flex-col items-center">
    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 z-10 bg-white">
      <AvatarImage src={src} />
    </div>
    {/* Reflection div */}
    <div className="w-14 h-14 rounded-full overflow-hidden absolute top-full transform -scale-y-100 opacity-30 mask-image-linear-gradient">
      <div className="w-full h-full bg-linear-to-t from-white to-transparent absolute inset-0 z-20" />
      <AvatarImage src={src} />
    </div>
  </div>
);


export const AvatarDoubleRing = ({ src = demoSrc }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-16 h-16 rounded-full border border-gray-200 p-1 bg-white"
  >
    <div className="w-full h-full rounded-full border border-gray-200 p-1">
      <div className="w-full h-full rounded-full overflow-hidden">
        <AvatarImage src={src} />
      </div>
    </div>
  </motion.div>
);



export const AvatarCutout = ({ src = demoSrc }) => (
  <motion.div 
    whileHover={{ rotate: 2 }}
    className="w-16 h-16 bg-white overflow-hidden shadow-lg"
    
    style={{ 
        maskImage: "linear-gradient(45deg, #000 85%, transparent 85%)", 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)" 
    }}
  >
    <AvatarImage src={src} />
    <div className="absolute bottom-0 right-0 w-4 h-4 bg-gray-300 opacity-50" /> 
  </motion.div>
);