import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileText,
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

const Terms = () => {
  const lastUpdated = "December 2024";

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: [
        `Welcome to Digitee World. By accessing or using our website (digiteeworld.com) or engaging our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, please do not use our website or services.`,
        `These Terms constitute a legally binding agreement between you and Digitee World.`,
      ],
    },
    {
      id: 2,
      title: "About Our Services",
      content: [
        `Digitee World is a digital marketing company based in Kota, Rajasthan and Indore, Madhya Pradesh. We offer services including but not limited to:`,
      ],
      list: [
        "Google Business Profile (GMB) Optimization",
        "Website Design & Development",
        "Social Media Marketing",
        "WhatsApp Marketing",
        "Google & Meta Ads Management",
        "YouTube Marketing",
        "Search Engine Optimization (SEO)",
        "AI Chatbots, Business Tools & Automation",
        "Digital Business Cards",
      ],
      after: `The specific scope, deliverables, and pricing of each service will be outlined in a separate project agreement or invoice.`,
    },
    {
      id: 3,
      title: "Client Responsibilities",
      content: [
        `To ensure smooth project delivery, clients agree to:`,
      ],
      list: [
        "Provide accurate business information, brand assets, and content as required.",
        "Respond to communications and approval requests in a timely manner.",
        "Grant necessary access to accounts (Google, Meta, hosting, etc.) when needed.",
        "Ensure all provided content is legally owned or licensed by the client.",
        "Make payments as per the agreed schedule.",
      ],
    },
    {
      id: 4,
      title: "Payment Terms",
      content: [
        `Payment terms will be specified in the project proposal or invoice. Generally:`,
      ],
      list: [
        "A **50% advance payment** is required to initiate project work.",
        "The **remaining 50%** is due before final delivery or as per milestone-based agreements.",
        "For monthly retainer services, payment is due at the beginning of each billing cycle.",
        "Late payments may result in project pause or additional charges.",
        "All prices are exclusive of applicable taxes (GST) unless stated otherwise.",
      ],
    },
    {
      id: 5,
      title: "Refund Policy",
      content: [
        `Due to the nature of digital marketing services, we generally do not offer refunds once work has commenced. However:`,
      ],
      list: [
        "If work has not started, a refund may be issued minus any consultation or planning fees.",
        "For monthly services, cancellation must be requested at least 15 days before the next billing cycle. No refunds for the current running month.",
        "Refunds for ad spend budgets (Google, Meta, etc.) are subject to the respective platform's policies.",
        "Any refund requests will be reviewed on a case-by-case basis.",
      ],
    },
    {
      id: 6,
      title: "Project Timelines",
      content: [
        `We strive to deliver projects within the timelines mentioned in the proposal. However, delays may occur due to:`,
      ],
      list: [
        "Delayed feedback, approvals, or content from the client.",
        "Third-party platform issues (Google, Meta, hosting, etc.).",
        "Scope changes or additional revisions requested mid-project.",
        "Unforeseen technical or external circumstances.",
      ],
      after: `We are not liable for delays caused by factors outside our control.`,
    },
    {
      id: 7,
      title: "Results & Guarantees",
      content: [
        `While we work with proven strategies and industry best practices, digital marketing results depend on multiple factors including market conditions, competition, budget, and business type.`,
      ],
      list: [
        "We **cannot guarantee specific rankings, traffic, or sales results**.",
        "GMB ranking, SEO, and ad performance timelines are estimates based on typical scenarios.",
        "We commit to delivering our services with skill, honesty, and industry-standard practices.",
      ],
    },
    {
      id: 8,
      title: "Intellectual Property",
      content: [
        `All original content, designs, code, and strategies created by Digitee World during the project remain our intellectual property until full payment is received.`,
      ],
      list: [
        "Upon full payment, ownership of final deliverables (website, creatives, copy) is transferred to the client.",
        "Digitee World reserves the right to display completed work in our portfolio, case studies, and marketing materials unless otherwise agreed in writing.",
        "Third-party assets (stock images, plugins, fonts) may be licensed and subject to their respective terms.",
        "Any confidential business information shared will be kept private.",
      ],
    },
    {
      id: 9,
      title: "Third-Party Platforms",
      content: [
        `Our services often involve third-party platforms like Google, Meta, WhatsApp, hosting providers, and others. We are not responsible for:`,
      ],
      list: [
        "Changes in third-party platform policies, algorithms, or pricing.",
        "Account suspensions, bans, or restrictions imposed by these platforms.",
        "Platform downtime or technical issues.",
        "Data or performance changes caused by platform updates.",
      ],
    },
    {
      id: 10,
      title: "Limitation of Liability",
      content: [
        `To the maximum extent permitted by law, Digitee World shall not be liable for:`,
      ],
      list: [
        "Any indirect, incidental, or consequential damages arising from the use of our services.",
        "Loss of profits, revenue, or business opportunities.",
        "Data loss or unauthorized access due to third-party breaches.",
      ],
      after: `Our total liability, if any, shall not exceed the total amount paid by the client for the specific service in question.`,
    },
    {
      id: 11,
      title: "Termination",
      content: [
        `Either party may terminate the service agreement with written notice (email is acceptable) under the following conditions:`,
      ],
      list: [
        "Breach of terms by either party.",
        "Non-payment of dues by the client.",
        "Unethical or illegal requests from the client.",
        "Mutual agreement to discontinue services.",
      ],
      after: `Any pending work will be delivered up to the termination date, and outstanding payments must be cleared.`,
    },
    {
      id: 12,
      title: "Governing Law",
      content: [
        `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of courts in Kota, Rajasthan.`,
      ],
    },
    {
      id: 13,
      title: "Changes to Terms",
      content: [
        `We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes indicates your acceptance of the revised Terms.`,
      ],
    },
    {
      id: 14,
      title: "Contact Us",
      content: [
        `If you have any questions about these Terms of Service, please contact us:`,
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
            <FileText size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              Service
            </span>
          </h1>

          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-4">
            Please read these terms carefully before using our website or
            engaging our services.
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
              transition={{ duration: 0.5, delay: i * 0.03 }}
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
            These Terms of Service are effective as of {lastUpdated}.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;