import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  MapPin,
  Users,
  Award,
  Clock,
  X,
  Check,
  ArrowUpRight,
  Atom,
} from "lucide-react";
import { Link } from "react-router-dom";

// ============ DATA ============
const reasons = [
  {
    icon: Atom,
    title: "Physics-Based Framework",
    description:
      "Our unique 'Physics of Business Growth' approach brings strategy, consistency, and data together for measurable results.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: MapPin,
    title: "Two Strategic Locations",
    description:
      "With offices in Kota and Indore, we serve clients across Rajasthan, Madhya Pradesh, and beyond with local expertise.",
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    icon: Users,
    title: "Founder-Led Team",
    description:
      "You work directly with the founders — no middlemen, no account managers. Direct access, honest communication.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Ethical & Transparent",
    description:
      "No fake promises, no shortcuts. We follow white-hat practices and show you exactly what we're doing.",
    gradient: "from-emerald-500 to-green-400",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "We move fast without breaking quality. Get campaigns live, content delivered, and results rolling in days, not months.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: TrendingUp,
    title: "ROI-Driven Approach",
    description:
      "Every campaign is built around your business goals. We track, measure, and optimize for real returns.",
    gradient: "from-pink-500 to-rose-400",
  },
];

// ============ COMPONENT ============
const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] py-24 md:py-32"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-brand-500)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ============ SECTION HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6">
            <Award size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
            What makes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              Digitee World different?
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            We're not just another digital marketing agency. Here's why brands
            in Kota, Indore, and beyond trust us with their growth.
          </p>
        </motion.div>

        {/* ============ HERO PHYSICS CARD ============ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 md:mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-500)]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent-neon)]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-3 h-3 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_20px_var(--color-brand-400)]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-[var(--color-accent-neon)] shadow-[0_0_15px_var(--color-accent-neon)]"
          />
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[var(--color-brand-500)] shadow-[0_0_18px_var(--color-brand-500)]"
          />

          <div className="relative grid lg:grid-cols-5 gap-8 items-center">
            {/* Left: Visual Atom */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Outer orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border border-[var(--color-brand-400)]/30 rounded-full"
                />

                {/* Middle orbit */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 border border-[var(--color-accent-neon)]/40 rounded-full"
                />

                {/* Inner orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 border border-[var(--color-brand-500)]/50 rounded-full"
                />

                {/* Center atom */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.6)] z-10"
                >
                  <Atom size={36} className="text-white" />
                </motion.div>

                {/* Orbiting dots */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_15px_var(--color-brand-400)]" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--color-accent-neon)] shadow-[0_0_12px_var(--color-accent-neon)]" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--color-brand-500)] shadow-[0_0_10px_var(--color-brand-500)]" />
                </motion.div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 mb-4">
                <Sparkles size={12} className="text-[var(--color-brand-400)]" />
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                  Our Framework
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Physics of Business Growth
              </h3>

              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Just like every physical system needs the right balance of{" "}
                <span className="text-white font-semibold">force</span>,{" "}
                <span className="text-white font-semibold">energy</span>, and{" "}
                <span className="text-white font-semibold">momentum</span> to
                move forward, your business needs strategy, consistency, and
                data-driven action to grow.
              </p>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Strategy", icon: "→" },
                  { label: "Consistency", icon: "→" },
                  { label: "Data Action", icon: "→" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
                  >
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">Physics</p>
                    <p className="text-sm font-bold text-white">
                      {["Force", "Energy", "Momentum"][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============ 6 REASONS GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-20">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ============ CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10">Experience the Digitee Difference</span>
            <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
              <ArrowUpRight
                size={16}
                className="text-white transition-transform duration-500 group-hover:rotate-45"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;