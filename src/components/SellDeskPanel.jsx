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

  const getCTA = () => {
    if (active === "Retail") return "View Retail Spaces";
    if (active === "Sponsors") return "View Sponsorship Options";
    if (active === "Events") return "View Event Opportunities";
    return "Explore";
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-black text-white">

      {/*  VIDEO SECTION */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative">

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

        <div className="absolute inset-0 " />

        {/*  BACK */}
        <button
          onClick={() => navigate("/why")}
          className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-xs md:text-sm opacity-80 hover:opacity-100"
        >
          <FiArrowLeft /> Back
        </button>
      </div>

      {/*  CONTENT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-10 md:py-0">

        {/* LABEL */}
        <p className="text-xs tracking-widest text-blue-400 mb-4 md:mb-6">
          SELECT PATH
        </p>

        {/* TABS */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-10">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm transition ${
                active === key
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">
              {current.title}
            </h1>

            <p className="text-gray-400 mb-5 md:mb-6 text-sm md:text-base max-w-md">
              {current.desc}
            </p>

            {/* HINTS */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-10">
              {current.hints.map((item, i) => (
                <span
                  key={i}
                  className="text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full bg-white/10 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate(current.route, { replace: true })}
              className="flex items-center gap-2 md:gap-3 px-5 md:px-6 py-2 md:py-3 bg-white text-black rounded-lg text-sm md:text-base"
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