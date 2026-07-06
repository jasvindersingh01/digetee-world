import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Sparkles,
  Heart,
  Clock,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "/logo.jpeg";

// ============ DATA ============
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "Google Business Profile", path: "/services/gmb-optimization" },
  { name: "Website Development", path: "/services/website-development" },
  { name: "Social Media Marketing", path: "/services/social-media-marketing" },
  { name: "WhatsApp Marketing", path: "/services/whatsapp-marketing" },
  { name: "Google & Meta Ads", path: "/services/google-meta-ads" },
  { name: "SEO Services", path: "/services/seo-services" },
];

const locations = [
  {
    type: "Head Office",
    city: "Kota",
    state: "Rajasthan",
    phone: "+91 98765 43210",
    email: "kota@digiteeworld.com",
  },
  {
    type: "Corporate Office",
    city: "Indore",
    state: "Madhya Pradesh",
    phone: "+91 98765 43211",
    email: "indore@digiteeworld.com",
  },
];

const socialLinks = [
  { icon: FaInstagram, url: "#", label: "Instagram" },
  { icon: FaLinkedinIn, url: "#", label: "LinkedIn" },
  { icon: FaFacebookF, url: "#", label: "Facebook" },
  { icon: FaYoutube, url: "#", label: "YouTube" },
  { icon: FaWhatsapp, url: "https://wa.me/919876543210", label: "WhatsApp" },
];

// ============ COMPONENT ============
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] border-t border-white/[0.06]">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-brand-500)]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ============ TOP CTA STRIP ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-12 md:py-16 border-b border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-[var(--color-brand-400)]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)]">
                  Let's Connect
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Have a project in mind?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
                  We'd love to hear from you.
                </span>
              </h3>
            </div>

            <Link
              to="/contact"
              className="group relative flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all duration-500 hover:scale-105 flex-shrink-0"
            >
              <span className="relative z-10">Start a Project</span>
              <span className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <ArrowUpRight
                  size={14}
                  className="text-white transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </motion.div>

        {/* ============ MAIN FOOTER GRID ============ */}
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* ========== BRAND (4 cols) ========== */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--color-brand-400)] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                <img
                  src={logo}
                  alt="Digitee World"
                  className="relative h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-sm">
              A full-service digital marketing company from Kota & Indore.
              Helping startups and brands grow with strategy, consistency, and
              data-driven action.
            </p>

            {/* Socials */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] font-semibold mb-3">
                Follow us
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-[var(--color-brand-500)] hover:to-[var(--color-brand-400)] hover:border-transparent hover:shadow-[0_0_20px_var(--color-brand-400)] hover:scale-110 transition-all duration-300"
                    >
                      <Icon size={13} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========== QUICK LINKS (2 cols) ========== */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-400)] transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[var(--color-brand-400)] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== SERVICES (3 cols) ========== */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-400)] transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[var(--color-brand-400)] transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== LOCATIONS (3 cols) ========== */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-5">
              Our Offices
            </h4>
            <div className="space-y-5">
              {locations.map((loc, i) => (
                <div key={i} className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-brand-400)]/20 transition-all">
                      <MapPin size={12} className="text-[var(--color-brand-400)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
                        {loc.type}
                      </p>
                      <p className="text-sm text-white font-semibold mb-1">
                        {loc.city}, {loc.state}
                      </p>
                      <a
                        href={`tel:${loc.phone}`}
                        className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-brand-400)] transition-colors mb-1"
                      >
                        <Phone size={10} />
                        {loc.phone}
                      </a>
                      <a
                        href={`mailto:${loc.email}`}
                        className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-brand-400)] transition-colors"
                      >
                        <Mail size={10} />
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Working hours */}
            <div className="mt-5 pt-5 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <Clock size={12} className="text-[var(--color-brand-400)]" />
                <span>Mon - Sat, 10 AM - 7 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ BIG BRAND MARK ============ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-8 md:py-12 flex items-center justify-center overflow-hidden"
        >
          <h1 className="text-[15vw] md:text-[18vw] lg:text-[16rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] to-transparent select-none">
            DIGITEE
          </h1>
        </motion.div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)] text-center md:text-left">
            © {currentYear} Digitee World. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-brand-400)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-brand-400)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
            Crafted with{" "}
            <Heart size={11} className="text-red-500 fill-red-500 animate-pulse" />{" "}
            in{" "}
            <span className="text-white font-semibold">
              Kota & Indore
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;