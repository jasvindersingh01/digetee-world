import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    Sparkles,
    Search,
    CheckCircle2,
    Zap,
    Clock,
    Target,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ============ SERVICES DATA ============
const services = [
    {
        id: 1,
        number: "01",
        slug: "gmb-optimization",
        name: "Google Business Profile",
        tagline: "GMB Optimization & Business Listing",
        shortDesc:
            "Complete GMB setup, optimization, posts, review strategy, and business listing management to improve local visibility.",
        features: [
            "Profile setup & verification",
            "Post management & updates",
            "Review strategy & response",
            "Business listing on 50+ platforms",
            "Local SEO optimization",
            "Google Maps ranking",
        ],
        timeline: "1.5 Months for Ranking",
        category: "Local SEO",
        gradient: "from-blue-500 to-cyan-400",
        image: "/services/gmb.jfif",
    },
    {
        id: 2,
        number: "02",
        slug: "website-development",
        name: "Website Development",
        tagline: "Landing • Basic • Pro • E-commerce",
        shortDesc:
            "Custom websites built for performance and conversion — from landing pages to full e-commerce stores.",
        features: [
            "Responsive design (mobile-first)",
            "SEO-optimized structure",
            "Fast loading & performance",
            "Payment gateway integration",
            "CMS for easy management",
            "Free SSL & hosting setup",
        ],
        timeline: "1-2 Weeks Delivery",
        category: "Development",
        gradient: "from-cyan-400 to-teal-400",
        image: "/services/website.jfif",
    },
    {
        id: 3,
        number: "03",
        slug: "social-media-marketing",
        name: "Social Media Marketing",
        tagline: "Content • Growth • Branding",
        shortDesc:
            "Strategic social media management for Instagram, Facebook, and LinkedIn with content, creatives, and brand growth.",
        features: [
            "Content calendar planning",
            "Creative design & videos",
            "Regular posting schedule",
            "Community management",
            "Hashtag & trend research",
            "Monthly performance reports",
        ],
        timeline: "Results in 30-60 Days",
        category: "Marketing",
        gradient: "from-pink-500 to-rose-400",
        image: "/services/social-media.jfif",
    },
    {
        id: 4,
        number: "04",
        slug: "whatsapp-marketing",
        name: "WhatsApp Marketing",
        tagline: "Instant Customer Reach",
        shortDesc:
            "Reach your audience directly with WhatsApp campaigns, catalog setup, broadcasts, and automation flows.",
        features: [
            "WhatsApp Business API setup",
            "Bulk broadcast campaigns",
            "Catalog & product listings",
            "Automated chat flows",
            "Customer segmentation",
            "Analytics & reporting",
        ],
        timeline: "Live in 3-5 Days",
        category: "Marketing",
        gradient: "from-green-500 to-emerald-400",
        image: "/services/whatsapp.jfif",
    },
    {
        id: 5,
        number: "05",
        slug: "google-meta-ads",
        name: "Google & Meta Ads",
        tagline: "Paid Campaigns That Convert",
        shortDesc:
            "Performance-focused ad campaigns across Google, Facebook, and Instagram designed to generate leads and sales.",
        features: [
            "Campaign strategy & setup",
            "Ad creative design",
            "Keyword & audience research",
            "A/B testing & optimization",
            "Conversion tracking",
            "Weekly performance reports",
        ],
        timeline: "Results in 7-14 Days",
        category: "Paid Ads",
        gradient: "from-orange-500 to-amber-400",
        image: "/services/googleads.jfif",
    },
    {
        id: 6,
        number: "06",
        slug: "youtube-marketing",
        name: "YouTube Marketing",
        tagline: "Video Visibility & Growth",
        shortDesc:
            "YouTube strategy, video optimization, channel branding, and ads to grow your business through video content.",
        features: [
            "Channel setup & branding",
            "Video SEO optimization",
            "Thumbnail & title strategy",
            "YouTube Ads management",
            "Content calendar",
            "Subscriber growth strategy",
        ],
        timeline: "Growth in 45-90 Days",
        category: "Marketing",
        gradient: "from-red-500 to-pink-500",
        image: "/services/youtube.jfif",
    },
    {
        id: 7,
        number: "07",
        slug: "digital-business-card",
        name: "Digital Business Card",
        tagline: "Smart Networking",
        shortDesc:
            "Modern digital business cards with contact details, social links, maps, and website access in one shareable format.",
        features: [
            "Custom design & branding",
            "QR code integration",
            "Contact info & social links",
            "Google Maps integration",
            "Analytics tracking",
            "Easy sharing (WhatsApp, Email)",
        ],
        timeline: "Ready in 24-48 Hours",
        category: "Branding",
        gradient: "from-violet-500 to-purple-500",
        image: "/services/digitalcard.jfif",
    },
    {
        id: 8,
        number: "08",
        slug: "seo-services",
        name: "Search Engine Optimization",
        tagline: "Rank Higher Organically",
        shortDesc:
            "SEO strategies including on-page, local, technical, and keyword optimization to boost search rankings.",
        features: [
            "Keyword research & strategy",
            "On-page optimization",
            "Technical SEO audit",
            "Local SEO for Kota/Indore",
            "Backlink building",
            "Monthly ranking reports",
        ],
        timeline: "3 Months for Results",
        category: "SEO",
        gradient: "from-indigo-500 to-blue-500",
        image: "/services/seo.jfif",
    },
];

const categories = ["All", "Local SEO", "Development", "Marketing", "Paid Ads", "Branding", "SEO"];

// ============ COMPONENT ============
const ServicesPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredServices =
        activeCategory === "All"
            ? services
            : services.filter((s) => s.category === activeCategory);

    return (
        <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)]">
            {/* ============ HERO ============ */}
            <HeroSection />

            {/* ============ CATEGORIES ============ */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 m-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-2"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                                    ? "bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                                    : "bg-white/[0.03] border border-white/[0.08] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-400)]/40 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* ============ SERVICES LIST ============ */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28">
                <div className="space-y-6 md:space-y-8">
                    {filteredServices.map((service, i) => (
                        <ServiceRow key={service.id} service={service} index={i} />
                    ))}
                </div>
            </div>

            {/* ============ CTA ============ */}
            <CTASection />
        </section>
    );
};

// ============ HERO ============
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
                    Our Services
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1] tracking-tight mb-6"
            >
                Everything you need for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
                    digital growth
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed"
            >
                From local SEO to WhatsApp marketing — we deliver end-to-end digital
                marketing services designed to help your business grow consistently.
            </motion.p>
        </div>
    </div>
);

// ============ SERVICE ROW ============
// ============ SERVICE ROW ============
const ServiceRow = ({ service, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
        >
            {/* Gradient hover glow */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}
            />

            <div
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-10 lg:p-12 ${isEven ? "" : "lg:[direction:rtl]"
                    }`}
            >
                {/* ========== IMAGE SIDE (CIRCLE) ========== */}
                <div className="relative flex items-center justify-center lg:[direction:ltr] min-h-[380px]">
                    {/* Outer glow behind circle */}
                    <div
                        className={`absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br ${service.gradient} opacity-25 rounded-full blur-[80px]`}
                    />

                    {/* Rotating outer ring (dashed) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border-2 border-dashed border-[var(--color-brand-400)]/25"
                    />

                    {/* Rotating middle ring (solid, opposite direction) */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full border border-[var(--color-brand-400)]/20"
                    />

                    {/* Rotating inner ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[280px] h-[280px] md:w-[330px] md:h-[330px] rounded-full border border-[var(--color-brand-400)]/15"
                    />

                    {/* Orbiting dot #1 */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px]"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_20px_var(--color-brand-400)] border-2 border-black" />
                    </motion.div>

                    {/* Orbiting dot #2 (opposite side) */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px]"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--color-accent-neon)] shadow-[0_0_15px_var(--color-accent-neon)] border-2 border-black" />
                    </motion.div>

                    {/* Circular Image with floating animation */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_20px_60px_rgba(34,211,238,0.35)] group-hover:scale-105 group-hover:border-[var(--color-brand-400)]/40 transition-all duration-700 z-10"
                    >
                        <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Subtle gradient overlay for polish */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </motion.div>

                    {/* Floating timeline badge */}
                    <div className="absolute bottom-6 md:bottom-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-[var(--color-brand-400)]/30 shadow-lg z-20">
                        <Clock size={10} className="text-[var(--color-brand-400)]" />
                        <span className="text-[10px] text-white font-semibold whitespace-nowrap">
                            {service.timeline}
                        </span>
                    </div>
                </div>

                {/* ========== CONTENT SIDE ========== */}
                <div className="relative lg:[direction:ltr]">
                    {/* Number + Category */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-[var(--color-brand-400)] tracking-widest">
                            {service.number}
                        </span>
                        <span className="w-6 h-[1px] bg-white/20" />
                        <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                            {service.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        {service.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm uppercase tracking-wider text-[var(--color-brand-400)] font-semibold mb-4">
                        {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                        {service.shortDesc}
                    </p>

                    {/* Features grid */}
                    <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                        {service.features.map((feature, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                            >
                                <CheckCircle2
                                    size={14}
                                    className="text-[var(--color-brand-400)] flex-shrink-0"
                                />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            to={`/services/${service.slug}`}
                            className="group/btn inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold text-sm overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-500"
                        >
                            <span>Learn More</span>
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm group-hover/btn:bg-white/30 transition-all">
                                <ArrowUpRight
                                    size={12}
                                    className="text-white transition-transform duration-500 group-hover/btn:rotate-45"
                                />
                            </span>
                        </Link>

                        <a
                            href={`https://wa.me/919876543210?text=Hi%20Digitee%20World,%20I'm%20interested%20in%20${encodeURIComponent(
                                service.name
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300"
                        >
                            <FaWhatsapp size={14} className="text-green-400" />
                            <span className="text-white text-sm font-medium">Get Quote</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
// ============ CTA SECTION ============
const CTASection = () => (
    <div className="relative w-full overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[var(--color-brand-500)]/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative p-8 md:p-14 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden text-center"
            >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-brand-500)]/25 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-accent-neon)]/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-[var(--color-brand-400)]/30 backdrop-blur-xl mb-6">
                        <Target size={14} className="text-[var(--color-brand-400)]" />
                        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-bold">
                            Ready to Start?
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] mb-4">
                        Not sure which service{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                            fits your business?
                        </span>
                    </h2>

                    <p className="max-w-xl mx-auto text-base text-[var(--color-text-secondary)] leading-relaxed mb-8">
                        Book a free 30-minute strategy call and we'll suggest the best mix
                        of services tailored to your goals.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="group relative flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105"
                        >
                            <Zap size={16} />
                            <span>Book Free Strategy Call</span>
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                                <ArrowUpRight
                                    size={16}
                                    className="text-white transition-transform duration-500 group-hover:rotate-45"
                                />
                            </span>
                        </Link>

                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-500"
                        >
                            <FaWhatsapp size={16} className="text-green-400" />
                            <span className="text-white font-medium text-sm">
                                Chat on WhatsApp
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
);

export default ServicesPage;