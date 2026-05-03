import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("concerts");
  const [mode, setMode] = useState("overview");

  const data = {
    concerts: {
      video: "/videos/concert.mp4",
      image: "/images/concert.jpeg",
      title: "Concerts & Live Shows",
      subtitle: "Mass audience. High engagement.",
      capabilities: [
        "50,000+ capacity",
        "Multi-zone setup",
        "Indoor + outdoor",
      ],
      platform: [
        "Live concerts",
        "Festival events",
        "Performing arts",
      ],
      details: {
        location: "Central Atrium",
        setup: "Stage + lighting",
        audience: "Mass youth",
        outcome: "Revenue + sponsors",
      },
      highlights: [
        "20,000+ festival",
        "30K DJ Night",
      ],
    },

    brands: {
      video: "/videos/brand.mp4",
      image: "/images/brand.jpeg",
      title: "Brand Activations",
      subtitle: "Direct customer interaction.",
      capabilities: [
        "High engagement",
        "Flexible layouts",
        "Prime positioning",
      ],
      platform: [
        "Product launches",
        "Experiential",
        "Pop-ups",
      ],
      details: {
        location: "Main Walkway",
        setup: "Booths + demo",
        audience: "Shoppers",
        outcome: "Conversions",
      },
      highlights: [
        "8K interactions",
        "High conversion launch",
      ],
    },

    celebrity: {
      video: "/videos/event.mp4",
      image: "/images/celebrity.jpeg",
      title: "Celebrity Appearances",
      subtitle: "PR and attention at scale.",
      capabilities: [
        "Crowd control",
        "Media infra",
        "High visibility",
      ],
      platform: [
        "Celebrity events",
        "Influencers",
        "PR launches",
      ],
      details: {
        location: "Grand Atrium",
        setup: "Stage + media",
        audience: "Fans",
        outcome: "Viral reach",
      },
      highlights: [
        "Viral actor visit",
        "3M+ reach event",
      ],
    },
  };

  const active = data[category];

  return (
    <div className="h-screen w-full bg-black text-white flex overflow-hidden">

      {/* LEFT */}
      <div className="w-1/2 relative">

       <button
  onClick={() => {
    if (mode === "scenario") {
      setMode("overview"); // go back inside page
    } else {
      navigate("/experience"); // leave page
    }
  }}
  className="absolute top-6 left-6 z-20 flex items-center gap-2 text-sm text-white/80 hover:text-white"
>
  <ArrowLeft size={16} />
  Back
</button>

        {mode === "overview" ? (
  <motion.video
    key={active.video}   
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src={active.video} type="video/mp4" />
  </motion.video>
) : (
  <img src={active.image} className="w-full h-full object-cover" />
)}

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex flex-col justify-between p-6">

        {mode === "overview" ? (
          <>
            {/* TOP CONTENT */}
            <div>

              {/* CATEGORY */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {Object.keys(data).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCategory(key);
                      setMode("overview");
                    }}
                    className={`px-3 py-1 text-xs border ${
                      category === key
                        ? "bg-white text-black"
                        : "border-white/20 text-white/70"
                    }`}
                  >
                    {data[key].title}
                  </button>
                ))}
              </div>

              {/* TITLE */}
              <h1 className="text-2xl font-bold">{active.title}</h1>
              <p className="text-green-400 text-xs mt-1">
                High-impact event platform
              </p>
              <p className="text-white/60 text-sm mt-2 mb-4">
                {active.subtitle}
              </p>

              {/* GRID */}
              <div className="grid grid-cols-2 gap-4 text-xs">

                <div>
                  <p className="text-white/40 mb-1">Capabilities</p>
                  {active.capabilities.map((item, i) => (
                    <p key={i}>• {item}</p>
                  ))}
                </div>

                <div>
                  <p className="text-white/40 mb-1">Platform</p>
                  {active.platform.map((item, i) => (
                    <p key={i}>• {item}</p>
                  ))}
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-2 mt-2">
                  <p><span className="text-white/40">Loc:</span> {active.details.location}</p>
                  <p><span className="text-white/40">Setup:</span> {active.details.setup}</p>
                  <p><span className="text-white/40">Audience:</span> {active.details.audience}</p>
                  <p><span className="text-white/40">Outcome:</span> {active.details.outcome}</p>
                </div>

                <div className="col-span-2 mt-2">
                  <p className="text-white/40 mb-1">Highlights</p>
                  {active.highlights.map((item, i) => (
                    <p key={i}>• {item}</p>
                  ))}
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <button
                onClick={() => setMode("scenario")}
                className="flex-1 bg-white text-black py-2 text-sm"
              >
                View Scenario
              </button>

              <button className="flex-1 border border-white/30 py-2 text-sm">
                Request Plan
              </button>
            </div>
          </>
        ) : (
          <>
            {/* SCENARIO */}
            <div>
  <h1 className="text-2xl font-bold mb-4">
    Event Scenario
  </h1>

  <div className="space-y-2 text-sm text-white/80">
    <p>Type → {active.title}</p>
    <p>Location → {active.details.location}</p>
    <p>Setup → {active.details.setup}</p>
    <p>Audience → {active.details.audience}</p>
    <p>Outcome → {active.details.outcome}</p>
  </div>
</div>

            <div>
              <button className="bg-white text-black px-6 py-2 text-sm">
                Request Detailed Plan
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}