import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Rocket,
  Target,
  Zap,
  TrendingUp,
  Search,
  MousePointerClick,
  BarChart3,
  Heart,
  MessageCircle,
  Send,
  Bell,
  Signal,
  Wifi,
  Battery,
  MapPin,
} from "lucide-react";

// ============ DATA ============
const heroHighlights = [
  { icon: Rocket, label: "Fast Turnaround" },
  { icon: Target, label: "ROI Focused" },
  { icon: Sparkles, label: "Data-Driven" },
  { icon: Zap, label: "Founder-Led" },
];

const marqueeItems = [
  "GMB Optimization",
  "Website Development",
  "Social Media",
  "WhatsApp Marketing",
  "Google & Meta Ads",
  "YouTube Marketing",
  "SEO Services",
  "Digital Business Card",
];

const phoneScreens = [
  { id: "analytics", title: "Analytics" },
  { id: "social", title: "Social" },
  { id: "seo", title: "SEO" },
];

// ============ HERO ============
const Hero = () => {
  const heroRef = useRef(null);
  const [activeScreen, setActiveScreen] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % phoneScreens.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const headingLine1 = "Physics of";
  const headingLine2 = "Business Growth";

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.03,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[var(--color-bg-primary)] pt-24 pb-24"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-brand-500)]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[var(--color-brand-600)]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Layout */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-16rem)]"
      >
        {/* LEFT */}
        <div className="text-center lg:text-left">
          {/* Badge — UPDATED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6 hover:border-[var(--color-brand-400)]/50 transition-all duration-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              Available for new projects
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span className="flex items-center gap-1 text-xs text-[var(--color-brand-400)] font-medium">
              <MapPin size={10} />
              Kota • Indore
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1] tracking-tight mb-6">
            <div className="overflow-hidden">
              <div className="flex lg:justify-start justify-center flex-wrap">
                {headingLine1.split("").map((char, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-white"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden mt-2">
              <div className="flex lg:justify-start justify-center flex-wrap">
                {headingLine2.split("").map((char, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    custom={i + headingLine1.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </div>
          </h1>

          {/* Subheading — UPDATED */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8"
          >
            A full-service digital marketing company from{" "}
            <span className="text-white font-semibold">Kota & Indore</span> —
            helping <span className="text-white font-semibold">startups, local businesses, and brands</span>{" "}
            grow with strategy, consistency, and data-driven action.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10"
          >
            <Link
              to="/contact"
              className="group relative flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">Book Free Call</span>
              <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <ArrowUpRight
                  size={16}
                  className="text-white transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              to="/services"
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[var(--color-brand-400)]/50 hover:bg-white/[0.05] transition-all duration-500"
            >
              <span className="text-white font-medium text-sm">
                Explore Services
              </span>
              <ArrowUpRight
                size={14}
                className="text-[var(--color-brand-400)] group-hover:rotate-45 transition-transform duration-500"
              />
            </Link>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-wrap lg:justify-start justify-center gap-3"
          >
            {heroHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/30 transition-all"
                >
                  <Icon size={14} className="text-[var(--color-brand-400)]" />
                  <span className="text-xs text-white font-medium">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT: PHONE */}
        <div className="relative flex items-center justify-center h-[600px] lg:h-[650px] perspective-[2000px]">
          <div className="absolute w-[400px] h-[400px] bg-[var(--color-brand-500)]/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-[var(--color-accent-neon)]/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          <FloatingCard
            className="top-[8%] -left-4 lg:-left-8"
            delay={2}
            icon={TrendingUp}
            title="+180% Growth"
            subtitle="Local traffic up"
            gradient="from-green-500 to-emerald-400"
          />
          <FloatingCard
            className="top-[35%] -right-4 lg:-right-8"
            delay={2.3}
            icon={Heart}
            title="Top 3 Rank"
            subtitle="On Google Maps"
            gradient="from-pink-500 to-rose-400"
          />
          <FloatingCard
            className="bottom-[10%] -left-2 lg:-left-6"
            delay={2.6}
            icon={MousePointerClick}
            title="4.2% CTR"
            subtitle="Ad performance"
            gradient="from-purple-500 to-indigo-400"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative phone-float"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative w-[280px] h-[570px] rounded-[3rem] bg-gradient-to-br from-gray-800 via-black to-gray-900 p-3 shadow-[0_0_80px_rgba(34,211,238,0.35)]"
              style={{
                transform: "rotateY(-15deg) rotateX(5deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -left-[3px] top-24 w-[3px] h-12 bg-gray-700 rounded-l-md" />
              <div className="absolute -left-[3px] top-40 w-[3px] h-16 bg-gray-700 rounded-l-md" />
              <div className="absolute -right-[3px] top-32 w-[3px] h-20 bg-gray-700 rounded-r-md" />

              <div className="relative w-full h-full rounded-[2.5rem] bg-[#0a0a0f] overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 border border-gray-800" />

                <div className="relative z-20 flex items-center justify-between px-6 pt-3 pb-2 text-white text-[10px] font-semibold">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal size={10} />
                    <Wifi size={10} />
                    <Battery size={12} />
                  </div>
                </div>

                <div className="relative w-full h-full">
                  <AnimatePresence mode="wait">
                    {activeScreen === 0 && <AnalyticsScreen key="analytics" />}
                    {activeScreen === 1 && <SocialScreen key="social" />}
                    {activeScreen === 2 && <SEOScreen key="seo" />}
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                  {phoneScreens.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${activeScreen === i
                          ? "w-6 bg-[var(--color-brand-400)]"
                          : "w-1.5 bg-white/30"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/[0.06] bg-black/40 backdrop-blur-xl overflow-hidden"
      >
        <div className="flex items-center gap-6 max-w-7xl mx-auto px-6">
          <span className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] whitespace-nowrap">
            <Sparkles size={12} className="text-[var(--color-brand-400)]" />
            What we do
          </span>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <div className="flex marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div key={i} className="flex items-center flex-shrink-0">
                  <span className="mx-8 text-2xl md:text-3xl font-bold text-white/40 hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap">
                    {item}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--color-brand-400)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .perspective-\\[2000px\\] { perspective: 2000px; }
        .phone-float {
          animation: phoneFloat 6s ease-in-out infinite;
        }
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .marquee-track {
          animation: marqueeScroll 30s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

// FLOATING CARD
const FloatingCard = ({ className, delay, icon: Icon, title, subtitle, gradient }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute z-20 ${className}`}
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[160px]"
    >
      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
        <Icon size={16} className="text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-white leading-tight">{title}</span>
        <span className="text-[10px] text-white/60">{subtitle}</span>
      </div>
    </motion.div>
  </motion.div>
);

// SCREEN 1 — ANALYTICS (Updated with realistic numbers)
const AnalyticsScreen = () => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.5 }}
    className="absolute inset-0 pt-10 px-4"
  >
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-[9px] text-white/50">Growth Report</p>
        <h3 className="text-sm font-bold text-white">Analytics</h3>
      </div>
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
        <BarChart3 size={14} className="text-white" />
      </div>
    </div>

    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-cyan-400/30 rounded-2xl p-4 mb-3">
      <p className="text-[9px] text-white/60 mb-1">Website Visitors</p>
      <div className="flex items-baseline gap-1">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-white"
        >
          8.4K
        </motion.h2>
        <span className="text-[10px] text-green-400 font-semibold">+42%</span>
      </div>

      <div className="flex items-end gap-1 mt-3 h-12">
        {[40, 55, 45, 70, 60, 85, 75, 92].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm"
          />
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-2">
      {[
        { label: "Leads", val: "126", color: "text-green-400" },
        { label: "Calls", val: "84", color: "text-cyan-400" },
      ].map((s, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-2.5">
          <p className="text-[8px] text-white/50">{s.label}</p>
          <p className={`text-sm font-bold ${s.color}`}>{s.val}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

// SCREEN 2 — SOCIAL
const SocialScreen = () => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.5 }}
    className="absolute inset-0 pt-10 px-4"
  >
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-bold text-white">Feed</h3>
      <Bell size={14} className="text-white/60" />
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-3">
      <div className="flex items-center gap-2 p-2.5">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
        <div>
          <p className="text-[10px] font-semibold text-white">digitee.world</p>
          <p className="text-[8px] text-white/50">2h ago</p>
        </div>
      </div>
      <div className="h-24 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-indigo-500/30 flex items-center justify-center">
        <Sparkles size={24} className="text-white/70" />
      </div>
      <div className="flex items-center gap-3 p-2.5">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center gap-1"
        >
          <Heart size={12} className="text-pink-500" fill="currentColor" />
          <span className="text-[10px] text-white">548</span>
        </motion.div>
        <div className="flex items-center gap-1">
          <MessageCircle size={12} className="text-white/60" />
          <span className="text-[10px] text-white">42</span>
        </div>
        <div className="flex items-center gap-1">
          <Send size={12} className="text-white/60" />
          <span className="text-[10px] text-white">28</span>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-xl p-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] text-white/70">Engagement Rate</span>
        <span className="text-[10px] text-pink-400 font-bold">8.7%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "87%" }}
          transition={{ duration: 1.5 }}
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

// SCREEN 3 — SEO
const SEOScreen = () => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.5 }}
    className="absolute inset-0 pt-10 px-4"
  >
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-bold text-white">SEO Ranking</h3>
      <Search size={14} className="text-white/60" />
    </div>

    <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 border border-green-400/30 rounded-2xl p-4 mb-3 flex items-center gap-3">
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90">
          <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
          <motion.circle
            cx="32" cy="32" r="28"
            stroke="url(#greenGrad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 176" }}
            animate={{ strokeDasharray: "158 176" }}
            transition={{ duration: 1.5 }}
          />
          <defs>
            <linearGradient id="greenGrad">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">90</span>
        </div>
      </div>
      <div>
        <p className="text-[9px] text-white/60">SEO Score</p>
        <p className="text-sm font-bold text-white">Excellent</p>
        <p className="text-[9px] text-green-400 mt-1">↑ 12 points</p>
      </div>
    </div>

    <div className="space-y-1.5">
      {[
        { kw: "digital marketing kota", rank: "#2" },
        { kw: "seo company indore", rank: "#4" },
        { kw: "gmb optimization", rank: "#3" },
      ].map((k, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2"
        >
          <span className="text-[10px] text-white">{k.kw}</span>
          <span className="text-[10px] font-bold text-green-400">{k.rank}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Hero;