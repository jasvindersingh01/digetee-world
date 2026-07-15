import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  ArrowUpRight,
  Share2,
  Tag,
  Sparkles,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { getPostBySlug, getRelatedPosts } from "../constants/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = getRelatedPosts(post.id, 2);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <article className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] pt-28 pb-16 md:pt-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[var(--color-brand-500)]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-400)] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          {/* Category */}
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-[var(--color-brand-400)]/10 border border-[var(--color-brand-400)]/30 text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
              <Clock size={11} />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
              <Calendar size={11} />
              {post.date}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/[0.06]">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center text-white font-bold text-sm">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm text-white font-semibold">{post.author}</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Founder & CEO, Digitee World
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.08] mb-10 aspect-video"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ============ BLOG CONTENT ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Intro */}
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 font-light">
            {post.intro}
          </p>

          {/* Sections */}
          <div className="space-y-6 mb-10">
            {post.sections?.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  {section.heading}
                </h2>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          {post.conclusion && (
            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)]/[0.08] to-[var(--color-brand-400)]/[0.03] border border-[var(--color-brand-400)]/20 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-[var(--color-brand-400)]" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold">
                  Final Thoughts
                </p>
              </div>
              <p className="text-base text-white leading-relaxed">
                {post.conclusion}
              </p>
            </div>
          )}
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-8 border-b border-white/[0.06]">
          <Tag size={14} className="text-[var(--color-brand-400)]" />
          <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
            Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold flex items-center gap-2">
            <Share2 size={12} />
            Share:
          </span>
          {[
            {
              icon: FaWhatsapp,
              url: `https://wa.me/?text=${encodeURIComponent(
                post.title + " - " + shareUrl
              )}`,
              color: "hover:bg-green-500 hover:border-green-500",
            },
            {
              icon: FaFacebookF,
              url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
              color: "hover:bg-blue-600 hover:border-blue-600",
            },
            {
              icon: FaLinkedinIn,
              url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
              color: "hover:bg-blue-700 hover:border-blue-700",
            },
            {
              icon: FaTwitter,
              url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${shareUrl}`,
              color: "hover:bg-sky-500 hover:border-sky-500",
            },
          ].map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
              >
                <Icon size={13} />
              </a>
            );
          })}
        </div>

        {/* ============ CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl overflow-hidden text-center mb-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-500)]/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
              Need help implementing this?
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-5 max-w-md mx-auto">
              We help businesses across Kota and Indore turn ideas into real
              results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all"
              >
                <span>Book Free Call</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
                  <ArrowUpRight
                    size={12}
                    className="text-white group-hover:rotate-45 transition-transform"
                  />
                </span>
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-green-500/40 hover:bg-green-500/5 transition-all"
              >
                <FaWhatsapp size={14} className="text-green-400" />
                <span className="text-white text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ============ RELATED POSTS ============ */}
        {relatedPosts.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[var(--color-brand-400)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-400)] font-semibold">
                Read Next
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--color-brand-400)]/40 transition-all"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold mb-1">
                    {related.category}
                  </p>
                  <h4 className="text-sm font-bold text-white group-hover:text-[var(--color-brand-400)] transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogDetail;