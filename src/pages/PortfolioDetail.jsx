import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Clock,
  Search,
  Expand,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  getPortfolioBySlug,
  getRelatedProjects,
} from "../constants/portfolio";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const project = getPortfolioBySlug(slug);

  if (!project) return <Navigate to="/portfolio" replace />;

  const relatedProjects = getRelatedProjects(project.id, project.category, 3);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] pt-28 pb-16 md:pt-32">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[var(--color-brand-500)]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* ============ BACK LINK ============ */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-400)] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* ============ TWO COLUMN LAYOUT ============ */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* ========== LEFT: IMAGE (2/5) ========== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:sticky lg:top-28"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} opacity-20 rounded-3xl blur-2xl`}
              />

              {/* Image container */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-black/60 to-black/30 cursor-zoom-in group p-4 md:p-6 flex items-center justify-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[500px] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 z-10">
                  <span className="text-[10px] uppercase tracking-wider text-white font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Expand size={14} />
                </div>
              </button>
            </div>
          </motion.div>

          {/* ========== RIGHT: CONTENT (3/5) ========== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Header Info */}
            <div>
              {/* Client + Duration */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold">
                  {project.client}
                </span>
                {project.duration && (
                  <>
                    <span className="text-xs text-[var(--color-text-muted)]">•</span>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                      <Clock size={11} />
                      {project.duration}
                    </div>
                  </>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                {project.description}
              </p>

              {/* Keyword badge */}
              {project.keyword && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-[var(--color-brand-400)]/30 backdrop-blur-xl">
                  <Search size={11} className="text-[var(--color-brand-400)]" />
                  <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                    Keyword:
                  </span>
                  <span className="text-xs text-white font-semibold italic">
                    "{project.keyword}"
                  </span>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[var(--color-brand-400)]/40 transition-all"
                >
                  <TrendingUp
                    size={12}
                    className="text-[var(--color-brand-400)] mb-1.5"
                  />
                  <p className="text-lg font-bold text-white leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Challenge */}
            {project.challenge && (
              <CompactSection
                icon={Target}
                title="The Challenge"
                content={project.challenge}
                gradient="from-red-500 to-orange-500"
              />
            )}

            {/* Solution */}
            {project.solution && (
              <CompactSection
                icon={Lightbulb}
                title="Our Approach"
                content={project.solution}
                gradient="from-blue-500 to-cyan-500"
              />
            )}

            {/* Services */}
            {project.services && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold mb-3">
                  Services Delivered
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((service, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-white font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div className="p-4 md:p-5 rounded-xl bg-gradient-to-br from-[var(--color-brand-500)]/[0.08] to-[var(--color-brand-400)]/[0.03] border border-[var(--color-brand-400)]/20">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={14} className="text-[var(--color-brand-400)]" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold">
                    Results Delivered
                  </p>
                </div>
                <div className="space-y-2">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-[var(--color-brand-400)] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-white leading-relaxed">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
              <Link
                to="/contact"
                className="group relative flex-1 flex items-center justify-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold text-sm overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.5)] transition-all duration-500"
              >
                <span>Get Similar Results</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <ArrowUpRight
                    size={13}
                    className="text-white transition-transform duration-500 group-hover:rotate-45"
                  />
                </span>
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-500"
              >
                <FaWhatsapp size={14} className="text-green-400" />
                <span className="text-white text-sm font-medium">
                  Chat Now
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ============ RELATED PROJECTS ============ */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mt-16 pt-10 border-t border-white/[0.06]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[var(--color-brand-400)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-semibold">
                More {project.category} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  to={`/portfolio/${related.slug}`}
                  className="group p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--color-brand-400)]/40 transition-all"
                >
                  <div className="rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-black/60 to-black/30 p-3 flex items-center justify-center">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="max-h-[180px] w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[9px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold mb-1">
                    {related.client}
                  </p>
                  <h4 className="text-sm font-bold text-white group-hover:text-[var(--color-brand-400)] transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* ============ LIGHTBOX ============ */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: project.image, alt: project.title }]}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </section>
  );
};

// ============ COMPACT SECTION ============
const CompactSection = ({ icon: Icon, title, content, gradient }) => (
  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
    <div className="flex items-start gap-3">
      <div
        className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
      >
        <Icon size={16} className="text-white" />
      </div>
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold mb-1.5">
          {title}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  </div>
);

export default PortfolioDetail;