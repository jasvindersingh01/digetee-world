import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ShoppingBag,
  BookOpen,
  Cpu,
  Tag,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ProductSlider from "../components/products/ProductSlider";
import { books, nfcProducts, getWhatsAppLink } from "../constants/products";

const ProductsPage = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)]">
      {/* ============ FULL WIDTH HERO SLIDER ============ */}
      <div className="relative w-full pt-24 md:pt-28">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* Enhanced Slider */}
        <ProductSlider />

        {/* Bottom Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {[
              { label: "Expert Guidance", icon: "🎯" },
              { label: "Practical Training", icon: "📚" },
              { label: "Lifetime Value", icon: "💎" },
              { label: "Instant Access", icon: "⚡" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-[var(--color-brand-400)]/30 hover:bg-white/[0.05] transition-all"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-xs md:text-sm text-white font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ============ BOOKS SECTION (5 in a row) ============ */}
      <ProductSection
        subtitle="Books & Courses"
        heading="Learn from"
        headingHighlight="proven experts"
        description="Comprehensive guides packed with real-world strategies to grow your business, master marketing, and achieve digital success."
        icon={BookOpen}
        products={books}
        gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      />

      {/* ============ NFC PRODUCTS SECTION (4 in a row) ============ */}
      <ProductSection
        subtitle="Digital Innovation"
        heading="Networking"
        headingHighlight="reimagined"
        description="Cutting-edge NFC-enabled products that make networking, sharing, and reviews smarter, faster, and more effective."
        icon={Cpu}
        products={nfcProducts}
        gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      />
    </section>
  );
};

// ============ PRODUCT SECTION ============
const ProductSection = ({
  subtitle,
  heading,
  headingHighlight,
  description,
  icon: Icon,
  products,
  gridCols,
}) => (
  <div className="relative w-full overflow-hidden py-16 md:py-24">
    <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-brand-500)]/10 rounded-full blur-[130px] pointer-events-none" />
    <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--color-accent-neon)]/8 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-5">
          <Icon size={12} className="text-[var(--color-brand-400)]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
            {subtitle}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] mb-4">
          {heading}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)]">
            {headingHighlight}
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className={`grid ${gridCols} gap-4 md:gap-5`}>
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  </div>
);

// ============ PRODUCT CARD ============
const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:border-[var(--color-brand-400)]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Gradient hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none`}
      />

      {/* Image */}
      <Link
        to={`/products/${product.id}`}
        className="relative aspect-[3/4] overflow-hidden bg-black/40"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
            <Tag size={9} className="text-white" />
            <span className="text-[9px] text-white font-bold">
              {product.discount}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="relative p-3 md:p-4 flex flex-col flex-1">
        {/* Tagline */}
        <p className="text-[9px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold mb-1.5 line-clamp-1">
          {product.tagline}
        </p>

        {/* Title */}
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-tight hover:text-[var(--color-brand-400)] transition-colors line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-3">
          <span className="text-lg md:text-xl font-bold text-white">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[var(--color-text-muted)] line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1.5 mt-auto">
          <a
            href={getWhatsAppLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold text-[11px] overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500 relative"
          >
            <FaWhatsapp size={11} className="relative z-10" />
            <span className="relative z-10">Buy Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
          </a>

          <Link
            to={`/products/${product.id}`}
            className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white hover:border-[var(--color-brand-400)]/50 hover:bg-white/[0.05] transition-all flex-shrink-0 group/arrow"
          >
            <ArrowUpRight
              size={12}
              className="group-hover/arrow:rotate-45 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsPage;