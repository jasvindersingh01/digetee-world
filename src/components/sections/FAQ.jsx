import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plus,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

// ============ DATA ============
const faqs = [
  {
    id: 1,
    question: "What services does Digitee World offer?",
    answer:
      "We offer GMB optimization, website development, social media, WhatsApp marketing, Google & Meta ads, YouTube marketing, digital business cards, and SEO — everything you need for complete digital growth.",
  },
  {
    id: 2,
    question: "How long does it take to see results?",
    answer:
      "We take up India-level challenges with confidence — GMB Ranking in just 1.5 months and SEO Optimization results within 3 months. Google & Meta Ads deliver results in days, while social media traction begins within 30-60 days. No fake promises, only realistic timelines backed by proven strategies.",
  },
  {
    id: 3,
    question: "Do you work with startups & small businesses?",
    answer:
      "Absolutely. Most of our clients are startups and small-to-medium businesses in Kota, Indore, and nearby cities. We build custom packages that fit your budget and stage.",
  },
  {
    id: 4,
    question: "What are your pricing plans?",
    answer:
      "Pricing depends on scope and service mix. We offer flexible packages — from affordable startup plans to comprehensive enterprise solutions. Book a free call to get a custom quote.",
  },
  {
    id: 5,
    question: "Can I hire you for just one service?",
    answer:
      "Yes. You can start with a single service like SEO or Google Ads, or bundle multiple together. Start with what you need most and scale from there.",
  },
];

// ============ COMPONENT ============
const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] py-20 md:py-28"
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
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--color-brand-600)]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* ============ LEFT: HEADER ============ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6">
              <HelpCircle size={12} className="text-[var(--color-brand-400)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
              Questions?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
                We've got you.
              </span>
            </h2>

            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Everything you need to know about working with us. Still curious?
            </p>

            {/* Mini CTA */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[var(--color-brand-400)]/50 hover:bg-white/[0.05] transition-all duration-500"
            >
              <span className="text-white text-sm font-medium">Ask us anything</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] group-hover:shadow-[0_0_15px_var(--color-brand-400)] transition-all">
                <ArrowUpRight
                  size={12}
                  className="text-white transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
            </Link>
          </motion.div>

          {/* ============ RIGHT: FAQ LIST ============ */}
          <div className="lg:col-span-3 space-y-2.5">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => toggleFAQ(faq.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ FAQ ITEM ============
const FAQItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative rounded-2xl border backdrop-blur-xl transition-all duration-500 overflow-hidden ${
        isOpen
          ? "bg-white/[0.04] border-[var(--color-brand-400)]/30 shadow-[0_0_30px_rgba(34,211,238,0.08)]"
          : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.03]"
      }`}
    >
      {/* Top gradient line when open */}
      {isOpen && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-400)] to-transparent origin-left"
        />
      )}

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
      >
        <div className="flex items-center gap-4 flex-1">
          {/* Number */}
          <span
            className={`text-xs font-mono tracking-wider transition-colors duration-500 ${
              isOpen
                ? "text-[var(--color-brand-400)]"
                : "text-[var(--color-text-muted)]"
            }`}
          >
            {String(faq.id).padStart(2, "0")}
          </span>

          {/* Question */}
          <h3
            className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-500 ${
              isOpen
                ? "text-white"
                : "text-[var(--color-text-secondary)] group-hover:text-white"
            }`}
          >
            {faq.question}
          </h3>
        </div>

        {/* Plus → Rotates to X */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
            isOpen
              ? "bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              : "bg-white/[0.05] border border-white/[0.08] group-hover:bg-white/[0.08]"
          }`}
        >
          <Plus
            size={14}
            className={isOpen ? "text-white" : "text-[var(--color-brand-400)]"}
            strokeWidth={2.5}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25, delay: 0.1 },
            }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 pl-14 md:pl-16">
              <div className="pt-1 border-t border-white/[0.06]">
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;