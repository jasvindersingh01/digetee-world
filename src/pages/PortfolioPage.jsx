import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  TrendingUp,
  Award,
  ArrowUpRight,
  Search,
  Expand,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { portfolioItems, categories } from "../constants/portfolio";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Lightbox slides
  const slides = filteredItems.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] pb-20 md:pb-28">
      {/* ============ HERO ============ */}
      <div className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
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
            <Award size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5"
          >
            Real work.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              Real results.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed"
          >
            A collection of successful projects across social media, YouTube,
            and local SEO — delivering measurable growth for real businesses.
          </motion.p>
        </div>
      </div>

      {/* ============ CATEGORIES ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? portfolioItems.length
                : portfolioItems.filter((i) => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "bg-white/[0.03] border border-white/[0.08] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-400)]/40 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat
                      ? "bg-white/20"
                      : "bg-white/[0.05]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* ============ PORTFOLIO GRID ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={i}
                onImageClick={() => setLightboxIndex(i)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--color-text-muted)]">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* ============ CTA ============ */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-brand-500)]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-accent-neon)]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-[var(--color-brand-400)]/30 backdrop-blur-xl mb-5">
              <TrendingUp size={14} className="text-[var(--color-brand-400)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-bold">
                Your Success Story Next?
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Let's create your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                growth story
              </span>
            </h3>

            <p className="max-w-xl mx-auto text-base text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Ready to see your business here? Let's discuss how we can achieve
              similar results for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group relative flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105"
              >
                <span>Start Your Project</span>
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

      {/* ============ LIGHTBOX ============ */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </section>
  );
};

// ============ PORTFOLIO CARD ============
const PortfolioCard = ({ item, index, onImageClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Gradient hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`}
      />

      {/* ============ IMAGE — FULL VISIBLE ============ */}
      <button
        onClick={onImageClick}
        className="relative w-full bg-black/40 overflow-hidden cursor-zoom-in"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 z-10">
          <span className="text-[10px] uppercase tracking-wider text-white font-bold">
            {item.category}
          </span>
        </div>

        {/* Expand icon on hover */}
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <Expand size={14} />
        </div>
      </button>

      {/* ============ CONTENT ============ */}
      <div className="relative p-5 flex flex-col flex-1">
        {/* Client name */}
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold mb-2">
          {item.client}
        </p>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
          {item.title}
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {item.stats.map((stat, i) => (
            <div
              key={i}
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
            >
              <p className="text-sm md:text-base font-bold text-white leading-tight">
                {stat.value}
              </p>
              <p className="text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Keyword pill (for Local SEO) */}
        {item.keyword && (
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-[var(--color-brand-400)]/20 self-start">
            <Search size={10} className="text-[var(--color-brand-400)]" />
            <span className="text-[11px] text-white font-medium italic">
              "{item.keyword}"
            </span>
          </div>
        )}
      </div>

      {/* Bottom shine */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-400)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default PortfolioPage;