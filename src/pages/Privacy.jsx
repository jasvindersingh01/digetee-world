import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Sparkles,
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

const Privacy = () => {
  const lastUpdated = "December 2024";

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: [
        `Welcome to Digitee World ("we", "our", "us"). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our digital marketing services.`,
        `By using our website (digiteeworld.com) or services, you agree to the terms outlined in this Privacy Policy.`,
      ],
    },
    {
      id: 2,
      title: "Information We Collect",
      content: [
        `We may collect the following types of information:`,
      ],
      list: [
        "**Personal Information:** Name, email address, phone number, WhatsApp number, business name, and website URL when you fill out contact forms or request our services.",
        "**Business Information:** Details about your business, industry, goals, and marketing requirements that you voluntarily share with us.",
        "**Technical Data:** IP address, browser type, device information, pages visited, and time spent on our website (via cookies and analytics tools).",
        "**Communication Data:** Messages, emails, and WhatsApp conversations exchanged with our team.",
      ],
    },
    {
      id: 3,
      title: "How We Use Your Information",
      content: [
        `We use the collected information for the following purposes:`,
      ],
      list: [
        "To respond to your inquiries and provide the services you requested.",
        "To send you strategy proposals, quotes, and project-related communications.",
        "To improve our website, services, and user experience.",
        "To send occasional updates, offers, or newsletters (only if you opt-in).",
        "To comply with legal obligations and prevent fraud.",
      ],
    },
    {
      id: 4,
      title: "Cookies & Tracking",
      content: [
        `Our website may use cookies and similar tracking technologies to enhance your browsing experience. These help us understand how visitors use our site so we can improve it.`,
        `We may also use third-party analytics tools such as Google Analytics to gather anonymous usage data. You can disable cookies through your browser settings, though some parts of the site may not function properly.`,
      ],
    },
    {
      id: 5,
      title: "Third-Party Services",
      content: [
        `We may use trusted third-party platforms to deliver our services. These include:`,
      ],
      list: [
        "**Google Services:** Google Analytics, Google Ads, Google Business Profile.",
        "**Meta Platforms:** Facebook, Instagram Ads.",
        "**Email & Communication:** Gmail, WhatsApp Business API.",
        "**Hosting Providers:** For website hosting and delivery.",
      ],
      after: `These third parties have their own privacy policies, and we recommend reviewing them. We do not sell, rent, or trade your personal information to any third party.`,
    },
    {
      id: 6,
      title: "Data Security",
      content: [
        `We take reasonable technical and organizational measures to protect your personal data from unauthorized access, loss, misuse, or disclosure. However, no method of transmission over the internet is 100% secure, so we cannot guarantee absolute security.`,
      ],
    },
    {
      id: 7,
      title: "Data Retention",
      content: [
        `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable laws. Client project data is typically retained for up to 2 years after project completion for reference and support purposes.`,
      ],
    },
    {
      id: 8,
      title: "Your Rights",
      content: [
        `You have the right to:`,
      ],
      list: [
        "Request access to the personal data we hold about you.",
        "Request corrections or updates to your information.",
        "Request deletion of your personal data (right to be forgotten).",
        "Opt-out of marketing communications at any time.",
        "Withdraw consent for data processing.",
      ],
      after: `To exercise any of these rights, contact us at the email provided below.`,
    },
    {
      id: 9,
      title: "Children's Privacy",
      content: [
        `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a child has provided us with personal information, please contact us immediately.`,
      ],
    },
    {
      id: 10,
      title: "Changes to This Policy",
      content: [
        `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The updated version will be posted on this page with a new "Last Updated" date. We encourage you to review this policy periodically.`,
      ],
    },
    {
      id: 11,
      title: "Contact Us",
      content: [
        `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:`,
      ],
      isContact: true,
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--color-bg-primary)] pt-32 pb-20">
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-brand-500)]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-400)] transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6">
            <Shield size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              Policy
            </span>
          </h1>

          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-4">
            Your privacy matters to us. Learn how we collect, use, and protect
            your information.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <Calendar size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs text-[var(--color-text-muted)]">
              Last Updated: <span className="text-white font-medium">{lastUpdated}</span>
            </span>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-white/[0.1] transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center font-bold text-white text-sm shadow-lg">
                  {section.id}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-tight pt-1">
                  {section.title}
                </h2>
              </div>

              <div className="pl-14 space-y-3">
                {section.content.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed"
                  >
                    {para}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2 mt-3">
                    {section.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] mt-2" />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>'),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )}

                {section.after && (
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mt-3">
                    {section.after}
                  </p>
                )}

                {section.isContact && (
                  <div className="mt-5 space-y-3">
                    <a
                      href="mailto:hello@digiteeworld.com"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/20 flex items-center justify-center group-hover:bg-[var(--color-brand-400)]/20 transition-all">
                        <Mail size={14} className="text-[var(--color-brand-400)]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Email</p>
                        <p className="text-sm text-white group-hover:text-[var(--color-brand-400)] transition-colors">
                          hello@digiteeworld.com
                        </p>
                      </div>
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/20 flex items-center justify-center group-hover:bg-[var(--color-brand-400)]/20 transition-all">
                        <Phone size={14} className="text-[var(--color-brand-400)]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Phone</p>
                        <p className="text-sm text-white group-hover:text-[var(--color-brand-400)] transition-colors">
                          +91 98765 43210
                        </p>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-xs text-[var(--color-text-muted)]">
            This Privacy Policy is effective as of {lastUpdated}.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;