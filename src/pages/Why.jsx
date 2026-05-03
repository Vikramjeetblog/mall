import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  const containerRef = useRef();

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

  // 🔥 SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // map scroll → slide index
  const progressToIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, slides.length - 1]
  );

  useEffect(() => {
    const unsubscribe = progressToIndex.on("change", (latest) => {
      const newIndex = Math.round(latest);
      setIndex(newIndex);
    });
    return () => unsubscribe();
  }, []);

  const goPrevious = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[200vh] bg-black text-white"
    >
      {/* 🔥 STICKY SECTION */}
      <div className="sticky top-0 w-full h-screen flex flex-col lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-10 relative">

          {/* BACK */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 flex items-center gap-2 text-xs border border-white/20 px-3 py-2"
          >
            <Home size={14} /> Start
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-lg"
            >
              <p className="text-xs text-blue-400 mb-4 uppercase tracking-widest">
                Why This Property
              </p>

              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {active.title}
              </h1>

              <p className="text-gray-400 mb-6">
                {active.subtitle}
              </p>

              <div className="flex items-center gap-2 mb-8">
                <Icon className="text-yellow-400" />
                <span className="text-sm">{active.stat}</span>
              </div>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={goPrevious}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={goNext}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center"
                >
                  <ChevronRight />
                </button>

                <button
                  onClick={() => navigate("/experience")}
                  className="px-6 py-3 bg-white text-black flex items-center gap-2"
                >
                  Explore <ArrowRight />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT MEDIA */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-full relative overflow-hidden">

          <AnimatePresence mode="wait">
            {active.video && (
              <motion.video
                key={active.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <source src={active.video} type="video/mp4" />
              </motion.video>
            )}

            {active.img && !active.video && (
              <motion.img
                key={active.img}
                src={active.img}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
        </div>
      </div>

      {/* 🔥 SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed bottom-0 left-0 h-[3px] bg-white origin-left w-full"
      />
    </div>
  );
}