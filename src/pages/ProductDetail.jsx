import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Tag,
  Sparkles,
  Users,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getProductById, getWhatsAppLink } from "../constants/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] pt-28 pb-20">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[var(--color-brand-500)]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-400)] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ========== IMAGE ========== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative lg:sticky lg:top-32 h-fit"
          >
            {/* Glow behind */}
            <div
              className={`absolute -inset-4 bg-gradient-to-br ${product.gradient} opacity-20 rounded-3xl blur-3xl`}
            />

            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-black/40 shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.discount && (
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-500 shadow-lg">
                    <Tag size={12} className="text-white" />
                    <span className="text-xs text-white font-bold">
                      {product.discount}
                    </span>
                  </div>
                )}
                {product.badge && (
                  <div className="px-3 py-1.5 rounded-full bg-[var(--color-brand-400)]/20 backdrop-blur-xl border border-[var(--color-brand-400)]/40">
                    <span className="text-xs uppercase tracking-wider text-white font-bold">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ========== CONTENT ========== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Category */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
              <Sparkles size={12} className="text-[var(--color-brand-400)]" />
              <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-400)] font-bold">
                {product.tagline}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {product.fullDesc}
            </p>

            {/* Price */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6">
              <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Special Price
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-white">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-[var(--color-text-muted)] line-through">
                      {product.originalPrice}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold">
                      {product.discount}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-8">
              <a
                href={getWhatsAppLink(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2 pl-6 pr-2 py-3 rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-500"
              >
                <ShoppingBag size={16} />
                <span>Buy Now</span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <FaWhatsapp size={14} />
                </span>
              </a>

              <a
                href={getWhatsAppLink(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-500"
              >
                <FaWhatsapp size={16} className="text-green-400" />
                <span className="text-white font-medium text-sm">
                  Chat for Details
                </span>
              </a>
            </div>

            {/* What You'll Learn / Features */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold mb-4 flex items-center gap-2">
                <Check size={12} />
                What You'll {product.category === "books" ? "Learn" : "Get"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {product.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-brand-400)]/20 border border-[var(--color-brand-400)]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        size={10}
                        className="text-[var(--color-brand-400)]"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            {product.idealFor && (
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-400)] font-bold mb-4 flex items-center gap-2">
                  <Users size={12} />
                  Ideal For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.idealFor.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white font-medium hover:border-[var(--color-brand-400)]/40 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;