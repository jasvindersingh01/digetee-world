import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Award, Compass, User } from "lucide-react";

const leadershipMembers = [
  {
    name: "Mahaveer Singh Solanki",
    designation: "CEO & Director",
    description:
      "As CEO & Director of Digitee World, Mahaveer Singh Solanki contributes to the company's executive leadership, strategic planning, business development, and organizational management. His role focuses on supporting business expansion, strengthening operational performance, and ensuring that the company's objectives align with its long-term growth strategy.",
    image: "/leadership/mahaveer-singh-solanki.jpg",
    imageAlt: "Mahaveer Singh Solanki, CEO and Director of Digitee World",
    icon: Award,
  },
  {
    name: "Mahaveer Gochar",
    designation: "Rajasthan Head",
    description:
      "As Rajasthan Head of Digitee World, Mahaveer Gochar is responsible for overseeing regional business operations, coordinating teams, driving business development, and strengthening the company's presence across Rajasthan. His responsibilities include supporting client acquisition, monitoring team performance, developing regional business opportunities, and ensuring effective implementation of company strategies.",
    image: "/leadership/mahaveer-gochar.jpg",
    imageAlt: "Mahaveer Gochar, Rajasthan Head at Digitee World",
    icon: Compass,
  },
];

function LeadershipCard({ member, variants, shouldReduceMotion }) {
  const [hasError, setHasError] = useState(false);
  const Icon = member.icon;

  return (
    <motion.article
      variants={variants}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-[var(--color-brand-400)]/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] overflow-hidden"
    >
      {/* Subtle Hover Gradient Glow */}
      <div className="absolute -inset-px bg-gradient-to-b from-[var(--color-brand-500)]/15 via-[var(--color-accent-neon)]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Portrait Photograph (4:5 Aspect Ratio) */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0F] mb-6 flex items-center justify-center">
        {!hasError ? (
          <img
            src={member.image}
            alt={member.imageAlt}
            loading="lazy"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 text-center">
            <div className="w-20 h-20 rounded-2xl bg-[var(--color-brand-500)]/10 border border-[var(--color-brand-400)]/20 flex items-center justify-center mb-4 text-[var(--color-brand-400)]">
              <User size={36} />
            </div>
            <p className="text-base font-semibold text-white/90">{member.name}</p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">{member.designation}</p>
          </div>
        )}

        {/* Soft bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-[#0A0A0F]/20 to-transparent pointer-events-none" />

        {/* Decorative Icon */}
        <div
          aria-hidden="true"
          className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-[var(--color-brand-400)] group-hover:border-[var(--color-brand-400)]/40 group-hover:text-white transition-all duration-300"
        >
          <Icon size={18} />
        </div>
      </div>

      {/* Member Details */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Designation Badge */}
        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 backdrop-blur-sm mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-[var(--color-brand-400)] font-semibold">
            {member.designation}
          </span>
        </div>

        {/* Member Name (H3) */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[var(--color-brand-200)] transition-colors duration-300">
          {member.name}
        </h3>

        {/* Subtle Blue-Cyan Accent Bar */}
        <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] rounded-full mb-4 group-hover:w-16 transition-all duration-500" />

        {/* Professional Description */}
        <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed flex-1">
          {member.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Leadership() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] py-16 md:py-24"
    >
      {/* Subtle Background Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[var(--color-brand-600)]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ============ SECTION HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.7 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6">
            <Sparkles size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Our Leadership
            </span>
          </div>

          {/* Heading (H2) */}
          <h2
            id="leadership-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl text-white"
          >
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              Leadership
            </span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Visionary leadership driving digital innovation, business growth, and regional excellence.
          </p>
        </motion.div>

        {/* ============ LEADERSHIP CARDS GRID ============ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
        >
          {leadershipMembers.map((member) => (
            <LeadershipCard
              key={member.name}
              member={member}
              variants={cardVariants}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
