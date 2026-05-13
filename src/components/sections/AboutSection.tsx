import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { STATS } from '../../lib/data';

function StatCard({ number, suffix, label, delay }: { number: string; suffix?: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-[#1a1a1a] px-7 py-9 flex flex-col gap-2"
    >
      <div className="font-serif text-[44px] sm:text-[48px] font-normal text-[#1a1918] dark:text-white leading-none tracking-[-0.02em]">
        {number}
        {suffix && <span className="text-[#c9a84c] text-[30px]">{suffix}</span>}
      </div>
      <div className="text-[14px] text-[#9a9895] font-normal">{label}</div>
    </motion.div>
  );
}

export function AboutSection() {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-50px' });

  return (
    <section id="about" className="bg-[#f7f6f3] dark:bg-[#0f0f0f] px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Left: text */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, y: 24 }}
          animate={leftInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Who we are</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#1a1918] dark:text-white max-w-[600px]">
            A new kind of{' '}
            <em className="not-italic italic text-[#c9a84c]">AI company</em>{' '}
            rooted in ambition
          </h2>
          <p className="mt-5 text-[17px] font-light text-[#5a5754] dark:text-white/50 max-w-[520px] leading-[1.75]">
            Founded by three Masters graduates in Scotland, LeoRup was born from a shared belief: that intelligent software should be accessible to every business, not just the giants. We are builders, researchers, and problem-solvers — and we're only just getting started.
          </p>
          <p className="mt-4 text-[17px] font-light text-[#5a5754] dark:text-white/50 max-w-[520px] leading-[1.75]">
            Our first products focus on hospitality and B2B automation, but our vision reaches far further — into every industry that could benefit from a smarter, more connected future.
          </p>
        </motion.div>

        {/* Right: stats grid */}
        <div className="grid grid-cols-2 gap-0.5 rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
