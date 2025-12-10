import { motion } from "framer-motion";
import { AvatarImage } from "./AvatarBase";

const demoSrc =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";

export const AvatarHexagon = ({ src = demoSrc }) => (
  <motion.div
    whileHover={{ rotate: 180, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 150, damping: 15 }}
    className="w-16 h-16 bg-white filter drop-shadow-md relative"
    style={{
      clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
    }}
  >
    <AvatarImage
      src={src}
      className="w-full h-full object-cover scale-[1.02]"
    />
  </motion.div>
);

export const AvatarDiamond = ({ src = demoSrc }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 45 }}
    className="w-14 h-14 overflow-hidden transform rotate-45 border-[3px] border-gray-800 rounded-xl shadow-xl m-4 bg-white"
  >
    <div className="w-[145%] h-[145%] transform -rotate-45 -translate-y-5 -translate-x-5 relative">
      <AvatarImage src={src} />
    </div>
  </motion.div>
);

export const AvatarGradient = ({ src = demoSrc }) => (
  <div className="relative w-16 h-16 group">
    <div className="absolute -inset-1 bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
    <div className="relative w-16 h-16 p-[3px] rounded-full bg-linear-to-tr from-pink-500 via-purple-500 to-blue-500">
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
        <AvatarImage src={src} className="rounded-full" />
      </div>
    </div>
  </div>
);


export const AvatarTriangle = ({ src = demoSrc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="w-16 h-16 bg-white drop-shadow-md"
    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
  >
    <div className="w-full h-full scale-125 translate-y-2">
       <AvatarImage src={src} />
    </div>
  </motion.div>
);


export const AvatarLeaf = ({ src = demoSrc }) => (
  <motion.div 
    whileHover={{ scale: 1.05, rotate: -10 }}
    className="w-14 h-14 overflow-hidden shadow-md bg-white border-2 border-white"
    style={{ borderRadius: "0px 24px 0px 24px" }}
  >
    <AvatarImage src={src} />
  </motion.div>
);


export const AvatarPentagon = ({ src = demoSrc }) => (
  <motion.div 
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.5 }}
    className="w-16 h-16 bg-white shadow-sm"
    style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
  >
    <AvatarImage src={src} className="scale-110" />
  </motion.div>
);