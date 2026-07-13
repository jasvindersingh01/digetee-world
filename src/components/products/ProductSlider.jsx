import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { heroBanners } from "../../constants/products";

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % heroBanners.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);

  return (
    <div className="relative w-full pb-8 md:pb-12">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-brand-500)]/20 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent-neon)]/15 rounded-full blur-[130px] pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--color-brand-600)]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Slider Container */}
      <div className="relative w-full min-h-[350px] sm:min-h-[450px] md:min-h-[600px] lg:min-h-[750px] flex items-center justify-center overflow-hidden group">
        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full flex items-center justify-center px-4 md:px-8"
          >
            {/* Image with float animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-6xl"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-brand-500)]/20 via-[var(--color-accent-neon)]/15 to-[var(--color-brand-400)]/20 rounded-3xl blur-3xl opacity-70 animate-pulse" />

              {/* Image */}
              <img
                src={heroBanners[current].image}
                alt={heroBanners[current].alt}
                className="relative w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(34,211,238,0.35)] rounded-2xl"
              />

              {/* Decorative sparkles */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 text-[var(--color-brand-400)]"
              >
                <Sparkles size={24} />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, -180, -360],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 text-[var(--color-accent-neon)]"
              >
                <Sparkles size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-gradient-to-br hover:from-[var(--color-brand-500)] hover:to-[var(--color-brand-400)] hover:border-[var(--color-brand-400)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </motion.button>
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1, x: 3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-gradient-to-br hover:from-[var(--color-brand-500)] hover:to-[var(--color-brand-400)] hover:border-[var(--color-brand-400)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </motion.button>

        {/* Slide counter — top right */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] animate-pulse" />
            <span className="text-xs font-mono text-white">
              <span className="text-[var(--color-brand-400)] font-bold">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-white/40 mx-1">/</span>
              <span>{String(heroBanners.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 flex flex-col items-center gap-4 mt-6">
        {/* Progress bar for current slide */}
        <div className="w-full max-w-md h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            key={current}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 4,
              ease: "linear",
            }}
            className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] shadow-[0_0_10px_var(--color-brand-400)]"
          />
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-3">
          {heroBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group/dot relative flex items-center gap-2"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={`transition-all duration-500 rounded-full ${current === i
                    ? "w-12 h-2 bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] shadow-[0_0_10px_var(--color-brand-400)]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60 hover:scale-125"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;