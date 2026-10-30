import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import {
  TrendingUp,
  Award,
  ArrowUpRight,
  Search,
  Expand,
  X,
  MapPin,
  Clock,
  Target,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { portfolioItems, categories } from "../constants/portfolio";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleOpenProjectLightbox = (project, startIdx = 0) => {
    const slides =
      project.images && project.images.length > 0
        ? project.images.map((img) => ({
            src: img.src,
            alt: img.alt || project.title,
            title: img.caption || project.title,
          }))
        : [
            {
              src: project.image,
              alt: project.title,
              title: project.title,
              description: project.description,
            },
          ];
    setLightboxSlides(slides);
    setLightboxIndex(startIdx);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] pb-20 md:pb-28">
      <SEO
        title="Client Success Stories & Case Studies | Digitee World Portfolio"
        description="Explore verified client case studies and digital marketing results from Digitee World: organic social media scaling, YouTube channel growth, and local SEO top rankings."
        path="/portfolio"
        keywords="digital marketing portfolio, client case studies Rajasthan, social media growth portfolio, local SEO results Kota, YouTube marketing results, marketing campaign proof"
      />
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
            A collection of successful projects across social media marketing,
            YouTube scaling, and Google Business Profile local SEO — delivering
            measurable growth for real businesses.
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
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "bg-white/[0.03] border border-white/[0.08] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-400)]/40 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat ? "bg-white/20" : "bg-white/[0.05]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* ============ PORTFOLIO GRID — 4 cols on desktop ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={i}
                onOpenModal={(proj) => setSelectedProject(proj)}
                onImageClick={(proj) => handleOpenProjectLightbox(proj, 0)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--color-text-muted)]">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* ============ SEO HIGHLIGHT BLOCK ============ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-3">
            <Award size={14} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold">
              Proven Local & Pan-India Results
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Measurable ROI for Regional & Nationwide Brands
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-5">
            Our portfolio demonstrates verified growth milestones across social media marketing, YouTube audience scaling, and Google Business Profile local SEO in Kota and Central India. From industrial manufacturers like Sethiya Industries to lifestyle and retail brands, each project represents measurable reach, high engagement, and consistent lead generation.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-[var(--color-brand-400)] hover:text-white transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-[var(--color-brand-400)] hover:text-white transition-colors"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </motion.div>
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
                href="https://wa.me/917297988805"
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

      {/* ============ PROJECT DETAIL MODAL ============ */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenLightbox={(proj, idx) => handleOpenProjectLightbox(proj, idx)}
          />
        )}
      </AnimatePresence>

      {/* ============ LIGHTBOX ============ */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={lightboxSlides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </section>
  );
};

// ============ PORTFOLIO CARD (Mobile Screenshot Optimized) ============
const PortfolioCard = ({ item, index, onOpenModal, onImageClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Gradient hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`}
      />

      {/* ============ IMAGE — Mobile Screenshot Container ============ */}
      <button
        type="button"
        onClick={() => onImageClick(item)}
        className="relative w-full bg-gradient-to-br from-black/60 to-black/30 overflow-hidden cursor-zoom-in flex items-center justify-center p-4"
        style={{ minHeight: "320px" }}
        aria-label={`View ${item.title} image`}
      >
        {/* Image with max-height to prevent stretching */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="max-h-[300px] w-auto object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-700"
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 z-10">
          <span className="text-[10px] uppercase tracking-wider text-white font-bold">
            {item.badge || item.category}
          </span>
        </div>

        {/* Expand icon on hover */}
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <Expand size={14} />
        </div>
      </button>

      {/* ============ CONTENT ============ */}
      <div className="relative p-4 flex flex-col flex-1">
        {/* Client & Location */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold">
            {item.client}
          </p>
          {item.location && (
            <span className="text-[9px] text-[var(--color-text-muted)] font-medium">
              {item.location}
            </span>
          )}
        </div>

        {/* Title */}
        <button
          type="button"
          onClick={() => onOpenModal(item)}
          className="text-left w-full group/title"
        >
          <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover/title:text-[var(--color-brand-400)] transition-colors line-clamp-2 min-h-[2.75rem]">
            {item.title}
          </h3>
        </button>

        {/* Short description */}
        {item.description && (
          <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mb-3 leading-relaxed">
            {item.description}
          </p>
        )}

        {/* Stats — Compact 2 columns */}
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {item.stats.slice(0, 2).map((stat, i) => (
            <div
              key={i}
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center"
            >
              <p className="text-xs font-bold text-white leading-tight">
                {stat.value}
              </p>
              <p className="text-[8px] uppercase tracking-wider text-[var(--color-text-muted)] mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Keyword pill (for Local SEO) */}
        {item.keyword && (
          <div className="mb-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/[0.03] border border-[var(--color-brand-400)]/20 self-start">
            <Search size={9} className="text-[var(--color-brand-400)]" />
            <span className="text-[10px] text-white font-medium italic line-clamp-1">
              "{item.keyword}"
            </span>
          </div>
        )}

        {/* Action Button: Explore Results / View Project / View Case Study */}
        <button
          type="button"
          onClick={() => onOpenModal(item)}
          className="mt-auto group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[var(--color-brand-400)]/50 hover:bg-white/[0.05] transition-all duration-300 w-full cursor-pointer"
        >
          <span className="text-white text-[11px] font-semibold">
            {item.buttonText || "View Case Study"}
          </span>
          <ArrowUpRight
            size={11}
            className="text-[var(--color-brand-400)] group-hover/btn:rotate-45 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Bottom shine */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-400)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// ============ PROJECT DETAIL MODAL ============
const ProjectDetailModal = ({ project, onClose, onOpenLightbox }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : [
          {
            src: project.image,
            alt: project.title,
            caption: project.title,
            type: "main",
          },
        ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--color-bg-secondary)] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto my-auto text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 hover:border-[var(--color-brand-400)]/50 hover:bg-white/10 flex items-center justify-center text-white transition-all z-20 cursor-pointer"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand-400)]">
              {project.badge || project.category}
            </span>
            <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
              {project.client}
            </span>
            {project.location && (
              <>
                <span className="text-xs text-[var(--color-text-muted)]">•</span>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                  <MapPin size={11} className="text-[var(--color-brand-400)]" />
                  {project.location}
                </span>
              </>
            )}
            {project.duration && (
              <>
                <span className="text-xs text-[var(--color-text-muted)]">•</span>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                  <Clock size={11} />
                  {project.duration}
                </span>
              </>
            )}
          </div>

          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight"
          >
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
            {project.description}
          </p>

          {project.achievement && (
            <div className="mt-3 p-3.5 rounded-xl bg-[var(--color-brand-500)]/10 border border-[var(--color-brand-400)]/20 text-xs sm:text-sm text-[var(--color-brand-200)] flex items-center gap-2.5">
              <Award size={16} className="text-[var(--color-brand-400)] shrink-0" />
              <span className="font-medium">{project.achievement}</span>
            </div>
          )}

          {project.keyword && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-[var(--color-brand-400)]/30">
              <Search size={12} className="text-[var(--color-brand-400)]" />
              <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                Target Keyword:
              </span>
              <span className="text-xs text-white font-semibold italic">
                "{project.keyword}"
              </span>
            </div>
          )}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {project.stats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
            >
              <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Showcase Gallery */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-400)]">
              Verified Project Showcase ({projectImages.length}{" "}
              {projectImages.length === 1 ? "Screenshot" : "Screenshots"})
            </h3>
            <span className="text-[11px] text-[var(--color-text-muted)] hidden sm:inline">
              Click any image to view in full resolution lightbox
            </span>
          </div>

          <div
            className={`grid gap-4 ${
              projectImages.length === 1
                ? "grid-cols-1 max-w-lg mx-auto"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {projectImages.map((img, i) => (
              <div
                key={i}
                onClick={() => onOpenLightbox(project, i)}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[var(--color-brand-400)]/50 bg-black/40 p-3 sm:p-4 cursor-zoom-in transition-all duration-300 flex flex-col items-center justify-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-h-[380px] w-auto max-w-full object-contain rounded-xl shadow-xl group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-xs text-white font-medium line-clamp-1">
                      {img.caption || img.alt}
                    </span>
                    <Expand
                      size={14}
                      className="text-[var(--color-brand-400)] ml-2 shrink-0"
                    />
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs font-semibold text-white/90">
                    {img.caption || `Image ${i + 1}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {project.challenge && (
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <Target size={14} className="text-[var(--color-brand-400)]" />
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                  The Challenge
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={14} className="text-[var(--color-brand-400)]" />
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                  Our Strategy & Execution
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {/* Results Checklist */}
        {project.results && (
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)]/[0.08] to-[var(--color-brand-400)]/[0.03] border border-[var(--color-brand-400)]/20 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={16} className="text-[var(--color-brand-400)]" />
              <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold">
                Measurable Results Delivered
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[var(--color-brand-400)] shrink-0 mt-0.5"
                  />
                  <span className="text-xs sm:text-sm text-white leading-relaxed">
                    {res}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
          <Link
            to={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs text-[var(--color-brand-400)] hover:underline font-semibold"
          >
            <span>View Dedicated Case Study Page</span>
            <ExternalLink size={12} />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white text-xs font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={13} />
            </Link>
            <a
              href="https://wa.me/917297988805"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-green-500/40 text-xs font-semibold text-white transition-all"
            >
              <FaWhatsapp size={13} className="text-green-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioPage;
