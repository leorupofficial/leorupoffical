import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const base = { duration: 0.85, ease: 'easeOut' as const };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-24 pb-20 overflow-hidden bg-white dark:bg-[#0a0a0a]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 10%, rgba(201,168,76,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(30,40,100,0.05) 0%, transparent 60%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: 0.2 }}
        className="relative flex items-center gap-3 text-[12px] font-medium tracking-[0.15em] uppercase text-[#c9a84c] mb-7"
      >
        <span className="block w-8 h-px bg-[#c9a84c]" />
        AI-Powered Business Intelligence
        <span className="block w-8 h-px bg-[#c9a84c]" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: 0.35 }}
        className="font-serif text-[clamp(44px,8vw,96px)] font-normal leading-[1.0] tracking-[-0.02em] text-[#1a1918] dark:text-white max-w-[900px] relative"
      >
        Building{' '}
        <em className="not-italic italic text-[#c9a84c]">intelligent</em>
        <br />software for<br />tomorrow's business
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: 0.5 }}
        className="mt-7 text-[17px] sm:text-[18px] font-light text-[#5a5754] dark:text-white/50 max-w-[520px] leading-[1.75] relative"
      >
        LeoRup is a next-generation AI company crafting products that automate, elevate, and transform how businesses operate — starting in the UK and built to scale globally.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: 0.65 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 items-center relative mb-8"
      >
        <a href="#services" className="inline-flex items-center bg-[#1a1918] dark:bg-[#c9a84c] text-white dark:text-[#0a0a0a] font-medium text-[15px] px-8 py-[14px] rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200">
          Explore our work
        </a>
        <a href="#about" className="inline-flex items-center gap-1.5 text-[15px] font-normal text-[#5a5754] dark:text-white/50 hover:text-[#1a1918] dark:hover:text-white transition-colors group">
          Our story
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      </motion.div>

      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 28 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { ...base, delay: 1.2 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[11px] tracking-[0.12em] uppercase text-[#9a9895] group-hover:text-[#c9a84c] transition-colors">Scroll</span>
        <div className="w-px h-9 bg-gradient-to-b from-[#9a9895] to-transparent scroll-line group-hover:from-[#c9a84c]" />
      </motion.button>
    </section>
  );
}
