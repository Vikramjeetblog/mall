import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Crown,
  Sparkles,
  Megaphone,
  Users,
  Eye,
  CalendarDays,
  Handshake,
  BadgeCheck,
  MonitorPlay,
  MapPin,
  Target,
  Ruler,
  TrendingUp,
  Building2,
  BarChart3,
  PlayCircle,} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sponsorship() {
  const navigate = useNavigate();
  const [tier, setTier] = useState("title");
  const [showPackage, setShowPackage] = useState(false);
  const [packageTab, setPackageTab] = useState("story");

  const marketData = [
    { value: "111M", label: "Dubai Mall visitors in 2024" },
    { value: "1,200+", label: "Retail outlets" },
    { value: "18.72M", label: "Dubai overnight visitors in 2024" },
  ];

  const tierData = {
    title: {
      video: "/videos/sponsor-title.mp4",
      title: "Title Partner",
      label: "Flagship Partnership",
      subtitle:
        "Own the Dubai Mall sponsorship story with destination-level visibility and premium global reach.",
      package: "Annual / Seasonal",
      audience: "Tourists, premium shoppers, families, creators, VIP guests",
      visibility: "Arrival branding, hero screens, flagship events, digital media",
      activation: "Launch event, VIP lounge, creator campaign, citywide moment",
      bestFor: "Banks, airlines, telecom, luxury, automotive, national brands",
      cta: "View Title Package",
      icon: Crown,
      packageDetail: {
        headline: "Destination Ownership",
        hook: "Become the brand attached to Dubai Mall’s biggest visitor moments.",
        problem:
          "Most sponsors buy media and still need to explain the context. Here, the context is already the pitch: global visitors, premium retail and Dubai tourism in one place.",
        placement: "Main arrival route + hero media network",
        media: "Hero video, LED screens, creator reels, event branding",
        term: "12 months / seasonal takeover",
        activationSpace: "Up to 1200 sq.ft",
        estimatedReach: "111M annual visitors",
        value: "Highest share of voice",
        investment: "Custom package",
        outcome: "Global awareness + category leadership",
        examples: ["Event naming", "VIP launch", "Creator campaign"],
      },
    },
    gold: {
      video: "/videos/sponsor-gold.mp4",
      title: "Gold Partner",
      label: "Premium Visibility",
      subtitle:
        "Own selected Dubai Mall zones with high-frequency visitor exposure and campaign media.",
      package: "3–12 Months",
      audience: "Dining guests, weekend visitors, lifestyle shoppers, tourists",
      visibility: "Zone branding, selected screens, campaign placements, signage",
      activation: "Photo moment, sampling booth, branded installation",
      bestFor: "F&B, fashion, fintech, FMCG, lifestyle and consumer brands",
      cta: "View Gold Package",
      icon: Sparkles,
      packageDetail: {
        headline: "Premium Zone Visibility",
        hook: "Put your brand where people naturally pause, shop, dine and share.",
        problem:
          "A normal campaign fights for attention. A Dubai Mall zone placement puts the brand inside the visitor journey, so awareness and interaction happen together.",
        placement: "Dining court, luxury corridor or event plaza",
        media: "Zone signage, selected LED screens, social placement",
        term: "3–12 months",
        activationSpace: "300–700 sq.ft",
        estimatedReach: "57M H1 visitor benchmark",
        value: "High-frequency recall",
        investment: "Mid-to-premium package",
        outcome: "Visibility + product interaction",
        examples: ["Photo moment", "Sampling booth", "Brand installation"],
      },
    },
    activation: {
      video: "/videos/sponsor-visibility.mp4",
      title: "Activation Partner",
      label: "Experiential Campaign",
      subtitle:
        "Launch pop-ups, product trials and creator-led campaigns inside Dubai Mall footfall.",
      package: "1 Day – 8 Weeks",
      audience: "Gen Z, families, tourists, impulse visitors, social-first audiences",
      visibility: "Activation space, support signage, selected digital amplification",
      activation: "Product trial, lead capture, demo, game, influencer moment",
      bestFor: "Product launches, app installs, sampling, trials, promotions",
      cta: "View Activation Package",
      icon: Megaphone,
      packageDetail: {
        headline: "Live Brand Activation",
        hook: "Turn Dubai Mall footfall into trials, leads, installs and content.",
        problem:
          "Brands do not just need visibility; they need action. This format turns passive visitors into active participants through trials, demos and QR journeys.",
        placement: "Pop-up bay, event floor or visitor entry path",
        media: "Activation signage, QR journey, screen support",
        term: "1 day – 8 weeks",
        activationSpace: "100–400 sq.ft",
        estimatedReach: "High-intent daily footfall",
        value: "Trial + lead capture",
        investment: "Campaign-based package",
        outcome: "Sampling, leads, installs, trials",
        examples: ["Product trial", "Lead capture", "Influencer moment"],
      },
    },
  };

  const packageTabs = [
    { key: "story", label: "Why Sponsor", icon: PlayCircle },
    { key: "space", label: "Space", icon: Ruler },
    { key: "media", label: "Media", icon: MonitorPlay },
    { key: "roi", label: "ROI", icon: TrendingUp },
  ];

  const videoStories = {
    story: {
      kicker: "Why Sponsor",
      headline: "Let the venue sell the opportunity.",
      copy:
        "Instead of jumping between PPTs, folders and videos, the sponsor sees the Dubai Mall story and package logic in one guided experience.",
    },
    space: {
      kicker: "Space",
      headline: "Show the placement, then sell the format.",
      copy:
        "The video keeps the location alive while the package explains footprint, term and activation use case.",
    },
    media: {
      kicker: "Media",
      headline: "Turn physical traffic into digital reach.",
      copy:
        "Screens, creator content, on-ground branding and campaign media work together as one sponsorship layer.",
    },
    roi: {
      kicker: "ROI",
      headline: "Move from visibility to measurable action.",
      copy:
        "The package connects Dubai Mall footfall with brand recall, trials, leads and premium market association.",
    },
  };

  const active = tierData[tier];
  const ActiveIcon = active.icon;
  const detail = active.packageDetail;

  const metrics = [
    { label: "Package Term", value: active.package, icon: CalendarDays },
    { label: "Audience", value: active.audience, icon: Users },
    { label: "Visibility", value: active.visibility, icon: Eye },
    { label: "Activation", value: active.activation, icon: Target },
    { label: "Best Fit", value: active.bestFor, icon: BadgeCheck, wide: true },
  ];

  const packageContent = {
    story: {
      title: detail.hook,
      body: detail.problem,
      stat: detail.estimatedReach,
      statLabel: "Audience scale",
    },
    space: {
      title: detail.placement,
      body: `Activation footprint: ${detail.activationSpace}. Term: ${detail.term}.`,
      stat: detail.activationSpace,
      statLabel: "Available space",
    },
    media: {
      title: detail.media,
      body: "The sponsor story is shown through video, screens, social content and on-ground brand presence, not explained manually like a slide deck.",
      stat: detail.value,
      statLabel: "Media value",
    },
    roi: {
      title: detail.value,
      body: detail.outcome,
      stat: detail.investment,
      statLabel: "Investment model",
    },
  };

  const activePackageContent = packageContent[packageTab];
  const activeVideoStory = videoStories[packageTab];

  function openPackage() {
    setPackageTab("story");
    setShowPackage(true);
  }

  if (showPackage) {
    return (
      <div className="relative h-screen w-full bg-black text-white overflow-hidden">
        <button
          onClick={() => setShowPackage(false)}
          className="absolute top-6 left-6 sm:left-10 z-40 flex items-center gap-2 text-white/60 hover:text-white transition text-xs sm:text-sm tracking-wide"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="flex h-full w-full">
          {/* LEFT CONTENT */}
          <div className="w-[44%] h-screen bg-black flex items-center px-8 lg:px-14 xl:px-18 relative z-10">
            <motion.div
              key={`${tier}-${packageTab}`}
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-lg pt-8"
            >
              <div className="flex items-center gap-2 mb-3">
                <ActiveIcon size={17} className="text-yellow-400 shrink-0" />
                <p className="text-[10px] tracking-[0.28em] text-yellow-400 uppercase">
                  {active.title} Package
                </p>
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-[46px] font-bold leading-[0.95] mb-4">
                {detail.headline}
              </h1>

              {/* NON TABS */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {packageTabs.map((item) => {
                  const ItemIcon = item.icon;
                  const selected = item.key === packageTab;
                  return (
                    <button
                      key={item.key}
                      onClick={() => setPackageTab(item.key)}
                      className={`flex items-center justify-center gap-1.5 px-2 py-2 border rounded-sm text-[10px] transition ${
                        selected
                          ? "bg-white text-black border-white"
                          : "border-white/15 text-white/50 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <ItemIcon size={12} />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="border border-white/10 bg-white/[0.035] p-5 rounded-sm mb-5">
                <p className="text-xl lg:text-2xl font-semibold leading-tight mb-3">
                  {activePackageContent.title}
                </p>
                <p className="text-sm text-white/58 leading-6 mb-5">
                  {activePackageContent.body}
                </p>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/40 mb-2">
                    {activePackageContent.statLabel}
                  </p>
                  <p className="text-3xl lg:text-4xl font-bold text-green-400 leading-none">
                    {activePackageContent.stat}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {detail.examples.map((item) => (
                  <div key={item} className="border border-white/10 bg-white/[0.03] p-3 rounded-sm min-h-[74px] flex items-center">
                    <p className="text-xs text-white/80 leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/contact/partnerships")}
                className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition rounded-sm text-xs sm:text-sm flex items-center gap-3"
              >
                Request Package
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* RIGHT VIDEO STORY */}
 <div className="w-[56%] h-screen relative overflow-hidden bg-zinc-950">

  <img
    src={`/images/${tier}-package.jpeg`}
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/30" />
  <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />

</div>
  

  
</div>
          </div>
      
    
    );
  }

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <button
        onClick={() => navigate("/experience")}
        className="absolute top-6 left-6 sm:top-10 sm:left-10 z-30 flex items-center gap-2 text-white/60 hover:text-white transition text-xs sm:text-sm tracking-wide"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="flex h-full w-full">
        {/* VIDEO SIDE */}
        <div className="w-[48%] lg:w-1/2 h-screen relative overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.video
              key={active.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              initial={{ scale: 1.12, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.06, opacity: 0 }}
              transition={{ duration: 0.9 }}
            >
              <source src={active.video} type="video/mp4" />
            </motion.video>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute left-8 right-8 bottom-8 z-10 hidden lg:block">
            <div className="border border-white/15 bg-black/40 backdrop-blur-md p-5 rounded-sm">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/45 mb-4">
                Dubai Mall Sponsorship Value
              </p>
              <div className="grid grid-cols-3 gap-5">
                {marketData.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-bold text-white leading-tight">{item.value}</p>
                    <p className="text-xs text-white/45 mt-1 leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="w-[52%] lg:w-1/2 h-screen relative flex flex-col justify-center px-5 sm:px-10 lg:px-16 xl:px-20 bg-gradient-to-br from-black via-zinc-950 to-black">
          <div className="absolute w-[320px] h-[320px] bg-yellow-400/10 blur-3xl top-24 right-10 pointer-events-none" />

          <motion.div
            key={tier}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10 -mt-2"
          >
            <p className="text-[10px] sm:text-xs tracking-[0.3em] text-yellow-400 uppercase mb-3">
              Sponsorship Opportunities
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
              {Object.keys(tierData).map((key) => {
                const ItemIcon = tierData[key].icon;
                const isActive = key === tier;
                return (
                  <button
                    key={key}
                    onClick={() => setTier(key)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 border transition rounded-sm text-[10px] sm:text-xs tracking-wide ${
                      isActive
                        ? "bg-white text-black border-white"
                        : "border-white/20 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <ItemIcon size={14} />
                    {tierData[key].title}
                  </button>
                );
              })}
            </div>

            <p className="text-[10px] sm:text-xs tracking-[0.24em] text-white/40 uppercase mb-2">
              {active.label}
            </p>

            <div className="flex items-center gap-3 mb-3">
              <ActiveIcon className="text-yellow-400" size={24} />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {active.title}
              </h1>
            </div>

            <p className="text-xs sm:text-base text-gray-400 max-w-xl mb-5 leading-relaxed">
              {active.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-sm">
              {metrics.map((item) => {
                const MetricIcon = item.icon;
                return (
                  <div key={item.label} className={item.wide ? "sm:col-span-2" : ""}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <MetricIcon size={15} className="text-white/35" />
                      <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-sm sm:text-base text-white leading-snug">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={openPackage}
                className="px-5 sm:px-7 py-3 bg-white text-black font-medium hover:bg-gray-200 transition rounded-sm text-xs sm:text-sm flex items-center gap-3"
              >
                {active.cta}
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigate("/contact/partnerships")}
                className="px-5 sm:px-7 py-3 border border-white/30 text-white/80 hover:bg-white hover:text-black transition rounded-sm text-xs sm:text-sm flex items-center gap-3"
              >
                Contact
                <Handshake size={15} />
              </button>

              <button
                onClick={() => navigate("/sponsorship/media-kit")}
                className="px-5 sm:px-7 py-3 border border-yellow-400/35 text-yellow-300 hover:bg-yellow-400 hover:text-black transition rounded-sm text-xs sm:text-sm flex items-center gap-3"
              >
                Media Kit
                <MonitorPlay size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
