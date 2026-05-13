import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Monitor, Sun } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { SERVICES } from '../../lib/data';
import type { ServiceCard } from '../../types';

const iconMap = {
  layers: Layers,
  monitor: Monitor,
  sun: Sun,
} as const;

function ServiceCardComponent({ card, index }: { card: ServiceCard; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = iconMap[card.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#f7f6f3] dark:bg-[#1a1a1a] p-10 sm:p-12 flex flex-col gap-5 overflow-hidden transition-colors duration-300 hover:bg-[#eceae4] dark:hover:bg-[#222]"
    >
      {/* Gold underline on hover */}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c9a84c] transition-all duration-500 group-hover:w-full" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-[14px] bg-white dark:bg-[#0a0a0a] border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon size={22} className="text-[#5a5754] dark:text-white/50" strokeWidth={1.5} />
      </div>

      {/* Tag */}
      <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#c9a84c]">
        {card.tag}
      </span>

      {/* Name */}
      <h3 className="font-serif text-[26px] font-normal text-[#1a1918] dark:text-white leading-[1.2] tracking-[-0.01em]">
        {card.name}
      </h3>

      {/* Description */}
      <p className="text-[15px] font-light text-[#5a5754] dark:text-white/40 leading-[1.7] flex-1">
        {card.description}
      </p>

      {/* Link */}
      <a
        href={card.linkHref}
        className="text-[13px] font-medium text-[#1a1918] dark:text-white/70 hover:text-[#c9a84c] dark:hover:text-[#c9a84c] inline-flex items-center gap-1.5 transition-all duration-200 group-hover:gap-3 mt-2"
      >
        {card.linkText}
      </a>
    </motion.div>
  );
}

export function ServicesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section id="services" className="bg-white dark:bg-[#0a0a0a] px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16"
        >
          <div>
            <SectionLabel>What we build</SectionLabel>
            <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#1a1918] dark:text-white max-w-[560px]">
              Intelligent products across{' '}
              <em className="not-italic italic text-[#c9a84c]">every dimension</em>
            </h2>
          </div>
          <p className="text-[17px] font-light text-[#5a5754] dark:text-white/50 max-w-[300px] leading-[1.75] md:text-right">
            Our current flagship sits in hospitality AI — but our product roadmap spans across industries, processes, and possibilities.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 rounded-2xl overflow-hidden">
          {SERVICES.map((service, i) => (
            <ServiceCardComponent key={service.name} card={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
