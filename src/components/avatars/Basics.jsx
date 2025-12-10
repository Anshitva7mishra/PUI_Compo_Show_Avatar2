import { motion } from "framer-motion";
import { cn } from "./utils";
import { AvatarImage } from "./AvatarBase";

const demoSrc =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";

export const AvatarClassic = ({ src = demoSrc, size = "md" }) => {
  const sizes = { sm: "w-10 h-10", md: "w-14 h-14", lg: "w-20 h-20" };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full p-0.5 border border-gray-200 bg-white shadow-sm",
        sizes[size]
      )}
    >
      <div className="w-full h-full rounded-full overflow-hidden relative">
        <AvatarImage src={src} className="rounded-full" />
      </div>
    </motion.div>
  );
};

export const AvatarSquircle = ({ src = demoSrc }) => (
  <motion.div
    whileHover={{ scale: 1.02, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    className="w-16 h-16 rounded-[18px] overflow-hidden shadow-md ring-4 ring-offset-2 ring-indigo-100 group relative bg-white"
  >
    <AvatarImage src={src} className="rounded-[18px]" />
    <div className="absolute inset-0 rounded-[18px] shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] z-30 pointer-events-none"></div>
  </motion.div>
);

export const AvatarNeumorphic = ({ src = demoSrc }) => (
  <div className="w-20 h-20 rounded-full bg-[#E0E5EC] p-3 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.8)]">
    <div className="w-full h-full rounded-full overflow-hidden shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]">
      <AvatarImage src={src} className="rounded-full" />
    </div>
  </div>
);

export const AvatarSquare = ({ src = demoSrc, size = "md" }) => {
  const sizes = { sm: "w-10 h-10", md: "w-14 h-14", lg: "w-20 h-20" };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn("rounded-xl overflow-hidden shadow-sm", sizes[size])}
    >
      <AvatarImage src={src} />
    </motion.div>
  );
};

export const AvatarPebble = ({ src = demoSrc }) => (
  <motion.div
    whileHover={{ rotate: -5, scale: 1.05 }}
    className="w-16 h-16 bg-white p-1 shadow-md overflow-hidden"
    style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
  >
    <div
      className="w-full h-full overflow-hidden"
      style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
    >
      <AvatarImage src={src} />
    </div>
  </motion.div>
);

export const AvatarOffset = ({ src = demoSrc }) => (
  <div className="relative w-14 h-14">
    <div className="absolute inset-0 bg-gray-900 rounded-full translate-x-1 translate-y-1" />
    <div className="relative w-full h-full rounded-full border-2 border-gray-900 overflow-hidden bg-white">
      <AvatarImage src={src} />
    </div>
  </div>
);
