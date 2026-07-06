import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Building2,
  Navigation,
} from "lucide-react";

// ============ DATA ============
const locations = [
  {
    id: 1,
    type: "Head Office",
    city: "Kota",
    state: "Rajasthan",
    address: "Kota, Rajasthan, India",
    phone: "+91 98765 43210",
    email: "kota@digiteeworld.com",
    hours: "Mon - Sat, 10 AM - 7 PM",
    mapUrl: "https://maps.google.com/?q=Kota,Rajasthan",
    gradient: "from-blue-500 to-cyan-400",
    isPrimary: true,
  },
  {
    id: 2,
    type: "Corporate Office",
    city: "Indore",
    state: "Madhya Pradesh",
    address: "Indore, Madhya Pradesh, India",
    phone: "+91 98765 43211",
    email: "indore@digiteeworld.com",
    hours: "Mon - Sat, 10 AM - 7 PM",
    mapUrl: "https://maps.google.com/?q=Indore,MadhyaPradesh",
    gradient: "from-violet-500 to-purple-500",
    isPrimary: false,
  },
];

// ============ COMPONENT ============
const Locations = () => {
  return (
    <section
      id="locations"
      className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] py-20 md:py-28"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-brand-500)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ============ HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6">
            <Navigation size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Our Locations
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5 max-w-3xl mx-auto">
            Find us in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              Kota & Indore
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Two strategic locations, one mission — helping businesses across
            Rajasthan, Madhya Pradesh, and beyond grow digitally.
          </p>
        </motion.div>

        {/* ============ LOCATION CARDS ============ */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {locations.map((loc, i) => (
            <LocationCard key={loc.id} location={loc} index={i} />
          ))}
        </div>

        {/* ============ SERVICE COVERAGE ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-500)]/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                  Serving businesses across India
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Not in Kota or Indore? We work remotely with clients pan-India.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["Rajasthan", "Madhya Pradesh", "Pan India"].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-white"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ LOCATION CARD ============
const LocationCard = ({ location, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
    >
      {/* Gradient glow on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${location.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none`}
      />

      {/* Primary badge */}
      {location.isPrimary && (
        <div className="absolute top-5 right-5 z-10">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
              Primary
            </span>
          </div>
        </div>
      )}

      <div className="relative p-6 md:p-8">
        {/* Top: Icon + Type */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${location.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0`}
          >
            <Building2 size={24} className="text-white" />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-text-muted)] font-semibold mb-1">
              {location.type}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {location.city}
              <span className="text-[var(--color-brand-400)]">,</span>{" "}
              <span className="text-lg text-[var(--color-text-secondary)] font-medium">
                {location.state}
              </span>
            </h3>
          </div>
        </div>

        {/* Info list */}
        <div className="space-y-3 mb-6">
          <InfoRow icon={MapPin} label="Address" value={location.address} />
          <InfoRow icon={Phone} label="Phone" value={location.phone} href={`tel:${location.phone}`} />
          <InfoRow icon={Mail} label="Email" value={location.email} href={`mailto:${location.email}`} />
          <InfoRow icon={Clock} label="Hours" value={location.hours} />
        </div>

        {/* CTA */}
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[var(--color-brand-400)]/50 hover:bg-white/[0.05] transition-all duration-500"
        >
          <span className="text-white text-sm font-medium">View on Map</span>
          <span
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${location.gradient} group-hover/link:shadow-[0_0_15px_var(--color-brand-400)] transition-all`}
          >
            <ArrowUpRight
              size={12}
              className="text-white transition-transform duration-500 group-hover/link:rotate-45"
            />
          </span>
        </a>
      </div>

      {/* Bottom shine line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-400)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// ============ INFO ROW ============
const InfoRow = ({ icon: Icon, label, value, href }) => {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`flex items-start gap-3 group/row ${
        href ? "cursor-pointer" : ""
      }`}
    >
      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/row:border-[var(--color-brand-400)]/30 transition-all">
        <Icon size={13} className="text-[var(--color-brand-400)]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
          {label}
        </p>
        <p
          className={`text-sm text-white ${
            href ? "group-hover/row:text-[var(--color-brand-400)] transition-colors" : ""
          }`}
        >
          {value}
        </p>
      </div>
    </Wrapper>
  );
};

export default Locations;