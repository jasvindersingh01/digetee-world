import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] py-20 md:py-28"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 60% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--color-brand-500)]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative p-8 md:p-14 lg:p-16 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden text-center"
        >
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-brand-500)]/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-accent-neon)]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-3 h-3 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_20px_var(--color-brand-400)]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-[var(--color-accent-neon)] shadow-[0_0_15px_var(--color-accent-neon)]"
          />
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[var(--color-brand-500)] shadow-[0_0_18px_var(--color-brand-500)]"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-[var(--color-brand-400)]/30 backdrop-blur-xl mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <Sparkles size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs text-white font-medium tracking-wide">
              Accepting new projects
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5 max-w-3xl mx-auto">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              power your growth?
            </span>
          </h2>

          {/* Subheading */}
          <p className="relative max-w-xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
            Let's build something remarkable together. Book a free strategy call
            or WhatsApp us — we're just a message away.
          </p>

          {/* CTAs */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative flex items-center gap-2 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">Book Free Strategy Call</span>
              <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <ArrowUpRight
                  size={16}
                  className="text-white transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hi%20Digitee%20World,%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-500"
            >
              <FaWhatsapp
                size={16}
                className="text-green-400 group-hover:scale-110 transition-transform"
              />
              <span className="text-white font-medium text-sm">Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;