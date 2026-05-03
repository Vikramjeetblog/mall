import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Train,
  BarChart3,
  Users,
  Globe,
  Home,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Why() {
  const navigate = useNavigate();

  const slides = [
    {
      title: "Downtown Dubai",
      subtitle:
        "Adjacent to Burj Khalifa & Dubai Fountain. A global tourism anchor with unmatched visibility.",
      stat: "Prime Location",
      icon: MapPin,
      video: "/videos/dubai-map.mp4",
    },
    {
      title: "Seamless Access",
      subtitle:
        "Direct metro link. 15 minutes from airport. Designed for frictionless movement.",
      stat: "Connected Hub",
      icon: Train,
      img: "/images/metro2.jpeg",
    },
    {
      title: "80M+ Visitors",
      subtitle:
        "One of the most visited destinations globally. Massive scale and daily demand.",
      stat: "80M+ Annual",
      icon: BarChart3,
      img: "/images/scale2.jpeg",
    },
    {
      title: "Premium Audience",
      subtitle:
        "High-spending international consumers. Strong conversion across categories.",
      stat: "High Value",
      icon: Users,
      img: "/images/audience.png",
    },
    {
      title: "Global Reach",
      subtitle:
        "Tourism-driven demand with global brand exposure at scale.",
      stat: "Global Impact",
      icon: Globe,
      img: "/images/reach.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const active = slides[index];
  const Icon = active.icon;

  const goPrevious = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrevious();
      if (e.key === "Escape") navigate("/");
      if (e.key === "Enter") navigate("/experience");
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  const splitWords = (text) => text.split(" ");

  return (
    <div className="h-screen w-full bg-black text-white flex flex-row overflow-hidden">
      {/* LEFT SIDE */}
      <div
        className="w-[50%] sm:w-[55%] lg:w-1/2 h-screen flex flex-col justify-center 
        px-4 sm:px-8 lg:px-16 xl:px-20 
        py-8 sm:py-10 lg:py-0 
        bg-gradient-to-br from-black via-zinc-900 to-black relative"
      >
        {/* subtle glow */}
        <div className="absolute w-[260px] sm:w-[360px] lg:w-[400px] h-[260px] sm:h-[360px] lg:h-[400px] bg-white/5 blur-3xl top-20 left-4 sm:left-10 pointer-events-none" />

        {/* TOP CONTROL */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-8 lg:left-16 xl:left-20 z-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-white/20 
            text-[10px] sm:text-xs tracking-wide text-gray-300 hover:bg-white hover:text-black 
            transition rounded-sm"
          >
            <Home size={13} />
            <span className="hidden xs:inline">Start Over</span>
            <span className="xs:hidden">Start</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="relative z-10 max-w-[560px]"
          >
            {/* LABEL */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-blue-400 uppercase mb-3 sm:mb-6"
            >
              Why This Property
            </motion.p>

            {/* TITLE */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6 flex flex-wrap">
              {splitWords(active.title).map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.5 }}
                  className="mr-2 sm:mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* SUBTITLE */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-10 max-w-lg leading-relaxed"
            >
              {active.subtitle}
            </motion.p>

            {/* STAT */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 sm:gap-3 mb-7 sm:mb-12"
            >
              <Icon className="text-yellow-400" size={20} />
              <span className="text-xs sm:text-sm tracking-wide text-gray-300">
                {active.stat}
              </span>
            </motion.div>

            {/* CONTROLS + CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4"
            >
              {/* Compact slide controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={goPrevious}
                  aria-label="Previous slide"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 
                  hover:bg-white hover:text-black transition rounded-full"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="min-w-[64px] sm:min-w-[72px] text-center text-[10px] sm:text-xs tracking-[0.25em] text-gray-500">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </div>

                <button
                  onClick={goNext}
                  aria-label="Next slide"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 
                  hover:bg-white hover:text-black transition rounded-full"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Main CTA */}
              <button
                onClick={() => navigate("/experience")}
                className="w-fit sm:ml-2 lg:ml-4 px-5 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium 
                hover:bg-gray-200 transition rounded-sm text-xs sm:text-sm flex items-center gap-3"
              >
                Explore Opportunities
                <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Small presenter hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="hidden sm:block mt-6 text-xs text-gray-600 tracking-wide"
            >
              Use keyboard arrows to browse. Press Enter to continue.
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT SIDE */}
      {/* RIGHT SIDE */}
<div className="w-[50%] sm:w-[45%] lg:w-1/2 h-screen relative overflow-hidden bg-black flex items-center justify-center p-3 sm:p-0">
  <div className="relative w-full h-[72vh] sm:h-full overflow-hidden rounded-sm sm:rounded-none">
    <AnimatePresence mode="wait">
      {/* VIDEO */}
      {active.video && (
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
          transition={{ duration: 1 }}
        >
          <source src={active.video} type="video/mp4" />
        </motion.video>
      )}

      {/* IMAGE */}
      {active.img && !active.video && (
        <motion.img
          key={active.img}
          src={active.img}
          alt={active.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.06, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
    </AnimatePresence>

    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/25 to-transparent" />
  </div>
</div>
    </div>
  );
}