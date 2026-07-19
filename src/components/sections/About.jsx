import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    Sparkles,
    MapPin,
    Calendar,
    Target,
    Zap,
    TrendingUp,
    Atom,
} from "lucide-react";

// ============ DATA ============
const philosophyPrinciples = [
    {
        icon: Target,
        physics: "Force",
        business: "Strategy",
        desc: "Clear direction, right approach",
        color: "from-blue-500 to-cyan-400",
    },
    {
        icon: Zap,
        physics: "Energy",
        business: "Consistency",
        desc: "Daily execution that compounds",
        color: "from-cyan-400 to-teal-400",
    },
    {
        icon: TrendingUp,
        physics: "Momentum",
        business: "Data & Action",
        desc: "Track, learn, improve, repeat",
        color: "from-teal-400 to-emerald-400",
    },
];

const journeyStats = [
    { icon: Calendar, label: "Since", value: "June 2022" },
    { icon: MapPin, label: "Based in", value: "Kota & Indore" },
    { icon: Atom, label: "Approach", value: "Physics-Based" },
];

// ============ COMPONENT ============
const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] py-20"
        >
            {/* ============ BACKGROUND ============ */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                    maskImage:
                        "radial-gradient(ellipse 60% 80% at 50% 50%, black 40%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 60% 80% at 50% 50%, black 40%, transparent 100%)",
                }}
            />
            <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[var(--color-brand-600)]/15 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                {/* ============ SECTION HEADER ============ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center text-center mb-16 md:mb-20"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6">
                        <Sparkles size={12} className="text-[var(--color-brand-400)]" />
                        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                            About Us
                        </span>
                    </div>

                    {/* ✅ New Heading — Honest & Confident */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl">
                        Built to help businesses{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
                            actually grow
                        </span>
                    </h2>

                    {/* ✅ New Subheading — Grounded */}
                    <p className="max-w-2xl text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                        We're a small, focused team from{" "}
                        <span className="text-white font-semibold">Kota & Indore</span> —
                        working with startups and local businesses that care about real
                        results, not vanity metrics.
                    </p>
                </motion.div>

                {/* ============ TWO COLUMN GRID ============ */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* ========== LEFT: STORY ========== */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-[var(--color-brand-400)]" />
                            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)]">
                                Our Story
                            </span>
                        </div>

                        {/* ✅ New Story Heading — Grounded */}
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Since 2022,{" "}
                            <span className="text-[var(--color-brand-400)]">building brands that stand out.</span>
                        </h3>

                        {/* ✅ New Story Copy — Honest */}
                        <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-8">
                            <p>
                                Digitee World began as a small{" "}
                                <span className="text-white font-medium">
                                    Local SEO & Google Business Profile
                                </span>{" "}
                                consultancy in Kota, Rajasthan. No fancy office, no big team —
                                just a simple goal: do honest work that actually helps
                                businesses grow.
                            </p>
                            <p>
                                Two years in, we've expanded to{" "}
                                <span className="text-white font-medium">two branches</span>{" "}
                                (Kota & Indore) and now offer a full range of digital services.
                                But the core hasn't changed — we still work personally with
                                every client, and we still say no to shortcuts.
                            </p>
                        </div>

                        {/* Journey Stats */}
                        <div className="grid grid-cols-3 gap-3 mb-8">
                            {journeyStats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/30 transition-all group"
                                    >
                                        <Icon
                                            size={16}
                                            className="text-[var(--color-brand-400)] mb-2 group-hover:scale-110 transition-transform"
                                        />
                                        <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                                            {stat.label}
                                        </p>
                                        <p className="text-sm font-semibold text-white leading-tight">
                                            {stat.value}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <Link
                            to="/about"
                            className="group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[var(--color-brand-400)]/50 hover:bg-white/[0.05] transition-all duration-500"
                        >
                            <span className="text-white font-medium text-sm">
                                Read Full Story
                            </span>
                            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] group-hover:shadow-[0_0_20px_var(--color-brand-400)] transition-all">
                                <ArrowUpRight
                                    size={14}
                                    className="text-white transition-transform duration-500 group-hover:rotate-45"
                                />
                            </span>
                        </Link>
                    </motion.div>

                    {/* ========== RIGHT: PHILOSOPHY VISUAL ========== */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-[var(--color-brand-500)]/10 rounded-3xl blur-3xl" />

                        <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-400)]/10 rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-accent-neon)]/10 rounded-full blur-2xl" />

                            {/* ✅ New Header — Simpler */}
                            <div className="relative flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                                    <Atom size={22} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
                                        How We Think
                                    </p>
                                    <h4 className="text-lg font-bold text-white">
                                        Physics of Business Growth
                                    </h4>
                                </div>
                            </div>

                            {/* Principles */}
                            <div className="relative space-y-3">
                                {philosophyPrinciples.map((principle, i) => {
                                    const Icon = principle.icon;
                                    return (
                                        <motion.div
                                            key={principle.physics}
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                                            whileHover={{ x: 5 }}
                                            className="group relative p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center shadow-lg`}
                                                >
                                                    <Icon size={18} className="text-white" />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-baseline gap-2 mb-1">
                                                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-brand-400)]">
                                                            {principle.physics}
                                                        </span>
                                                        <span className="text-xs text-[var(--color-text-muted)]">
                                                            →
                                                        </span>
                                                        <span className="text-base font-bold text-white">
                                                            {principle.business}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                                                        {principle.desc}
                                                    </p>
                                                </div>

                                                <ArrowUpRight
                                                    size={16}
                                                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-400)] group-hover:rotate-45 transition-all duration-500"
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* ✅ New Bottom Quote — Grounded */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="relative mt-8 pt-6 border-t border-white/[0.06]"
                            >
                                <p className="text-sm text-[var(--color-text-secondary)] italic leading-relaxed text-center">
                                    Simple idea:{" "}
                                    <span className="text-[var(--color-brand-400)] font-semibold not-italic">
                                        right strategy + steady work + honest data
                                    </span>{" "}
                                    = growth
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;