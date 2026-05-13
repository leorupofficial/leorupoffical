import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { VISION_PILLARS } from '../../lib/data';

export function VisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="vision" className="bg-white dark:bg-[#0a0a0a] px-5 sm:px-8 py-24 sm:py-32">
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Where we're going</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#1a1918] dark:text-white max-w-[580px]">
            LeoRup is not just one product. It's a{' '}
            <em className="not-italic italic text-[#c9a84c]">platform for the future.</em>
          </h2>
          <p className="mt-5 text-[17px] font-light text-[#5a5754] dark:text-white/50 max-w-[520px] leading-[1.75]">
            We are building LeoRup to be a diversified AI company — one that creates products across industries, grows with its clients, and continuously pushes the frontier of what intelligent software can do.
          </p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center mt-9 bg-[#1a1918] dark:bg-[#c9a84c] text-white dark:text-[#0a0a0a] font-medium text-[15px] px-8 py-[14px] rounded-full hover:opacity-80 active:scale-95 transition-all duration-200"
          >
            Partner with us
          </motion.a>
        </motion.div>

        {/* Right: pillars */}
        <div className="flex flex-col gap-0.5 rounded-2xl overflow-hidden">
          {VISION_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 items-start px-8 py-7 bg-[#f7f6f3] dark:bg-[#1a1a1a] transition-colors duration-200 hover:bg-[#eceae4] dark:hover:bg-[#222]"
            >
              <span className="font-serif text-[13px] text-[#c9a84c] flex-shrink-0 mt-0.5 w-5">{pillar.num}</span>
              <div>
                <h4 className="text-[16px] font-medium text-[#1a1918] dark:text-white mb-1.5">{pillar.title}</h4>
                <p className="text-[14px] font-light text-[#5a5754] dark:text-white/40 leading-[1.65]">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
