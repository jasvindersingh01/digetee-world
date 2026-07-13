import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    Sparkles,
    MapPin,
    Calendar,
    Atom,
    Target,
    Zap,
    TrendingUp,
    Award,
    Shield,
    BadgeCheck,
    Building2,
    Quote,
    Rocket,
    Eye,
    Heart,
} from "lucide-react";

// ============ IMAGE PLACEHOLDERS ============
// Replace these with actual image imports
// Example: import founderMain from "../assets/founder/main.jpg";
const founderImages = {
    main: "/founder.jpeg",
    award1: "/certificates/cer1.jpeg",
    award2: "/certificates/cer2.jpeg",
    award3: "/certificates/awd1.jpeg",
};

// ============ DATA ============
const journeyMilestones = [
    { year: "June 2022", event: "Founded in Kota, Rajasthan" },
    { year: "2022", event: "Started with Local SEO & GMB consultancy" },
    { year: "2023", event: "Expanded services across industries" },
    { year: "2024", event: "Opened Corporate Branch in Indore" },
    { year: "2025", event: "Scaling across Rajasthan, MP & beyond" },
];

const philosophyPrinciples = [
    {
        icon: Target,
        physics: "Force",
        business: "Strategy",
        desc: "Clear direction & purposeful action",
        gradient: "from-blue-500 to-cyan-400",
    },
    {
        icon: Zap,
        physics: "Energy",
        business: "Consistency",
        desc: "Sustained effort that compounds daily",
        gradient: "from-cyan-400 to-teal-400",
    },
    {
        icon: TrendingUp,
        physics: "Momentum",
        business: "Data-Driven Action",
        desc: "Measurable growth backed by insights",
        gradient: "from-teal-400 to-emerald-400",
    },
];

const certifications = [
    {
        id: 1,
        icon: BadgeCheck,
        title: "MSME Registered",
        subtitle: "Micro, Small & Medium Enterprises",
        description:
            "Officially registered under the Ministry of MSME, Government of India. MSME was introduced under the Micro, Small and Medium Enterprises Development (MSMED) Act of 2006 to support and promote small businesses across India.",
        tag: "Ministry of MSME, Govt. of India",
        gradient: "from-orange-500 to-amber-400",
    },
    {
        id: 2,
        icon: Shield,
        title: "Sanstha Aadhaar",
        subtitle: "Rajasthan Business Register",
        description:
            "Registered with Sanstha Aadhaar (formerly Rajasthan Business Register) under the Government of Rajasthan, Directorate of Economics & Statistics — validating our official presence and business credibility in Rajasthan.",
        tag: "Government of Rajasthan",
        gradient: "from-blue-500 to-cyan-400",
    },
    {
        id: 3,
        icon: Award,
        title: "ISO 9001 Certified",
        subtitle: "International Organization for Standardization",
        description:
            "ISO 9001 certified for maintaining international quality management standards. ISO is a worldwide federation of national standards bodies that ensures we follow globally recognized best practices in service delivery.",
        tag: "International Standard",
        gradient: "from-yellow-500 to-amber-500",
    },
    {
        id: 4,
        icon: Building2,
        title: "NSIC Registered",
        subtitle: "National Small Industries Corporation",
        description:
            "Registered with NSIC which helps promote and support the MSME sector through schemes like Single Point Registration for Government Purchase, Marketing Support, and Credit Rating — enabling growth for small businesses in India.",
        tag: "Government of India",
        gradient: "from-emerald-500 to-green-400",
    },
];

// ============ COMPONENT ============
const AboutPage = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)]">
            {/* ==================== HERO ==================== */}
            <HeroSection />

            {/* ==================== COMPANY STORY ==================== */}
            <CompanyStory />

            {/* ==================== JOURNEY TIMELINE ==================== */}
            <JourneyTimeline />

            {/* ==================== FOUNDER SECTION ==================== */}
            <FounderSection />

            {/* ==================== PHILOSOPHY ==================== */}
            <PhilosophySection />

            {/* ==================== CERTIFICATIONS ==================== */}
            <CertificationsSection />

            {/* ==================== MISSION & VISION ==================== */}
            <MissionVision />

            {/* ==================== CTA ==================== */}
            <CTA />
        </section>
    );
};

// ============ HERO SECTION ============
const HeroSection = () => (
    <div className="relative w-full overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
                backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
                maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
            }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[var(--color-brand-500)]/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6"
            >
                <Sparkles size={12} className="text-[var(--color-brand-400)]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                    About Us
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1] tracking-tight mb-6"
            >
                The story behind{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
                    Digitee World
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed"
            >
                A journey that began with a simple mission — to bring smart, ethical,
                and result-oriented digital marketing to businesses across India.
            </motion.p>

            {/* Quick stats */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-3 mt-10"
            >
                {[
                    { icon: Calendar, label: "Founded", value: "June 2022" },
                    { icon: MapPin, label: "Locations", value: "Kota • Indore" },
                    { icon: Atom, label: "Framework", value: "Physics of Growth" },
                ].map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl"
                        >
                            <Icon size={14} className="text-[var(--color-brand-400)]" />
                            <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                                {stat.label}:
                            </span>
                            <span className="text-xs text-white font-semibold">{stat.value}</span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    </div>
);

// ============ COMPANY STORY ============
// ============ COMPANY STORY ============
const CompanyStory = () => (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[var(--color-brand-600)]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* ========== LEFT: CONTENT ========== */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 mb-5">
                        <div className="w-8 h-[1px] bg-[var(--color-brand-400)]" />
                        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-semibold">
                            Who We Are
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                        Powering brands from{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
                            Kota & Indore
                        </span>{" "}
                        to the world
                    </h2>

                    <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-8">
                        <p>
                            <span className="text-white font-semibold">Digitee World</span> is
                            a full-service Digital Marketing Company dedicated to helping
                            startups, local businesses, and established brands build a
                            powerful online presence and achieve measurable growth.
                        </p>
                        <p>
                            Our philosophy is rooted in what we proudly call the{" "}
                            <span className="text-[var(--color-brand-400)] font-semibold">
                                Physics of Business Growth
                            </span>{" "}
                            — every business grows through the right mix of strategy,
                            consistency, and data-driven action.
                        </p>
                    </div>

                    {/* Feature list */}
                    <div className="space-y-3">
                        {[
                            "Serving businesses across Rajasthan & Madhya Pradesh",
                            "Registered with MSME, Sanstha Aadhaar & ISO certified",
                            "Two branches for wider reach and personal touch",
                            "Ethical, transparent, and result-oriented approach",
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 flex-shrink-0 mt-0.5">
                                    <BadgeCheck size={12} className="text-[var(--color-brand-400)]" />
                                </div>
                                <span className="text-sm text-[var(--color-text-secondary)]">
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ========== RIGHT: ROTATING GLOBE ========== */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative flex items-center justify-center min-h-[500px]"
                >
                    <RotatingGlobe />
                </motion.div>
            </div>
        </div>
    </div>
);

// ============ ROTATING GLOBE COMPONENT ============
const RotatingGlobe = () => {
    return (
        <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-[var(--color-brand-500)]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-10 bg-[var(--color-accent-neon)]/15 rounded-full blur-[60px] pointer-events-none animate-pulse" />

            {/* Floating stat cards */}
            <FloatingStatCard
                className="top-[5%] -left-4 md:-left-12"
                delay={0.5}
                icon={MapPin}
                title="Kota"
                subtitle="Head Office"
            />
            <FloatingStatCard
                className="top-[45%] -right-4 md:-right-12"
                delay={0.7}
                icon={MapPin}
                title="Indore"
                subtitle="Corporate Office"
            />
            <FloatingStatCard
                className="bottom-[5%] left-1/2 -translate-x-1/2 md:left-[10%] md:translate-x-0"
                delay={0.9}
                icon={TrendingUp}
                title="Pan India"
                subtitle="Remote reach"
            />

            {/* Main globe */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center perspective-[1000px]">
                {/* Rotating outer rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-brand-400)]/30"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border border-[var(--color-brand-400)]/20"
                />

                {/* Main sphere */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.4)]">
                    {/* Base gradient sphere */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: `radial-gradient(circle at 30% 30%, 
                rgba(34, 211, 238, 0.8) 0%, 
                rgba(30, 159, 255, 0.6) 30%, 
                rgba(37, 99, 235, 0.4) 60%, 
                rgba(12, 30, 78, 0.9) 100%)`,
                        }}
                    />

                    {/* Grid overlay - latitude lines */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={`lat-${i}`}
                                className="absolute left-0 right-0 border-t border-[var(--color-brand-400)]/20"
                                style={{ top: `${(i + 1) * 14}%` }}
                            />
                        ))}
                        {/* Longitude lines */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={`lon-${i}`}
                                className="absolute top-0 bottom-0 border-l border-[var(--color-brand-400)]/15"
                                style={{
                                    left: `${(i + 1) * 11}%`,
                                    transform: `perspective(500px) rotateY(${i * 20}deg)`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Rotating texture layer */}
                    <motion.div
                        animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full opacity-40"
                        style={{
                            background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%),
                repeating-linear-gradient(90deg, 
                  transparent 0px, 
                  transparent 20px, 
                  rgba(34, 211, 238, 0.1) 20px, 
                  rgba(34, 211, 238, 0.1) 22px)`,
                            backgroundSize: "200% 100%",
                        }}
                    />

                    {/* Highlight/shine on top-left */}
                    <div
                        className="absolute top-4 left-4 w-24 h-24 rounded-full opacity-40"
                        style={{
                            background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)`,
                            filter: "blur(15px)",
                        }}
                    />

                    {/* Location markers on globe (Kota + Indore) */}
                    <div className="absolute inset-0">
                        {/* Kota marker */}
                        <div className="absolute top-[35%] left-[38%]">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[var(--color-brand-400)] rounded-full blur-md animate-ping opacity-75" />
                                <div className="relative w-3 h-3 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_10px_var(--color-brand-400)] border-2 border-white" />
                            </div>
                        </div>

                        {/* Indore marker */}
                        <div className="absolute top-[45%] left-[42%]">
                            <div className="relative">
                                <div
                                    className="absolute inset-0 bg-[var(--color-accent-neon)] rounded-full blur-md animate-ping opacity-75"
                                    style={{ animationDelay: "0.5s" }}
                                />
                                <div className="relative w-3 h-3 rounded-full bg-[var(--color-accent-neon)] shadow-[0_0_10px_var(--color-accent-neon)] border-2 border-white" />
                            </div>
                        </div>

                        {/* Small city dots (decorative) */}
                        {[
                            { top: "28%", left: "55%" },
                            { top: "55%", left: "35%" },
                            { top: "40%", left: "62%" },
                            { top: "60%", left: "48%" },
                            { top: "32%", left: "48%" },
                        ].map((pos, i) => (
                            <div
                                key={i}
                                className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
                                style={pos}
                            />
                        ))}
                    </div>

                    {/* Orbiting dot */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_20px_var(--color-brand-400)] border-2 border-white" />
                    </motion.div>
                </div>

                {/* Bottom label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-[var(--color-brand-400)]/30 shadow-lg z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider text-white font-semibold">
                        Live • Serving India
                    </span>
                </div>
            </div>
        </div>
    );
};

// ============ FLOATING STAT CARD ============
const FloatingStatCard = ({ className, delay, icon: Icon, title, subtitle }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute z-20 ${className}`}
    >
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
            className="flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center shadow-lg">
                <Icon size={14} className="text-white" />
            </div>
            <div>
                <p className="text-xs font-bold text-white leading-tight">{title}</p>
                <p className="text-[9px] text-white/60">{subtitle}</p>
            </div>
        </motion.div>
    </motion.div>
);

// ============ JOURNEY TIMELINE ============
const JourneyTimeline = () => (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-5">
                    <Calendar size={12} className="text-[var(--color-brand-400)]" />
                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                        Our Journey
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    From Kota to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                        all over India
                    </span>
                </h2>
            </motion.div>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-brand-500)]/50 via-[var(--color-brand-400)]/30 to-transparent" />

                <div className="space-y-8">
                    {journeyMilestones.map((milestone, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_20px_var(--color-brand-400)] border-4 border-[var(--color-bg-primary)] z-10" />

                            {/* Content */}
                            <div
                                className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                                    }`}
                            >
                                <div className="inline-block p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/30 transition-all">
                                    <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-brand-400)] mb-2">
                                        {milestone.year}
                                    </p>
                                    <p className="text-base text-white font-medium">
                                        {milestone.event}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// ============ FOUNDER SECTION ============
const FounderSection = () => (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-brand-500)]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-5">
                    <Sparkles size={12} className="text-[var(--color-brand-400)]" />
                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                        Meet The Founder
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    The vision behind{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                        Digitee World
                    </span>
                </h2>
            </motion.div>

            {/* Main split layout */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12">
                {/* Left: Founder image (2/5) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="lg:col-span-2 relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-brand-500)]/20 to-[var(--color-brand-400)]/10 rounded-3xl blur-2xl" />
                    <div className="relative rounded-3xl overflow-hidden border border-white/[0.08]">
                        <img
                            src={founderImages.main}
                            alt="Chanchal Singh - Founder & CEO of Digitee World"
                            className="w-full h-[500px] md:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* Info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-400)]/20 border border-[var(--color-brand-400)]/40 backdrop-blur-xl mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] animate-pulse" />
                                <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                                    Founder & CEO
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                                Chanchal Singh
                            </h3>
                            <p className="text-sm text-white/80">
                                Building Digitee World since 2022
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Bio content (3/5) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="lg:col-span-3"
                >
                    {/* Greeting */}
                    <div className="mb-6">
                        <p className="text-lg md:text-xl text-[var(--color-brand-400)] font-semibold mb-2">
                            Hi, I'm Chanchal Singh 👋
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                            Founder & CEO of Digitee World
                        </h3>
                    </div>

                    {/* Bio content */}
                    <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-8">
                        <p>
                            My entrepreneurial journey began in{" "}
                            <span className="text-white font-semibold">2022</span> when I
                            stepped into the digital marketing industry with a vision that
                            went far beyond offering marketing services. My goal was to build
                            a company that could transform businesses into{" "}
                            <span className="text-white font-semibold">trusted brands</span>{" "}
                            through innovation, strategy, and measurable results.
                        </p>

                        <p>
                            While pursuing my{" "}
                            <span className="text-white font-semibold">
                                BBA in Digital Marketing
                            </span>
                            , I simultaneously built Digitee World from the ground up and
                            proudly served in the{" "}
                            <span className="text-white font-semibold">
                                National Cadet Corps (NCC)
                            </span>{" "}
                            with 7 Raj. Air Squadron NCC Kota, where I earned the prestigious
                            rank of{" "}
                            <span className="text-[var(--color-brand-400)] font-semibold">
                                Cadet Warrant Officer
                            </span>
                            .
                        </p>

                        <p>
                            Successfully completing my NCC journey in 2026, I developed
                            leadership, discipline, responsibility, teamwork, confidence, and
                            the ability to perform under pressure — qualities that have become
                            the foundation of my entrepreneurial journey.
                        </p>

                        <p>
                            Today, Digitee World proudly operates through{" "}
                            <span className="text-white font-semibold">two branches</span>,
                            helping startups, local businesses, and growing brands strengthen
                            their digital presence and achieve sustainable business growth.
                        </p>
                    </div>

                    {/* Journey highlights */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {[
                            { icon: Rocket, label: "Founded", value: "2022" },
                            { icon: Award, label: "NCC Rank", value: "CWO" },
                            { icon: BadgeCheck, label: "Education", value: "BBA DM" },
                            { icon: Building2, label: "Branches", value: "2" },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[var(--color-brand-400)]/30 transition-all"
                                >
                                    <Icon
                                        size={14}
                                        className="text-[var(--color-brand-400)] mb-2"
                                    />
                                    <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                                        {item.label}
                                    </p>
                                    <p className="text-sm text-white font-bold">{item.value}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Traits */}
                    <div>
                        <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-3">
                            Core Values from NCC & Journey
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Leadership",
                                "Discipline",
                                "Responsibility",
                                "Teamwork",
                                "Confidence",
                                "Execution",
                            ].map((trait) => (
                                <span
                                    key={trait}
                                    className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white font-medium hover:border-[var(--color-brand-400)]/40 hover:bg-[var(--color-brand-400)]/5 transition-all"
                                >
                                    {trait}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Journey story block */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden mb-12"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-500)]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative">
                    <Quote
                        size={32}
                        className="text-[var(--color-brand-400)]/40 mb-4"
                    />
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 italic">
                        "Managing academics, NCC responsibilities, and a growing business at
                        the same time was never easy, but every challenge strengthened my
                        determination to create something meaningful. From working with my
                        first clients to building a trusted digital marketing company, every
                        milestone has been driven by{" "}
                        <span className="text-white font-semibold not-italic">
                            consistency, learning, and a commitment to excellence
                        </span>
                        ."
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center font-bold text-white text-sm shadow-lg">
                            CS
                        </div>
                        <div>
                            <p className="text-sm text-white font-semibold">Chanchal Singh</p>
                            <p className="text-xs text-[var(--color-text-muted)]">
                                Founder & CEO, Digitee World
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Philosophy block */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-brand-500)]/[0.08] to-[var(--color-brand-400)]/[0.03] border border-[var(--color-brand-400)]/20 backdrop-blur-xl overflow-hidden mb-12"
            >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-brand-500)]/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--color-accent-neon)]/15 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative grid md:grid-cols-3 gap-6 items-center">
                    {/* Left: Atom icon */}
                    <div className="flex justify-center md:justify-start">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                            <Atom size={44} className="text-white" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 mb-3">
                            <Sparkles size={12} className="text-[var(--color-brand-400)]" />
                            <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                                Our Philosophy
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                            Physics of Business Growth
                        </h3>

                        <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-3">
                            At Digitee World, we believe that business growth follows
                            principles just like the laws of physics. When the right{" "}
                            <span className="text-white font-semibold">strategy</span>,
                            consistent <span className="text-white font-semibold">execution</span>,
                            <span className="text-white font-semibold"> innovation</span>,
                            technology, and{" "}
                            <span className="text-white font-semibold">trust</span> work
                            together, they create unstoppable momentum that drives long-term
                            success.
                        </p>

                        <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                            Sustainable growth is never based on luck — it's the result of the
                            perfect balance between{" "}
                            <span className="text-[var(--color-brand-400)] font-semibold">
                                data, creativity, consistency, and execution
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Signature Quote */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.06] text-center mb-12"
            >
                <Quote
                    size={40}
                    className="text-[var(--color-brand-400)]/40 mx-auto mb-4"
                />
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                    "We don't just market businesses —{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                        we engineer their growth.
                    </span>
                    "
                </p>
                <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-[0.3em]">
                    — Chanchal Singh
                </p>
            </motion.div>

            {/* Award gallery — 3 images */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
            >
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                        <Award size={12} className="text-[var(--color-brand-400)]" />
                        <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-medium">
                            Recognition & Milestones
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { img: founderImages.award1, label: "Recognition Moment" },
                        { img: founderImages.award2, label: "Certificate Achievement" },
                        { img: founderImages.award3, label: "Award Ceremony" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[var(--color-brand-400)]/40 transition-all"
                        >
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-sm text-white font-semibold">{item.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </div>
);

// ============ PHILOSOPHY SECTION ============
const PhilosophySection = () => (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-5">
                    <Atom size={12} className="text-[var(--color-brand-400)]" />
                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                        Our Framework
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                    Physics of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                        Business Growth
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-base text-[var(--color-text-secondary)]">
                    Our unique approach that treats business growth like a physical system.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
                {philosophyPrinciples.map((principle, i) => {
                    const Icon = principle.icon;
                    return (
                        <motion.div
                            key={principle.physics}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 transition-all"
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                            >
                                <Icon size={24} className="text-white" />
                            </div>

                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-brand-400)]">
                                    {principle.physics}
                                </span>
                                <span className="text-[var(--color-text-muted)]">→</span>
                                <span className="text-xl font-bold text-white">
                                    {principle.business}
                                </span>
                            </div>

                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                {principle.desc}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </div>
);

// ============ CERTIFICATIONS SECTION ============
const CertificationsSection = () => (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--color-brand-600)]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-5">
                    <BadgeCheck size={12} className="text-[var(--color-brand-400)]" />
                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                        Certifications & Registrations
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                    Officially Registered &{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                        Certified
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-base text-[var(--color-text-secondary)]">
                    We are registered with MSME and Rajasthan Sanstha Aadhaar — backed by
                    government recognition and international quality standards.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
                {certifications.map((cert, i) => (
                    <CertCard key={cert.id} cert={cert} index={i} />
                ))}
            </div>

            {/* Trust badges strip */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl text-center"
            >
                <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-white font-semibold">
                        Trusted by government bodies
                    </span>{" "}
                    — Ministry of MSME, Government of Rajasthan, and NSIC. Certified by
                    ISO 9001 for international quality standards.
                </p>
            </motion.div>
        </div>
    </div>
);

// ============ CERT CARD ============
const CertCard = ({ cert, index }) => {
    const Icon = cert.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 md:p-7 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
        >
            {/* Gradient hover */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none`}
            />

            <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                    <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                    >
                        <Icon size={26} className="text-white" />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1">
                            {cert.title}
                        </h3>
                        <p className="text-xs text-[var(--color-brand-400)] font-semibold uppercase tracking-wider">
                            {cert.subtitle}
                        </p>
                    </div>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {cert.description}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    <BadgeCheck size={12} className="text-[var(--color-brand-400)]" />
                    <span className="text-xs text-white font-medium">{cert.tag}</span>
                </div>
            </div>
        </motion.div>
    );
};

// ============ MISSION & VISION ============
const MissionVision = () => (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 gap-5">
                {[
                    {
                        icon: Rocket,
                        badge: "Our Mission",
                        title: "Empower every business with digital growth",
                        desc: "To deliver smart, ethical, and result-oriented digital marketing solutions that help startups, local businesses, and established brands build lasting online presence and achieve measurable growth.",
                        gradient: "from-blue-500 to-cyan-400",
                    },
                    {
                        icon: Eye,
                        badge: "Our Vision",
                        title: "Become India's most trusted digital growth partner",
                        desc: "To be recognized as the go-to digital marketing partner for businesses across India — known for transparency, innovation, ethical practices, and consistent delivery of real business results.",
                        gradient: "from-violet-500 to-purple-500",
                    },
                ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.badge}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden"
                        >
                            <div
                                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-3xl pointer-events-none`}
                            />

                            <div className="relative">
                                <div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                                >
                                    <Icon size={24} className="text-white" />
                                </div>

                                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-brand-400)] font-bold mb-3">
                                    {item.badge}
                                </p>

                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </div>
);

// ============ CTA ============
const CTA = () => (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-brand-500)]/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-5">
                    Ready to work{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                        with us?
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                    Join the businesses that trust Digitee World for their digital growth
                    journey.
                </p>

                <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105"
                >
                    <span className="relative z-10">Get in Touch</span>
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
    </div>
);

export default AboutPage;