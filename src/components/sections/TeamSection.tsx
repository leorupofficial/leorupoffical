import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { TEAM_MEMBERS } from '../../lib/data';

export function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="team" className="bg-[#f7f6f3] dark:bg-[#0f0f0f] px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <SectionLabel>The founders</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#1a1918] dark:text-white max-w-[600px]">
            Five friends, one{' '}
            <em className="not-italic italic text-[#c9a84c]">bold</em>{' '}
            vision
          </h2>
          <p className="mt-5 text-[17px] font-light text-[#5a5754] dark:text-white/50 max-w-[520px] leading-[1.75]">
            Masters graduates setting out to build meaningful technology from Scotland — driven by expertise, ambition, and a genuine desire to change how businesses use AI.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.initial}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl px-5 py-8 text-center flex flex-col items-center gap-3 group hover:-translate-y-1 transition-transform duration-300 cursor-default"
            >
              {/* Avatar */}
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center font-serif text-[26px] text-[#1a1918] border-2 border-black/[0.07] dark:border-white/[0.07] flex-shrink-0"
                style={{ background: member.avatarColor }}
              >
                {member.initial}
              </div>

              <div className="text-[16px] font-medium text-[#1a1918] dark:text-white">{member.name}</div>
              <div className="text-[13px] font-light text-[#9a9895] leading-snug">{member.role}</div>

              {/* Founder badge */}
              <span
                className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#c9a84c] px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(201,168,76,0.10)', border: '0.5px solid rgba(201,168,76,0.25)' }}
              >
                Founder
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
