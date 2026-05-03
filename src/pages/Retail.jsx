import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Gem,
  Utensils,
  Store,
  Ruler,
  CalendarDays,
  Handshake,
  Users,
  BadgeCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Retail() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("luxury");

  const categoryData = {
    luxury: {
      video: "/videos/luxury.mp4",
      title: "Luxury Retail",
      subtitle: "Premium positioning. Global brand visibility.",
      size: "800 – 3000 sq.ft",
      lease: "3–5 years",
      model: "Fixed + Revenue Share",
      footfall: "High-intent global tourists",
      brands: "Luxury, Fashion, Jewelry",
      icon: Gem,
    },
    fnb: {
      video: "/videos/Dining.mp4",
      title: "Food & Beverage",
      subtitle: "High dwell time. Repeat consumption.",
      size: "500 – 2000 sq.ft",
      lease: "2–4 years",
      model: "Revenue share dominant",
      footfall: "Daily + evening peak traffic",
      brands: "Cafes, Restaurants, Concepts",
      icon: Utensils,
    },
    popup: {
      video: "/videos/attraction.mp4",
      title: "Pop-up & Kiosk",
      subtitle: "Flexible formats. Fast entry.",
      size: "100 – 400 sq.ft",
      lease: "1–6 months",
      model: "Short-term fixed",
      footfall: "Impulse buyers",
      brands: "D2C, Experiential, Launches",
      icon: Store,
    },
  };

  const active = categoryData[category];
  const ActiveIcon = active.icon;

  const metrics = [
    {
      label: "Shop Size",
      value: active.size,
      icon: Ruler,
    },
    {
      label: "Lease Term",
      value: active.lease,
      icon: CalendarDays,
    },
    {
      label: "Model",
      value: active.model,
      icon: Handshake,
    },
    {
      label: "Footfall",
      value: active.footfall,
      icon: Users,
    },
    {
      label: "Best Fit",
      value: active.brands,
      icon: BadgeCheck,
      wide: true,
    },
  ];

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* BACK TO EXPERIENCE */}
      <button
        onClick={() => navigate("/experience")}
        className="absolute top-6 left-6 sm:top-10 sm:left-10 z-30 flex items-center gap-2 
        text-white/60 hover:text-white transition text-xs sm:text-sm tracking-wide"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="flex h-full w-full">
        {/* VIDEO SIDE */}
        <div className="w-[48%] lg:w-1/2 h-screen relative overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.video
              key={active.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              initial={{ scale: 1.12, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.06, opacity: 0 }}
              transition={{ duration: 0.9 }}
            >
              <source src={active.video} type="video/mp4" />
            </motion.video>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60" />
        </div>

        {/* CONTENT SIDE */}
        <div
          className="w-[52%] lg:w-1/2 h-screen relative flex flex-col justify-center 
          px-5 sm:px-10 lg:px-16 xl:px-20 bg-gradient-to-br from-black via-zinc-950 to-black"
        >
          {/* subtle glow */}
          <div className="absolute w-[320px] h-[320px] bg-white/5 blur-3xl top-24 right-10 pointer-events-none" />

          <motion.div
            key={category}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10"
          >
            {/* LABEL */}
            <p className="text-[10px] sm:text-xs tracking-[0.3em] text-blue-400 uppercase mb-4 sm:mb-6">
              Leasing Opportunities
            </p>

            {/* CATEGORY TABS */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
              {Object.keys(categoryData).map((key) => {
                const ItemIcon = categoryData[key].icon;
                const isActive = key === category;

                return (
                  <button
                    key={key}
                    onClick={() => setCategory(key)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 border transition rounded-sm 
                    text-[10px] sm:text-xs tracking-wide
                    ${
                      isActive
                        ? "bg-white text-black border-white"
                        : "border-white/20 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <ItemIcon size={14} />
                    {categoryData[key].title}
                  </button>
                );
              })}
            </div>

            {/* TITLE */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <ActiveIcon className="text-yellow-400" size={24} />

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {active.title}
              </h1>
            </div>

            {/* SUBTITLE */}
            <p className="text-xs sm:text-base lg:text-lg text-gray-400 max-w-xl mb-8 sm:mb-10 leading-relaxed">
              {active.subtitle}
            </p>

            {/* DATA GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
              {metrics.map((item) => {
                const MetricIcon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`${item.wide ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MetricIcon size={15} className="text-white/35" />
                      <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider">
                        {item.label}
                      </p>
                    </div>

                    <p className="text-sm sm:text-lg text-white">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => navigate(`/units/${category}`)}
                className="px-5 sm:px-7 py-3 bg-white text-black font-medium 
                hover:bg-gray-200 transition rounded-sm text-xs sm:text-sm flex items-center gap-3"
              >
                View Units
                <ArrowRight size={16} />
              </button>

              <button
                className="px-5 sm:px-7 py-3 border border-white/30 text-white/80 
                hover:bg-white hover:text-black transition rounded-sm text-xs sm:text-sm"
              >
                Contact Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}