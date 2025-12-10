import { motion } from "framer-motion";
import { AvatarImage } from "./AvatarBase";
import { Twitter, Github } from "lucide-react";

const demoSrc = "https://api.dicebear.com/7.x/avataaars/svg?seed=Annie";


export const AvatarNotification = ({ src = demoSrc, count = 3 }) => (
  <div className="relative inline-block m-2">
    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100 shadow-sm">
      <AvatarImage src={src} />
    </div>
    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 min-w-5 px-1 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
      {count > 9 ? "9+" : count}
    </div>
  </div>
);

export const AvatarTyping = ({ src = demoSrc }) => (
  <div className="relative inline-block">
    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100">
      <AvatarImage src={src} />
    </div>
    <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm border border-gray-100 flex items-center gap-0.5 px-1.5 py-1">
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
        className="w-1 h-1 bg-gray-500 rounded-full"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
        className="w-1 h-1 bg-gray-500 rounded-full"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
        className="w-1 h-1 bg-gray-500 rounded-full"
      />
    </div>
  </div>
);


export const AvatarTooltip = ({ src = demoSrc, name = "Sarah" }) => (
  <div className="group relative inline-block">
    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 cursor-help">
      <AvatarImage src={src} />
    </div>
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
      {name}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
    </div>
  </div>
);


export const AvatarDashed = ({ src = demoSrc }) => (
  <div className="p-1 rounded-full border-2 border-dashed border-gray-300">
    <div className="w-12 h-12 rounded-full overflow-hidden opacity-70 grayscale">
      <AvatarImage src={src} />
    </div>
  </div>
);


export const AvatarReveal = ({ src = demoSrc }) => (
  <motion.div
    className="w-16 h-16 rounded-full overflow-hidden relative group bg-gray-900 cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    <motion.div className="w-full h-full" whileHover={{ opacity: 0.3 }}>
      <AvatarImage src={src} />
    </motion.div>

    <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="p-1 bg-white rounded-full hover:bg-blue-100">
        <Twitter size={12} className="text-blue-500" />
      </div>
      <div className="p-1 bg-white rounded-full hover:bg-gray-100">
        <Github size={12} className="text-gray-900" />
      </div>
    </div>
  </motion.div>
);


export const AvatarProgress = ({ src = demoSrc, progress = 75 }) => {
  const radius = 26; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
       <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r={radius} stroke="#e2e8f0" strokeWidth="3" fill="none" />
          <circle 
            cx="30" cy="30" r={radius} 
            stroke="#3b82f6" strokeWidth="3" fill="none" 
            strokeDasharray={circumference} 
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
       </svg>
       <div className="w-11 h-11 rounded-full overflow-hidden">
          <AvatarImage src={src} />
       </div>
    </div>
  );
};