import { motion } from "framer-motion";

export default function DataOverlay({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl text-white"
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-sm text-gray-300">{subtitle}</p>
    </motion.div>
  );
}