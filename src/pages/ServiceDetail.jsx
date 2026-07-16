import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getServiceBySlug, getRelatedServices } from "../constants/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const relatedServices = getRelatedServices(service.id, 3);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] pt-28 pb-20 md:pt-32">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[var(--color-brand-500)]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-400)] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Services
          </Link>
        </motion.div>

        {/* ============ HERO SECTION ============ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {service.heroTitle}
            </h1>

            {/* Tagline */}
            <p className="text-sm uppercase tracking-wider text-[var(--color-brand-400)] font-semibold mb-4">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {service.heroDesc}
            </p>

            {/* Duration Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-[var(--color-brand-400)]/30 backdrop-blur-xl mb-8">
              <Clock size={14} className="text-[var(--color-brand-400)]" />
              <span className="text-sm text-white font-semibold">
                {service.duration}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <Link
                to="/contact"
                className="group relative flex items-center justify-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold text-sm overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105"
              >
                <span>Get Started</span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <ArrowUpRight
                    size={14}
                    className="text-white transition-transform duration-500 group-hover:rotate-45"
                  />
                </span>
              </Link>

              <a
                href={`https://wa.me/919876543210?text=Hi%20Digitee%20World,%20I'm%20interested%20in%20${encodeURIComponent(
                  service.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-500"
              >
                <FaWhatsapp size={16} className="text-green-400" />
                <span className="text-white text-sm font-medium">
                  Get Quote
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Image with rotating rings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center min-h-[400px]"
          >
            {/* Outer glow */}
            <div
              className={`absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br ${service.gradient} opacity-25 rounded-full blur-[80px]`}
            />

            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border-2 border-dashed border-[var(--color-brand-400)]/25"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full border border-[var(--color-brand-400)]/20"
            />

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_20px_var(--color-brand-400)] border-2 border-black" />
            </motion.div>

            {/* Circle Image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_20px_60px_rgba(34,211,238,0.35)] z-10"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* ============ ABOUT SERVICE ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 mb-4">
            <Sparkles size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
              About This Service
            </span>
          </div>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            {service.fullDesc}
          </p>
        </motion.div>

        {/* ============ WHAT YOU GET ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-semibold">
              What You Get
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Everything included in this service
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            {service.whatYouGet.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--color-brand-400)]/40 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-[var(--color-brand-400)]/20 border border-[var(--color-brand-400)]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2
                    size={12}
                    className="text-[var(--color-brand-400)]"
                  />
                </div>
                <span className="text-sm text-white leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============ PROCESS ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-semibold">
              Our Process
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            How we deliver results
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--color-brand-400)]/40 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                >
                  <span className="text-white font-bold text-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============ BENEFITS ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[var(--color-brand-500)]/[0.08] to-[var(--color-brand-400)]/[0.03] border border-[var(--color-brand-400)]/20 backdrop-blur-xl overflow-hidden mb-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-500)]/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand-400)]/20 border border-[var(--color-brand-400)]/40 mb-4">
              <TrendingUp size={12} className="text-[var(--color-brand-400)]" />
              <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                Benefits
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Why this service is a{" "}
              <span className="text-[var(--color-brand-400)]">game-changer</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-3">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <Zap
                    size={14}
                    className="text-[var(--color-brand-400)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-white leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============ IDEAL FOR ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-4">
              <Users size={14} className="text-[var(--color-brand-400)]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold">
                Ideal For
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Perfect for these businesses
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.idealFor.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-white font-medium hover:border-[var(--color-brand-400)]/40 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============ MAIN CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden text-center mb-16"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-brand-500)]/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-accent-neon)]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-[var(--color-brand-400)]/30 mb-5">
              <Target size={14} className="text-[var(--color-brand-400)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-bold">
                Ready to Start?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Let's get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                {service.name}
              </span>{" "}
              started
            </h2>

            <p className="max-w-xl mx-auto text-base text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Get a custom quote for your business. Book a free 30-minute call
              or chat directly on WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group relative flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105"
              >
                <span>Book Free Consultation</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <ArrowUpRight
                    size={16}
                    className="text-white transition-transform duration-500 group-hover:rotate-45"
                  />
                </span>
              </Link>

              <a
                href={`https://wa.me/919876543210?text=Hi%20Digitee%20World,%20I'm%20interested%20in%20${encodeURIComponent(
                  service.name
                )}`}
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

        {/* ============ RELATED SERVICES ============ */}
        {relatedServices.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[var(--color-brand-400)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-semibold">
                Explore More Services
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Other services you might need
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  to={`/services/${related.slug}`}
                  className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--color-brand-400)]/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-mono text-[var(--color-brand-400)] tracking-widest">
                      {related.number}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-400)] group-hover:rotate-45 transition-all"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold mb-2">
                    {related.category}
                  </p>
                  <h4 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-[var(--color-brand-400)] transition-colors">
                    {related.name}
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                    {related.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDetail;