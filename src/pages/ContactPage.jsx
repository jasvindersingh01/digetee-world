import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building2,
  MessageSquare,
  Sparkles,
  Check,
  Loader2,
  ArrowUpRight,
  Globe,
  IndianRupee,
  Calendar,
} from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

// ============ SERVICES OPTIONS ============
const serviceOptions = [
  "Google Business Profile (GMB)",
  "Website Development",
  "Social Media Marketing",
  "WhatsApp Marketing",
  "Google & Meta Ads",
  "YouTube Marketing",
  "SEO Services",
  "Digital Business Card",
  "AI Chatbot / Tools",
  "Not sure — Need Consultation",
];

const budgetOptions = [
  "Below ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
  "Let's discuss",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    business: "",
    website: "",
    services: [],
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      alert("Please select at least one service you're interested in.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: formData.services.join(", "),
          _subject: `🎯 New Lead from ${formData.business} - Digitee World`,
          source: "Contact Page",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          business: "",
          website: "",
          services: [],
          budget: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] pt-28 pb-20 md:pt-32">
      {/* ============ BACKGROUND EFFECTS ============ */}
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-brand-500)]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* ============ HUGE WATERMARK "CONTACT" ============ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden w-full flex items-center justify-center">
        <h1 className="text-[20vw] md:text-[18vw] lg:text-[15rem] xl:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent whitespace-nowrap">
          CONTACT
        </h1>
      </div>

      {/* Floating icons in bg */}
      <FloatingIcons />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ============ HERO HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6">
            <MessageSquare size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Get in Touch
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-5">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              remarkable
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Have a project in mind? We'd love to hear from you. Fill out the
            form or reach us directly via WhatsApp, phone, or email.
          </p>
        </motion.div>

        {/* ============ QUICK CONTACT CARDS ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12"
        >
          <QuickCard
            icon={FaWhatsapp}
            label="WhatsApp"
            value="+91 98765 43210"
            href="https://wa.me/919876543210"
            gradient="from-green-500 to-emerald-400"
            external
          />
          <QuickCard
            icon={Phone}
            label="Call Us"
            value="+91 98765 43210"
            href="tel:+919876543210"
            gradient="from-blue-500 to-cyan-400"
          />
          <QuickCard
            icon={Mail}
            label="Email"
            value="hello@digiteeworld.com"
            href="mailto:hello@digiteeworld.com"
            gradient="from-violet-500 to-purple-500"
          />
          <QuickCard
            icon={Clock}
            label="Working Hours"
            value="Mon - Sat, 10-7 PM"
            gradient="from-orange-500 to-amber-400"
          />
        </motion.div>

        {/* ============ MAIN CONTACT SECTION ============ */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* ========== LEFT: INFO (2/5) ========== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Offices */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 mb-4">
                <MapPin size={12} className="text-[var(--color-brand-400)]" />
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                  Our Offices
                </span>
              </div>

              <div className="space-y-5">
                {[
                  {
                    type: "Head Office",
                    city: "Kota",
                    state: "Rajasthan",
                    phone: "+91 98765 43210",
                    isPrimary: true,
                  },
                  {
                    type: "Corporate Office",
                    city: "Indore",
                    state: "Madhya Pradesh",
                    phone: "+91 98765 43211",
                    isPrimary: false,
                  },
                ].map((office, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center shadow-lg flex-shrink-0">
                      <Building2 size={16} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                          {office.type}
                        </p>
                        {office.isPrimary && (
                          <span className="px-1.5 py-0.5 rounded-full bg-[var(--color-brand-400)]/20 border border-[var(--color-brand-400)]/40 text-[8px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                            Primary
                          </span>
                        )}
                      </div>
                      <p className="text-base font-bold text-white mb-1">
                        {office.city}, {office.state}
                      </p>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-brand-400)] transition-colors flex items-center gap-1.5"
                      >
                        <Phone size={10} />
                        {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold mb-4">
                Follow Us
              </p>
              <div className="flex items-center gap-2">
                {[
                  { icon: FaInstagram, url: "#" },
                  { icon: FaLinkedinIn, url: "#" },
                  { icon: FaFacebookF, url: "#" },
                  { icon: FaYoutube, url: "#" },
                  { icon: FaWhatsapp, url: "https://wa.me/919876543210" },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-[var(--color-brand-500)] hover:to-[var(--color-brand-400)] hover:border-transparent hover:shadow-[0_0_15px_var(--color-brand-400)] hover:scale-110 transition-all duration-300"
                    >
                      <Icon size={13} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response time */}
            <div className="relative p-5 rounded-3xl bg-gradient-to-br from-[var(--color-brand-500)]/[0.08] to-[var(--color-brand-400)]/[0.03] border border-[var(--color-brand-400)]/20 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-500)]/15 rounded-full blur-2xl" />

              <div className="relative flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Quick Response
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    We reply within{" "}
                    <span className="text-[var(--color-brand-400)] font-semibold">
                      2-4 hours
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========== RIGHT: FORM (3/5) ========== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl overflow-hidden">
              {/* Card glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-500)]/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(16,185,129,0.4)]"
                    >
                      <Check size={40} className="text-white" strokeWidth={3} />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out! We'll get back to you within{" "}
                      <span className="text-[var(--color-brand-400)] font-semibold">
                        2-4 hours
                      </span>
                      .
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative space-y-4"
                  >
                    <div className="mb-5">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Send us a message
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        Fill in your details, we'll be in touch shortly.
                      </p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <FormField
                        icon={User}
                        name="name"
                        type="text"
                        placeholder="Full name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <FormField
                        icon={Mail}
                        name="email"
                        type="email"
                        placeholder="Email address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* WhatsApp + Business */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <FormField
                        icon={Phone}
                        name="whatsapp"
                        type="tel"
                        placeholder="WhatsApp number *"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                      />
                      <FormField
                        icon={Building2}
                        name="business"
                        type="text"
                        placeholder="Business name *"
                        value={formData.business}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Website */}
                    <FormField
                      icon={Globe}
                      name="website"
                      type="text"
                      placeholder="Website URL (optional)"
                      value={formData.website}
                      onChange={handleChange}
                    />

                    {/* Services */}
                    <div>
                      <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-semibold mb-3">
                        <Sparkles size={12} className="text-[var(--color-brand-400)]" />
                        Services you're interested in *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceOptions.map((service) => {
                          const isSelected = formData.services.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceToggle(service)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-left transition-all duration-300 ${
                                isSelected
                                  ? "bg-[var(--color-brand-400)]/10 border-[var(--color-brand-400)]/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                                  : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15]"
                              }`}
                            >
                              <div
                                className={`flex-shrink-0 w-4 h-4 rounded-md border-2 flex items-center justify-center transition-all ${
                                  isSelected
                                    ? "bg-[var(--color-brand-400)] border-[var(--color-brand-400)]"
                                    : "border-white/20"
                                }`}
                              >
                                {isSelected && (
                                  <Check
                                    size={10}
                                    className="text-black"
                                    strokeWidth={4}
                                  />
                                )}
                              </div>
                              <span
                                className={`text-xs font-medium ${
                                  isSelected
                                    ? "text-white"
                                    : "text-[var(--color-text-secondary)]"
                                }`}
                              >
                                {service}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-semibold mb-3">
                        <IndianRupee size={12} className="text-[var(--color-brand-400)]" />
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {budgetOptions.map((budget) => {
                          const isSelected = formData.budget === budget;
                          return (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget })}
                              className={`px-3 py-2 rounded-xl border text-xs font-medium transition-all duration-300 ${
                                isSelected
                                  ? "bg-[var(--color-brand-400)]/10 border-[var(--color-brand-400)]/50 text-white shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                                  : "bg-white/[0.03] border-white/[0.08] text-[var(--color-text-secondary)] hover:border-white/[0.15] hover:text-white"
                              }`}
                            >
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative group">
                      <div className="absolute left-4 top-4 pointer-events-none">
                        <MessageSquare
                          size={16}
                          className="text-[var(--color-text-muted)] group-focus-within:text-[var(--color-brand-400)] transition-colors"
                        />
                      </div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project & goals (optional)"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-brand-400)]/50 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-500 disabled:opacity-70 mt-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                          <ArrowUpRight
                            size={16}
                            className="group-hover:rotate-45 transition-transform duration-500"
                          />
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>

                    {status === "error" && (
                      <p className="text-sm text-red-400 text-center">
                        Something went wrong. Please try again or WhatsApp us.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ QUICK CARD ============
const QuickCard = ({ icon: Icon, label, value, href, gradient, external }) => {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden ${
        href ? "cursor-pointer" : ""
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative flex flex-col items-start gap-2">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
        >
          <Icon size={16} className="text-white" />
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-1">
            {label}
          </p>
          <p className="text-xs md:text-sm text-white font-semibold leading-tight break-all">
            {value}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

// ============ FORM FIELD ============
const FormField = ({ icon: Icon, name, type, placeholder, value, onChange, required }) => {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <Icon
          size={15}
          className="text-[var(--color-text-muted)] group-focus-within:text-[var(--color-brand-400)] transition-colors"
        />
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-brand-400)]/50 focus:bg-white/[0.04] transition-all duration-300"
      />
    </div>
  );
};

// ============ FLOATING ICONS IN BG ============
const FloatingIcons = () => {
  const icons = [
    { Icon: Mail, top: "10%", left: "8%", delay: 0, size: 24 },
    { Icon: Phone, top: "20%", right: "10%", delay: 0.5, size: 28 },
    { Icon: MessageSquare, bottom: "25%", left: "12%", delay: 1, size: 26 },
    { Icon: MapPin, top: "60%", right: "8%", delay: 1.5, size: 30 },
    { Icon: Send, bottom: "15%", right: "20%", delay: 2, size: 22 },
    { Icon: Sparkles, top: "35%", left: "20%", delay: 2.5, size: 20 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, i) => {
        const { Icon, size, delay, ...position } = item;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.15, 0.15, 0],
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
            className="absolute text-[var(--color-brand-400)]"
            style={position}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ContactPage;