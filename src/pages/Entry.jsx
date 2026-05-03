import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Entry() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover scale-105"
      >
        <source src="/videos/dubai-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 max-w-5xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          A city within a city.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl"
        >
          Built for scale. Designed for brands.
        </motion.p>

        {/* Info Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm tracking-wider text-gray-400 mb-10"
        >
          Downtown Dubai  80M+ Visitors  Global Audience
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >

          

          {/* button */}
          <button
            onClick={() => navigate("/why")}
            className="px-7 py-3 border border-white/30 
            hover:bg-white hover:text-black transition rounded-sm"
          >
           Why Choose Us
          </button>

        </motion.div>

      </div>
    </motion.div>
  );
}