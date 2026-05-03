import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const data = {
  Retail: {
    title: "Luxury Retail",
    desc: "Open your store inside high-footfall zones.",
    hints: ["Luxury", "Food & Beverage", "Pop-up & Kiosk"],
    video: "/videos/retail.mp4",
    route: "/experience/retail",
  },
  Sponsors: {
    title: "Brand Sponsorships",
    desc: "Own visibility across the destination.",
    hints: ["Title Partner", "Gold Partner", "Activations"],
    video: "/videos/sponsor.mp4",
    route: "/experience/sponsor",
  },
  Events: {
    title: "Events & Activations",
    desc: "Run events & engage live audiences.",
    hints: ["Concerts", "Brand Activations", "Pop-ups"],
    video: "/videos/event.mp4",
    route: "/experience/event",
  },
};

export default function SellDeskPanel() {
  const [active, setActive] = useState("Retail");
  const navigate = useNavigate();
  const current = data[active];

  // 🔥 dynamic CTA text
  const getCTA = () => {
    if (active === "Retail") return "View Retail Spaces";
    if (active === "Sponsors") return "View Sponsorship Options";
    if (active === "Events") return "View Event Opportunities";
    return "Explore";
  };

  return (
    <div className="w-full h-screen flex bg-black text-white overflow-hidden">

      {/* 🎬 LEFT VIDEO */}
      <div className="w-1/2 h-full relative">

        <AnimatePresence mode="wait">
          <motion.video
            key={current.video}
            src={current.video}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 🔙 BACK */}
        <button
          onClick={() => navigate("/why")}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition"
        >
          <FiArrowLeft /> Back
        </button>
      </div>

      {/* 📊 RIGHT PANEL */}
      <div className="w-1/2 h-full flex flex-col justify-center px-16">

        {/* LABEL */}
        <p className="text-xs tracking-widest text-blue-400 mb-6">
          SELECT PATH
        </p>

        {/* 🔥 TABS */}
        <div className="flex gap-3 mb-10">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                active === key
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* 🔥 CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              {current.title}
            </h1>

            <p className="text-gray-400 mb-6 max-w-md">
              {current.desc}
            </p>

            {/* 🔥 HINT CHIPS */}
            <div className="flex flex-wrap gap-2 mb-10">
              {current.hints.map((item, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-white/10 text-gray-300
                    border border-white/10
                    hover:bg-white/20 hover:text-white
                    transition
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* 🔥 CTA */}
            <button
              onClick={() => navigate(current.route, { replace: true })}
              className="
                flex items-center gap-3
                px-6 py-3 bg-white text-black rounded-lg
                hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
                hover:-translate-y-1
                active:scale-95
                transition-all duration-300
              "
            >
              {getCTA()}
              <FiArrowRight />
            </button>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}