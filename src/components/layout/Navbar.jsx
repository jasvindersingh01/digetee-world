import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { navLinks } from "../../constants/navLinks";
import logo from "/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [time, setTime] = useState("");
  const location = useLocation();
  const navRef = useRef(null);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Live time (agency style)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)] origin-left z-[200]"
      />

      {/* NAVBAR */}
      <motion.header
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Glass background with animated gradient border */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            scrolled
              ? "backdrop-blur-2xl bg-black/50"
              : "bg-transparent"
          }`}
        >
          {scrolled && (
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-400)]/50 to-transparent" />
          )}
        </div>

        <nav className="relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          
          {/* LOGO with glow pulse */}
          <Link to="/" className="flex items-center gap-2.5 group relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-brand-400)] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
              <img
                src={logo}
                alt="Digitee World"
                className="relative h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
          </Link>

          {/* DESKTOP NAV — Liquid blob indicator */}
          <ul
            className="hidden lg:flex items-center bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-full p-1.5 relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(i)}
                >
                  {/* Liquid blob hover */}
                  {hoveredIndex === i && (
                    <motion.div
                      layoutId="navBlob"
                      className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-600)]/30 to-[var(--color-brand-400)]/30 rounded-full border border-[var(--color-brand-400)]/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <NavLink
                    to={link.path}
                    className={`relative z-10 flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[var(--color-text-secondary)] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_10px_var(--color-brand-400)] animate-pulse" />
                    )}
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* RIGHT SIDE — Time + CTA + Menu */}
          <div className="flex items-center gap-3 relative z-10">

            {/* CTA Button - Premium */}
            <Link
              to="/contact"
              className="hidden md:flex group relative items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[var(--color-brand-400)]/50 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 text-sm font-semibold text-white">
                Let's Talk
              </span>
              <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] group-hover:shadow-[0_0_20px_var(--color-brand-400)] transition-all duration-500">
                <ArrowUpRight
                  size={14}
                  className="text-white transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white hover:border-[var(--color-brand-400)]/50 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] lg:hidden"
          >
            {/* Backdrop with grid pattern */}
            <motion.div
              initial={{ clipPath: "circle(0% at 100% 0%)" }}
              animate={{ clipPath: "circle(150% at 100% 0%)" }}
              exit={{ clipPath: "circle(0% at 100% 0%)" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-[var(--color-bg-primary)]"
            >
              {/* Animated gradient orbs */}
              <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-brand-500)]/20 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-accent-neon)]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                }}
              />
            </motion.div>

            {/* Content */}
            <div className="relative h-full flex flex-col px-6 pt-24 pb-8 overflow-y-auto">
              
              {/* Tagline */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 mb-8"
              >
                <Sparkles size={14} className="text-[var(--color-brand-400)]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]">
                  Explore Menu
                </span>
              </motion.div>

              {/* NAV LINKS */}
              <ul className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 60, opacity: 0 }}
                      transition={{
                        delay: 0.4 + i * 0.08,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <NavLink
                        to={link.path}
                        className={`group flex items-center justify-between py-5 border-b transition-all duration-500 ${
                          isActive
                            ? "border-[var(--color-brand-400)]/40"
                            : "border-white/[0.06] hover:border-[var(--color-brand-400)]/30"
                        }`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-xs font-mono text-[var(--color-brand-400)]">
                            0{i + 1}
                          </span>
                          <div className="flex flex-col">
                            <span
                              className={`text-3xl sm:text-4xl font-bold tracking-tight transition-all duration-500 ${
                                isActive
                                  ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-brand-400)]"
                                  : "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[var(--color-brand-400)]"
                              }`}
                            >
                              {link.name}
                            </span>
                            <span className="text-xs text-[var(--color-text-muted)] tracking-wider">
                              {link.desc}
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight
                          size={24}
                          className={`transition-all duration-500 ${
                            isActive
                              ? "text-[var(--color-brand-400)] rotate-45"
                              : "text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-400)] group-hover:rotate-45"
                          }`}
                        />
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>

              {/* CTA */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="group flex items-center justify-between w-full p-5 rounded-2xl bg-gradient-to-r from-[var(--color-brand-600)] to-[var(--color-brand-400)] text-white font-semibold shadow-[0_0_40px_rgba(34,211,238,0.3)] overflow-hidden relative"
                >
                  <span className="relative z-10 text-lg">Start Your Project</span>
                  <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </motion.div>

              {/* CONTACT INFO */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <a
                  href="mailto:hello@digiteeworld.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[var(--color-brand-400)]/50 group-hover:bg-[var(--color-brand-400)]/10 transition-all">
                    <Mail size={14} className="text-[var(--color-brand-400)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">Email</span>
                    <span className="text-sm text-white">hello@digiteeworld.com</span>
                  </div>
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[var(--color-brand-400)]/50 group-hover:bg-[var(--color-brand-400)]/10 transition-all">
                    <Phone size={14} className="text-[var(--color-brand-400)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">Phone</span>
                    <span className="text-sm text-white">+91 12345 67890</span>
                  </div>
                </a>
              </motion.div>

              {/* SOCIALS */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-6 flex items-center justify-between"
              >
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.2em]">
                  Follow us
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { Icon: FaInstagram, link: "#" },
                    { Icon: FaLinkedinIn, link: "#" },
                    { Icon: FaFacebookF, link: "#" },
                    { Icon: FaYoutube, link: "#" },
                  ].map(({ Icon, link }, i) => (
                    <a
                      key={i}
                      href={link}
                      className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-[var(--color-brand-500)] hover:to-[var(--color-brand-400)] hover:border-transparent hover:shadow-[0_0_20px_var(--color-brand-400)] transition-all duration-300"
                    >
                      <Icon size={13} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;