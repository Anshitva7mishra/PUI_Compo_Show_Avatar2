import { motion } from "framer-motion";
import { Edit2, Upload, X, Check } from "lucide-react";
import { cn } from "./utils";
import { AvatarImage } from "./AvatarBase";


const demoSrc = "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack";
const img2 = "https://api.dicebear.com/7.x/avataaars/svg?seed=Jude";
const img3 = "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus";

export const AvatarCard = ({
  src = demoSrc,
  name = "Jane Doe",
  role = "Developer",
}) => (
  <motion.div className="flex items-center gap-3 bg-white pl-2 pr-5 py-2 rounded-full shadow-sm border border-gray-100 w-fit cursor-default hover:shadow-md transition-shadow">
    <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-gray-100 shrink-0">
      <AvatarImage src={src} className="rounded-full" />
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-bold text-gray-800">{name}</span>
      <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">
        {role}
      </span>
    </div>
  </motion.div>
);


export const AvatarGroup = ({ images = [demoSrc, img2, img3] }) => {
  const displayImages = images.slice(0, 3);

  return (
    <div className="flex items-center pl-3">
      {displayImages.map((img, i) => (
        <motion.div
          key={i}
          className="relative w-10 h-10 -ml-3 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white"
          style={{ zIndex: i }}
          whileHover={{ scale: 1.15, zIndex: 10, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <AvatarImage src={img} className="rounded-full" />
        </motion.div>
      ))}
      <div className="relative w-10 h-10 -ml-3 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-500 shadow-sm z-10">
        +5
      </div>
    </div>
  );
};

export const AvatarProfessional = ({ src = demoSrc }) => (
  <div className="group relative w-16 h-16 rounded-full cursor-pointer">
    <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-blue-500 transition-all duration-300">
      <AvatarImage
        src={src}
        className="rounded-full transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
      <Edit2 className="text-white w-5 h-5 drop-shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-200" />
    </div>
  </div>
);

export const AvatarUpload = ({ src }) => (
  <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 hover:border-gray-500 hover:bg-gray-50 flex items-center justify-center cursor-pointer transition-colors group relative overflow-hidden">
    {src ? (
      <AvatarImage
        src={src}
        className="opacity-50 group-hover:opacity-20 rounded-full"
      />
    ) : null}
    <div className="absolute inset-0 flex items-center justify-center">
      <Upload size={18} className="text-gray-400 group-hover:text-gray-600" />
    </div>
  </div>
);

export const AvatarDelete = ({ src = demoSrc }) => (
  <div className="relative inline-block group cursor-pointer">
    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 group-hover:border-red-200 transition-colors">
      <AvatarImage src={src} className="rounded-full" />
    </div>
    <div className="absolute -top-1 -right-1 bg-gray-100 group-hover:bg-red-500 text-gray-400 group-hover:text-white p-1 rounded-full border-2 border-white transition-colors shadow-sm">
      <X size={10} />
    </div>
  </div>
);

export const AvatarSelect = ({ src = demoSrc, selected = false }) => (
  <motion.div
    className={cn(
      "relative p-1 rounded-full border-2 transition-all cursor-pointer",
      selected ? "border-blue-500" : "border-transparent"
    )}
    whileTap={{ scale: 0.95 }}
  >
    <div className="w-14 h-14 rounded-full overflow-hidden">
      <AvatarImage src={src} className="rounded-full" />
    </div>
    {selected && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full border-2 border-white"
      >
        <Check size={10} strokeWidth={4} />
      </motion.div>
    )}
  </motion.div>
);
