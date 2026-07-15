import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock,
  Calendar,
  ArrowUpRight,
  BookOpen,
  Search,
} from "lucide-react";
import { blogPosts, blogCategories } from "../constants/blogs";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts
    .filter((post) =>
      activeCategory === "All" ? true : post.category === activeCategory
    )
    .filter((post) =>
      searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    );

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] pb-20 md:pb-28">
      {/* ============ HERO ============ */}
      <div className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[var(--color-brand-500)]/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-6"
          >
            <BookOpen size={12} className="text-[var(--color-brand-400)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              Our Blog
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5"
          >
            Insights that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] via-[var(--color-accent-neon)] to-[var(--color-brand-400)]">
              power growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base text-[var(--color-text-secondary)] leading-relaxed mb-8"
          >
            Simple, practical guides to help you grow your business online.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <div className="relative flex items-center">
              <Search
                size={14}
                className="absolute left-4 text-[var(--color-text-muted)] pointer-events-none z-10"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-sm text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-brand-400)]/50 focus:bg-white/[0.05] transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============ CATEGORIES ============ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  : "bg-white/[0.03] border border-white/[0.08] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-400)]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ============ BLOG GRID (2 columns) ============ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <Search
              size={40}
              className="text-[var(--color-text-muted)] mx-auto mb-4 opacity-50"
            />
            <p className="text-[var(--color-text-secondary)] mb-2">
              No articles found
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              More content coming soon!
            </p>
          </div>
        )}

        {/* Coming soon note */}
        {filteredPosts.length > 0 && filteredPosts.length <= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-[var(--color-text-muted)]">
              📝 More articles coming soon. Stay tuned!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// ============ BLOG CARD ============
const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Gradient hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none`}
      />

      {/* Image */}
      <Link
        to={`/blog/${post.slug}`}
        className="relative aspect-video overflow-hidden bg-black/40"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 z-10">
          <span className="text-[10px] uppercase tracking-wider text-white font-bold">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="relative p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1.5 text-[10px] text-[var(--color-text-muted)]">
            <Calendar size={10} />
            {post.date}
          </div>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-1.5 text-[10px] text-[var(--color-text-muted)]">
            <Clock size={10} />
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-white mb-3 leading-tight hover:text-[var(--color-brand-400)] transition-colors">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5 flex-1">
          {post.excerpt}
        </p>

        {/* Author + Read more */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-400)] flex items-center justify-center text-white font-bold text-[10px]">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-xs text-white font-semibold leading-tight">
                {post.author}
              </p>
              <p className="text-[9px] text-[var(--color-text-muted)]">
                Founder
              </p>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="group/btn inline-flex items-center gap-1.5 text-xs text-[var(--color-brand-400)] font-semibold hover:gap-2 transition-all"
          >
            <span>Read More</span>
            <ArrowUpRight
              size={12}
              className="group-hover/btn:rotate-45 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPage;