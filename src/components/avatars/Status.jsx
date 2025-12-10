import { motion } from "framer-motion";
import { ShieldCheck, Moon, Smartphone, Clock, Sparkles } from "lucide-react";
import { cn } from "./utils";
import { AvatarImage } from "./AvatarBase";

const demoSrc =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";

export const AvatarStatus = ({ src = demoSrc, status = "online" }) => {
  const colors = {
    online: "bg-emerald-500",
    busy: "bg-rose-500",
    away: "bg-amber-500",
    offline: "bg-gray-400",
  };

  return (
    <div className="relative inline-block p-1">
      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-100">
        <AvatarImage src={src} className="rounded-full" />
      </div>
      <span className="absolute bottom-1 right-1 flex h-4 w-4">
        {status === "online" && (
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              colors[status]
            )}
          ></span>
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-4 w-4 border-2 border-white",
            colors[status]
          )}
        ></span>
      </span>
    </div>
  );
};

export const AvatarVerified = ({ src = demoSrc }) => (
  <div className="relative inline-block">
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-50 shadow-md"
    >
      <AvatarImage src={src} className="rounded-full" />
    </motion.div>
    <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 border-[3px] border-white shadow-sm flex items-center justify-center">
      <ShieldCheck size={14} strokeWidth={3} />
    </div>
  </div>
);

export const AvatarBadge = ({ src = demoSrc }) => (
  <div className="relative inline-block m-2">
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
      <AvatarImage src={src} className="rounded-full" />
    </div>
    <motion.div
      animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="absolute -top-3 -right-3 bg-linear-to-tr from-amber-400 to-orange-500 text-white p-1.5 rounded-full shadow-md border-2 border-white z-30"
    >
      <Sparkles size={14} fill="currentColor" stroke="none" />
    </motion.div>
  </div>
);

export const AvatarIdle = ({ src = demoSrc }) => (
  <div className="relative inline-block">
    <div className="w-14 h-14 rounded-full overflow-hidden grayscale contrast-125">
      <AvatarImage src={src} />
    </div>
    <div className="absolute bottom-0 right-0 bg-indigo-900 text-white p-1 rounded-full border-2 border-white flex items-center justify-center">
      <Moon size={10} fill="currentColor" />
    </div>
  </div>
);

export const AvatarDevice = ({ src = demoSrc }) => (
  <div className="relative inline-block">
    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100">
      <AvatarImage src={src} />
    </div>
    <div className="absolute -bottom-1 -right-1 bg-white text-gray-600 p-1 rounded-full shadow-sm border border-gray-100">
      <Smartphone size={12} />
    </div>
  </div>
);


export const AvatarAway = ({ src = demoSrc, time = "5m" }) => (
  <div className="relative inline-block">
    <div className="w-14 h-14 rounded-full overflow-hidden opacity-80">
      <AvatarImage src={src} />
    </div>
    <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-orange-100 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white shadow-sm flex items-center gap-1">
      <Clock size={8} /> {time}
    </div>
  </div>
);