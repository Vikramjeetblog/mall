import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Entry from "./pages/Entry";
import Why from "./pages/Why";
import Experience from "./pages/Experience";
import Retail from "./pages/Retail";
import Sponsor from "./pages/Sponsor";
import Event from "./pages/Event";
import Closing from "./pages/Closing";
import Units from "./pages/Units"; // 🔥 ADD THIS

// Animated Routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* Entry */}
        <Route path="/" element={<Entry />} />

        {/* Why Section */}
        <Route path="/why" element={<Why />} />

        {/* Experience Hub */}
        <Route path="/experience" element={<Experience />} />

        {/* Core Modules */}
        <Route path="/experience/retail" element={<Retail />} />
        <Route path="/experience/sponsor" element={<Sponsor />} />
        <Route path="/experience/event" element={<Event />} />

        {/* 🔥 NEW: UNITS (CRITICAL FOR CONVERSION) */}
        <Route path="/units/:category" element={<Units />} />

        {/* Final CTA */}
        <Route path="/closing" element={<Closing />} />

        {/* Optional: 404 fallback */}
        <Route path="*" element={<Entry />} />

      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;