import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Units() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const touchStartX = useRef(0);

  const unitsData = {
    luxury: [
      {
        id: 1,
        img: "/images/lux1.jpeg",
        size: 1200,
        price: 250,
        floor: "Ground Floor",
        tag: "Flagship Visibility",
        insight:
          "Corner unit positioned at a high-density luxury movement corridor.",
        why:
          "Maximizes brand perception and captures premium high-spend audience.",
      },
      {
        id: 2,
        img: "/images/lux2.jpeg",
        size: 2000,
        price: 300,
        floor: "Level 1",
        tag: "Luxury Cluster",
        insight:
          "Placed among global luxury anchors with consistent premium traffic.",
        why:
          "Strong adjacency effect drives higher conversion and brand lift.",
      },
    ],

    fnb: [
      {
        id: 1,
        img: "/images/fnb1.jpeg",
        size: 800,
        price: 180,
        floor: "Food Court",
        tag: "High Conversion",
        insight: "Fast-moving zone with constant daily demand.",
        why:
          "High turnover model ensures consistent revenue and repeat customers.",
      },
      {
        id: 2,
        img: "/images/fnb2.jpeg",
        size: 1500,
        price: 220,
        floor: "Level 2",
        tag: "Family Zone",
        insight: "Long dwell-time audience with group spending behavior.",
        why:
          "Higher basket size + repeat visits = strong revenue stability.",
      },
    ],

    popup: [
      {
        id: 1,
        img: "/images/pop1.jpeg",
        size: 150,
        price: 5000,
        floor: "Atrium",
        tag: "Impulse Zone",
        insight: "Central high-footfall zone with strong impulse buying.",
        why:
          "Best for rapid product validation and short-term sales bursts.",
      },
      {
        id: 2,
        img: "/images/pop2.jpeg",
        size: 250,
        price: 7000,
        floor: "Entrance",
        tag: "Launch Spot",
        insight: "Maximum visibility at primary entry flow.",
        why:
          "Ideal for brand launches and awareness-driven campaigns.",
      },
    ],
  };

  const units = unitsData[category] || [];
  const active = units[index];

  // ROI Logic
  const multiplier =
    category === "luxury" ? 1.8 : category === "fnb" ? 2.2 : 1.3;

  const revenue =
    category === "popup"
      ? `$${(active.price * 12 * 2).toLocaleString()}`
      : `$${(active.size * active.price * multiplier).toLocaleString()}`;

  //  Keyboard Navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) {
        setIndex((i) => (i + 1) % units.length);
      }
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        setIndex((i) => (i - 1 + units.length) % units.length);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [units.length]);

  //  Swipe Navigation (Mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;

    if (delta > 60) {
      setIndex((i) => (i - 1 + units.length) % units.length);
    } else if (delta < -60) {
      setIndex((i) => (i + 1) % units.length);
    }
  };

  return (
    <div
      className="h-screen w-full bg-black text-white flex overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">

        {/* TOP */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <button
            onClick={() => navigate("/experience/retail")}
            className="text-white/50 hover:text-white"
          >
            ←
          </button>

          <p className="text-xs tracking-[0.4em] text-white/40 uppercase">
            {category}
          </p>
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
              exit: { opacity: 0, y: -40 },
            }}
          >

            {/* HEADLINE */}
            <motion.h1
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              {active.tag}
            </motion.h1>

            {/* INSIGHT */}
            <motion.p
              variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-xl text-white/70 mb-6"
            >
              {active.insight}
            </motion.p>

            {/* WHY */}
            <motion.p
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-white/50 mb-10"
            >
              {active.why}
            </motion.p>

            {/* DATA */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="space-y-3 mb-10"
            >
              <p><span className="text-white/40">Size</span> → {active.size} sq.ft</p>
              <p><span className="text-white/40">Price</span> → ${active.price}</p>
              <p><span className="text-white/40">Floor</span> → {active.floor}</p>
            </motion.div>

            {/* ROI */}
            <motion.div
              variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="mb-10"
            >
              <p className="text-xs text-white/40 mb-2 uppercase">
                Revenue Potential
              </p>

              <h2 className="text-5xl font-bold text-green-400">
                {revenue}
              </h2>

              <p className="text-sm text-white/40 mt-2">
                Payback: 12–18 months
              </p>
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-8 py-3 bg-white text-black"
            >
              Request Unit
            </motion.button>

          </motion.div>
        </AnimatePresence>

        {/* PROGRESS */}
        <p className="text-xs text-white/40 mt-6">
          {index + 1} / {units.length}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden lg:block w-1/2 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.img}
            className="w-full h-full object-cover"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent" />
      </div>

      {/* FLOATING NAV */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <button onClick={() => setIndex((index - 1 + units.length) % units.length)}>↑</button>
        <button onClick={() => setIndex((index + 1) % units.length)}>↓</button>
      </div>
    </div>
  );
}