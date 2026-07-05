import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

// ============ DATA ============
const processSteps = [
  {
    id: 1,
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Understand & Analyze",
    description:
      "We dive deep into your business, target audience, competitors, and goals to build a solid foundation for growth.",
    tasks: ["Business Audit", "Market Research", "Competitor Analysis", "Goal Setting"],
    gradient: "from-blue-500 to-cyan-400",
    duration: "Week 1",
  },
  {
    id: 2,
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    subtitle: "Plan & Blueprint",
    description:
      "Custom digital roadmap tailored to your business — combining SEO, ads, content, and social media into one growth plan.",
    tasks: ["Custom Roadmap", "Channel Selection", "Content Plan", "Budget Allocation"],
    gradient: "from-cyan-400 to-teal-400",
    duration: "Week 2",
  },
  {
    id: 3,
    number: "03",
    icon: Rocket,
    title: "Execute",
    subtitle: "Launch & Deliver",
    description:
      "Our team gets to work — designing, developing, launching campaigns, creating content, and optimizing your presence.",
    tasks: ["Campaign Launch", "Content Creation", "Design & Build", "Daily Management"],
    gradient: "from-violet-500 to-purple-500",
    duration: "Week 3-4",
  },
  {
    id: 4,
    number: "04",
    icon: TrendingUp,
    title: "Optimize",
    subtitle: "Track & Scale",
    description:
      "We track every metric, analyze what works, and continuously optimize to scale your results month after month.",
    tasks: ["Analytics Tracking", "A/B Testing", "Performance Reports", "Scale & Improve"],
    gradient: "from-emerald-500 to-green-400",
    duration: "Ongoing",
  },
];

// ============ COMPONENT ============
const Process = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Line draws as you scroll
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="process"
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
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--color-brand-600)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[150px] pointer-events-none" />

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
            <Sparkles size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
            A simple 4-step process to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              scale your business
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Just like physics, growth follows a formula. Here's how we apply{" "}
            <span className="text-white font-semibold">strategy, consistency & data</span>{" "}
            to move your business forward.
          </p>
        </motion.div>

        {/* ============ PROCESS STEPS ============ */}
        <div className="relative">
          {/* Connecting Line - Desktop (horizontal) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] mx-32">
            <div className="w-full h-full bg-white/[0.06] rounded-full" />
            <motion.div
              style={{ scaleX: lineProgress }}
              className="absolute top-0 left-0 w-full h-full origin-left bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)] rounded-full shadow-[0_0_20px_var(--color-brand-400)]"
            />
          </div>

          {/* Connecting Line - Mobile (vertical) */}
          <div className="lg:hidden absolute left-8 top-16 bottom-16 w-[2px]">
            <div className="w-full h-full bg-white/[0.06] rounded-full" />
            <motion.div
              style={{ scaleY: lineProgress }}
              className="absolute top-0 left-0 w-full h-full origin-top bg-gradient-to-b from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)] rounded-full shadow-[0_0_20px_var(--color-brand-400)]"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* ============ BOTTOM CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-sm md:text-base text-[var(--color-text-muted)] mb-6">
            Ready to start your growth journey?
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105 relative"
          >
            <span className="relative z-10">Let's Start with Discovery</span>
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

// ============ SINGLE STEP CARD ============
const ProcessStep = ({ step, index }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex lg:flex-col gap-6 lg:gap-0 items-start lg:items-center pl-20 lg:pl-0 group"
    >
      {/* ============ ICON CIRCLE (on the line) ============ */}
      <div className="relative flex-shrink-0 lg:mb-8 z-10">
        {/* Outer glow ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full blur-xl`}
        />

        {/* Position marker - absolute on mobile */}
        <div className="lg:hidden absolute -left-[3rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_20px_var(--color-brand-400)] z-20 border-4 border-[var(--color-bg-primary)]" />

        {/* Icon container */}
        <div
          className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-[var(--color-bg-primary)]`}
        >
          <Icon size={28} className="text-white" strokeWidth={2} />
        </div>

        {/* Number badge */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border-2 border-[var(--color-brand-400)] flex items-center justify-center shadow-lg">
          <span className="text-[10px] font-bold text-[var(--color-brand-400)] font-mono">
            {step.number}
          </span>
        </div>
      </div>

      {/* ============ CONTENT ============ */}
      <div className="flex-1 lg:text-center">
        {/* Duration badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] animate-pulse" />
          <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-medium">
            {step.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
          {step.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs uppercase tracking-wider text-[var(--color-brand-400)] font-semibold mb-3">
          {step.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {step.description}
        </p>

        {/* Tasks list */}
        <div className="flex flex-wrap lg:justify-center gap-1.5">
          {step.tasks.map((task, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 + i * 0.05 }}
              className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[var(--color-text-muted)] hover:border-[var(--color-brand-400)]/40 hover:text-white transition-all"
            >
              {task}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Process;