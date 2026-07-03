import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  CreditCard,
  Search,
  MapPin,
} from "lucide-react";

import { FaInstagram, FaWhatsapp, FaYoutube, FaGoogle } from "react-icons/fa";
import { SiGoogleads, SiMeta } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";

// ============ DATA ============
const services = [
  {
    id: 1,
    number: "01",
    icon: FaGoogle,
    name: "Google Business Profile",
    tagline: "GMB + Business Listing",
    description:
      "Complete Google Business Profile setup, optimization, posting, review strategy, and business listing management to improve local visibility and Google Maps rankings.",
    gradient: "from-blue-500 to-cyan-400",
    slug: "gmb-optimization",
  },
  {
    id: 2,
    number: "02",
    icon: Globe,
    name: "Website Development",
    tagline: "Landing • Basic • Pro • E-commerce",
    description:
      "Custom websites built for performance and conversion — from landing pages and basic websites to professional business sites and full e-commerce stores.",
    gradient: "from-cyan-400 to-teal-400",
    slug: "website-development",
  },
  {
    id: 3,
    number: "03",
    icon: FaInstagram,
    name: "Social Media Marketing",
    tagline: "Content • Growth • Branding",
    description:
      "Strategic social media management for Instagram, Facebook, and LinkedIn with content planning, creatives, posting, and brand growth.",
    gradient: "from-pink-500 to-rose-400",
    slug: "social-media-marketing",
  },
  {
    id: 4,
    number: "04",
    icon: FaWhatsapp,
    name: "WhatsApp Marketing",
    tagline: "Instant Customer Reach",
    description:
      "Reach your audience directly with WhatsApp campaigns, catalog setup, broadcasts, automation flows, and customer engagement systems.",
    gradient: "from-green-500 to-emerald-400",
    slug: "whatsapp-marketing",
  },
  {
    id: 5,
    number: "05",
    icon: TbTargetArrow,
    name: "Google & Meta Ads",
    tagline: "Paid Campaigns That Convert",
    description:
      "Performance-focused ad campaigns across Google, Facebook, and Instagram designed to generate leads, sales, and measurable ROI.",
    gradient: "from-orange-500 to-amber-400",
    slug: "google-meta-ads",
  },
  {
    id: 6,
    number: "06",
    icon: FaYoutube,
    name: "YouTube Marketing",
    tagline: "Video Visibility & Growth",
    description:
      "YouTube strategy, video optimization, channel branding, and ad support to help businesses grow through video content and reach.",
    gradient: "from-red-500 to-pink-500",
    slug: "youtube-marketing",
  },
  {
    id: 7,
    number: "07",
    icon: CreditCard,
    name: "Digital Business Card",
    tagline: "Smart Networking",
    description:
      "Modern digital business cards with contact details, social links, maps, website access, and brand identity — all in one shareable format.",
    gradient: "from-violet-500 to-purple-500",
    slug: "digital-business-card",
  },
  {
    id: 8,
    number: "08",
    icon: Search,
    name: "Search Engine Optimization",
    tagline: "Rank Higher Organically",
    description:
      "SEO strategies including on-page, local, technical, and keyword optimization to improve search rankings and attract quality traffic.",
    gradient: "from-indigo-500 to-blue-500",
    slug: "seo-services",
  },
];

// ============ COMPONENT ============
const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--color-brand-500)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6">
              <Sparkles size={12} className="text-[var(--color-brand-400)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                Our Services
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Services built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
                real business growth
              </span>
            </h2>

            <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              From local presence to paid campaigns, we provide focused digital
              solutions that help businesses build visibility, generate trust,
              and grow consistently.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[var(--color-brand-400)]/50 hover:bg-white/[0.05] transition-all duration-500 flex-shrink-0 self-start"
          >
            <span className="text-white font-medium text-sm">
              Explore Services
            </span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] group-hover:shadow-[0_0_20px_var(--color-brand-400)] transition-all">
              <ArrowUpRight
                size={14}
                className="text-white transition-transform duration-500 group-hover:rotate-45"
              />
            </span>
          </Link>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-20 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-500)]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent-neon)]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Need the right service mix for your business?
              </h3>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)]">
                Let’s discuss your goals and suggest the best digital strategy
                for your business.
              </p>
            </div>

            <Link
              to="/contact"
              className="group relative flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105 flex-shrink-0"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ CARD ============
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full"
    >
      <Link
        to={`/services/${service.slug}`}
        className="relative flex flex-col h-full p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`}
        />

        <div className="relative flex items-start justify-between mb-6">
          <span className="text-xs font-mono text-[var(--color-brand-400)] tracking-widest">
            {service.number}
          </span>
          <ArrowUpRight
            size={18}
            className="text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-400)] group-hover:rotate-45 transition-all duration-500"
          />
        </div>

        <div className="relative mb-5">
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
          >
            <Icon size={22} className="text-white" />
          </div>
        </div>

        <div className="relative flex-1 flex flex-col">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
            {service.name}
          </h3>

          <p className="text-[11px] uppercase tracking-wider text-[var(--color-brand-400)] font-semibold mb-3">
            {service.tagline}
          </p>

          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
            {service.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-400)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
    </motion.div>
  );
};

// ============ CUSTOM ADS ICON ============
function AdsIcon(props) {
  return (
    <div className="relative flex items-center justify-center">
      <SiGoogleads {...props} className="text-white absolute -left-[5px]" />
      <SiMeta {...props} className="text-white absolute left-[5px] opacity-90" />
    </div>
  );
}

export default Services;