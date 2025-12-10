import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./utils";

const AvatarSkeleton = ({ className }) => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className={cn(
      "w-full h-full bg-gray-200 animate-pulse absolute inset-0 z-20",
      className
    )}
  />
);

export const AvatarImage = ({
  src,
  alt,
  className,
  fallbackSrc = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
}) => {
  const [status, setStatus] = useState("loading"); // loading, loaded, error
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setImgSrc(src || fallbackSrc);
    setStatus("loading");
  }, [src]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <AnimatePresence>
        {status === "loading" && (
          <AvatarSkeleton className="absolute inset-0" />
        )}
      </AnimatePresence>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: status === "loaded" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        src={imgSrc}
        alt={alt || "Avatar"}
        onLoad={() => setStatus("loaded")}
        onError={() => {
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          } else {
            setStatus("error");
          }
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
