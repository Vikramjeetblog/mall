import { motion } from "framer-motion";

export default function Closing() {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/final.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
        >
          Your brand belongs here.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl"
        >
          Join a destination built for scale, visibility, and global impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition">
            Start Leasing
          </button>

          <button className="px-6 py-3 border border-white/40 hover:bg-white hover:text-black transition">
            Explore Partnerships
          </button>

          <button className="px-6 py-3 border border-white/40 hover:bg-white hover:text-black transition">
            Book an Event
          </button>
        </motion.div>

      </div>
    </div>
  );
}