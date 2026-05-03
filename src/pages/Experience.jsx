import SellDeskPanel from "../components/SellDeskPanel";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();

  // 🔥 IMPORTANT: ensure this page is clean entry in history
  useEffect(() => {
    window.history.replaceState(null, "", "/experience");
  }, []);

  return (
    <motion.div
      className="h-screen w-full bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SellDeskPanel />
    </motion.div>
  );
}