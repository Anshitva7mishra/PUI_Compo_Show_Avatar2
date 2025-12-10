import React from "react";
import {
  Package,
  Layers,
  Zap,
  Hexagon,
  Wand2,
  Activity,
  MousePointer2,
} from "lucide-react";
import {
  AvatarClassic,
  AvatarSquircle,
  AvatarNeumorphic,
  AvatarSquare,
  AvatarPebble,
  AvatarOffset,
  AvatarStatus,
  AvatarVerified,
  AvatarBadge,
  AvatarIdle,
  AvatarDevice,
  AvatarAway,
  AvatarHexagon,
  AvatarDiamond,
  AvatarTriangle,
  AvatarLeaf,
  AvatarPentagon,
  AvatarStar,
  AvatarBlob,
  AvatarBrutalist,
  AvatarDoubleRing,
  AvatarReflection,
  AvatarCutout,
  AvatarGradient,
  AvatarGlitch,
  AvatarRipple,
  AvatarStory,
  AvatarGlow,
  AvatarSepia,
  AvatarZoom,
  AvatarNotification,
  AvatarTyping,
  AvatarTooltip,
  AvatarDashed,
  AvatarReveal,
  AvatarProgress,
  AvatarCard,
  AvatarGroup,
  AvatarUpload,
  AvatarDelete,
  AvatarSelect,
} from "./components/avatars";



const SectionCard = ({ label, children }) => (
  <div className="group flex flex-col items-center gap-4">
    <div className="relative flex items-center justify-center w-32 h-32 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">{children}</div>
    </div>
    <span className="text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors uppercase tracking-wide">
      {label}
    </span>
  </div>
);

const CategoryHeader = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 mb-8 mt-16 border-b border-slate-100 pb-6">
    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
      <Icon size={24} />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      <p className="text-slate-500 mt-1">{description}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-100">
      <div
        className="fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mt-6 mb-6">
            Avatar{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Collection
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
            A complete set of 25+ professional, animated, and copy-paste ready
            avatar components for React. Built with Framer Motion and Tailwind
            CSS.
          </p>
        </div>

        {/* 1. Essentials */}
        <CategoryHeader
          icon={Package}
          title="Essentials"
          description="Standard shapes and reliable basics for any application."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <SectionCard label="Classic">
            <AvatarClassic />
          </SectionCard>
          <SectionCard label="Squircle">
            <AvatarSquircle />
          </SectionCard>
          <SectionCard label="Neumorphic">
            <AvatarNeumorphic />
          </SectionCard>
          <SectionCard label="Soft Square">
            <AvatarSquare />
          </SectionCard>
          <SectionCard label="Pebble">
            <AvatarPebble />
          </SectionCard>
          <SectionCard label="Offset Pop">
            <AvatarOffset />
          </SectionCard>
        </div>

        {/* 2. Status */}
        <CategoryHeader
          icon={Activity}
          title="Status Indicators"
          description="Communicate user availability and device state."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <SectionCard label="Online">
            <AvatarStatus status="online" />
          </SectionCard>
          <SectionCard label="Verified">
            <AvatarVerified />
          </SectionCard>
          <SectionCard label="Badge">
            <AvatarBadge />
          </SectionCard>
          <SectionCard label="Idle">
            <AvatarIdle />
          </SectionCard>
          <SectionCard label="Mobile">
            <AvatarDevice />
          </SectionCard>
          <SectionCard label="Away">
            <AvatarAway />
          </SectionCard>
        </div>

        {/* 3. Geometric */}
        <CategoryHeader
          icon={Hexagon}
          title="Geometric Shapes"
          description="Unique polygons and organic clip-paths."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <SectionCard label="Hexagon">
            <AvatarHexagon />
          </SectionCard>
          <SectionCard label="Diamond">
            <AvatarDiamond />
          </SectionCard>
          <SectionCard label="Triangle">
            <AvatarTriangle />
          </SectionCard>
          <SectionCard label="Leaf">
            <AvatarLeaf />
          </SectionCard>
          <SectionCard label="Pentagon">
            <AvatarPentagon />
          </SectionCard>
          <SectionCard label="Star">
            <AvatarStar />
          </SectionCard>
        </div>

        {/* 4. Creative */}
        <CategoryHeader
          icon={Wand2}
          title="Creative Styles"
          description="Artistic borders, reflections, and brutalist designs."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <SectionCard label="Liquid Blob">
            <AvatarBlob />
          </SectionCard>
          <SectionCard label="Brutalist">
            <AvatarBrutalist />
          </SectionCard>
          <SectionCard label="Double Ring">
            <AvatarDoubleRing />
          </SectionCard>
          <SectionCard label="Reflection">
            <AvatarReflection />
          </SectionCard>
          <SectionCard label="Paper Cut">
            <AvatarCutout />
          </SectionCard>
          <SectionCard label="Gradient">
            <AvatarGradient />
          </SectionCard>
        </div>

        {/* 5. Effects */}
        <CategoryHeader
          icon={Zap}
          title="Effects & Motion"
          description="Animated interactions and hover states."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <SectionCard label="Glitch">
            <AvatarGlitch />
          </SectionCard>
          <SectionCard label="Ripple">
            <AvatarRipple />
          </SectionCard>
          <SectionCard label="Story Ring">
            <AvatarStory />
          </SectionCard>
          <SectionCard label="Outer Glow">
            <AvatarGlow />
          </SectionCard>
          <SectionCard label="Sepia">
            <AvatarSepia />
          </SectionCard>
          <SectionCard label="Zoom">
            <AvatarZoom />
          </SectionCard>
        </div>

        {/* 6. Functional */}
        <CategoryHeader
          icon={Layers}
          title="Functional UI"
          description="Avatars that convey data or perform actions."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <SectionCard label="Notification">
            <AvatarNotification />
          </SectionCard>
          <SectionCard label="Typing">
            <AvatarTyping />
          </SectionCard>
          <SectionCard label="Tooltip">
            <AvatarTooltip />
          </SectionCard>
          <SectionCard label="Dashed">
            <AvatarDashed />
          </SectionCard>
          <SectionCard label="Reveal">
            <AvatarReveal />
          </SectionCard>
          <SectionCard label="Progress">
            <AvatarProgress progress={70} />
          </SectionCard>
        </div>

        {/* 7. Interactive */}
        <CategoryHeader
          icon={MousePointer2}
          title="Interactive"
          description="Complex components with click and hover logic."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <AvatarUpload />
              <AvatarDelete />
              <AvatarSelect selected={true} />
            </div>
            <span className="text-xs font-semibold text-slate-400 uppercase">
              Actions
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center gap-4">
            <AvatarGroup />
            <span className="text-xs font-semibold text-slate-400 uppercase">
              Stacked Group
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center gap-4">
            <AvatarCard name="Pro Member" role="Full Access" />
            <span className="text-xs font-semibold text-slate-400 uppercase">
              User Card
            </span>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-10 text-center text-slate-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} PUI Avatar Library. Built for React.
          </p>
        </footer>
      </div>
    </div>
  );
}
