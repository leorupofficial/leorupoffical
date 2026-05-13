import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="relative bg-white dark:bg-[#0a0a0a] text-[#1a1918] dark:text-white text-center px-5 sm:px-8 py-32 sm:py-40 overflow-hidden transition-colors duration-300">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#c9a84c] mb-7"
        >
          Get in touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(36px,6vw,68px)] font-normal leading-[1.05] tracking-[-0.02em] text-[#1a1918] dark:text-white mb-7"
        >
          Ready to build something{' '}
          <em className="not-italic italic text-[#c9a84c]">remarkable</em>{' '}
          together?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[17px] font-light text-[#5a5754] dark:text-white/50 max-w-[420px] mx-auto mb-12 leading-[1.7]"
        >
          Whether you're a potential client, partner, investor, or collaborator — we'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="mailto:leorupofficial@gmail.com"
            className="inline-flex items-center bg-[#1a1918] dark:bg-[#c9a84c] text-white dark:text-[#0a0a0a] font-semibold text-[15px] px-8 py-[14px] rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 tracking-[0.01em]"
          >
            leorupofficial@gmail.com
          </a>
          <a
            href="#"
            className="text-[15px] font-normal text-[#5a5754] dark:text-white/60 hover:text-[#1a1918] dark:hover:text-white transition-colors"
          >
            Schedule a call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
