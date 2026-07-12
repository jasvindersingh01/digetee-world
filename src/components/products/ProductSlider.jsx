import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroBanners } from "../../constants/products";

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBanners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % heroBanners.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);

  return (
    <div className="relative w-full min-h-[400px] md:min-h-[550px] lg:min-h-[700px] flex items-center justify-center overflow-hidden group">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-brand-500)]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Slides Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex items-center justify-center px-4 md:px-8"
          >
            <img
              src={heroBanners[current].image}
              alt={heroBanners[current].alt}
              className="w-full max-w-7xl h-auto object-contain drop-shadow-[0_20px_60px_rgba(34,211,238,0.25)]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-[var(--color-brand-500)] hover:border-[var(--color-brand-400)] transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-[var(--color-brand-500)] hover:border-[var(--color-brand-400)] transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i
                ? "w-10 bg-[var(--color-brand-400)] shadow-[0_0_10px_var(--color-brand-400)]"
                : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 z-20">
        <span className="text-xs font-mono text-white">
          <span className="text-[var(--color-brand-400)] font-bold">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-white/40 mx-1">/</span>
          <span>{String(heroBanners.length).padStart(2, "0")}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductSlider;