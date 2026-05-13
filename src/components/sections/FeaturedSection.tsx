import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { FEATURES, PHONE_MENU } from '../../lib/data';

function PhoneMockup() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-[260px] sm:w-[280px] relative"
        style={{
          background: '#111',
          borderRadius: 44,
          padding: 16,
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 80px 120px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.06)',
        }}
      >
        {/* Screen */}
        <div
          style={{
            background: '#0f0f0f',
            borderRadius: 32,
            overflow: 'hidden',
            aspectRatio: '9/19.5',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Notch */}
          <div className="h-7 bg-[#0f0f0f] flex items-center justify-center">
            <div className="w-20 h-2.5 bg-[#1a1a1a] rounded-full" />
          </div>

          {/* Content */}
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
            {/* Header */}
            <div className="text-center pb-3 border-b border-white/[0.07]">
              <div className="text-[13px] font-medium text-white/90">The Thistle Kitchen</div>
              <div
                className="inline-flex items-center gap-1 text-[9px] text-[#c9a84c] rounded-full px-2 py-[3px] mt-1 tracking-wide uppercase"
                style={{ background: 'rgba(201,168,76,0.12)', border: '0.5px solid rgba(201,168,76,0.3)' }}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-[#c9a84c] pulse-dot" />
                AI Assistant Active
              </div>
            </div>

            {/* Chat message */}
            <div
              className="text-[11px] text-white/75 leading-[1.5] max-w-[85%] px-3 py-2 rounded-[4px_12px_12px_12px]"
              style={{ background: 'rgba(201,168,76,0.12)', border: '0.5px solid rgba(201,168,76,0.2)' }}
            >
              Hello! I'm your AI waiter tonight. What can I get started for you? 🍽️
            </div>

            {/* Menu items */}
            {PHONE_MENU.map(item => (
              <div
                key={item.name}
                className="flex gap-2.5 items-center p-3 rounded-[12px]"
                style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2a1f0a, #3d2e10)' }}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium text-white/85 truncate">{item.name}</div>
                  <div className="text-[11px] text-[#c9a84c] mt-0.5">{item.price}</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#c9a84c] flex items-center justify-center text-[14px] text-[#0a0a0a] font-semibold flex-shrink-0">+</div>
              </div>
            ))}

            {/* Order button */}
            <div className="mt-auto bg-[#c9a84c] text-[#0a0a0a] text-[12px] font-semibold px-3 py-3 rounded-xl text-center tracking-[0.02em]">
              Place Order — £55.50
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="product" className="relative bg-white dark:bg-[#0a0a0a] text-[#1a1918] dark:text-white px-5 sm:px-8 py-24 sm:py-32 overflow-hidden transition-colors duration-300">
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 80% 50%, rgba(26, 26, 46, 0.1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(26, 18, 10, 0.1) 0%, transparent 60%)
          `,
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Flagship Product</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#1a1918] dark:text-white max-w-[520px]">
            The AI waiter that{' '}
            <em className="not-italic italic text-[#c9a84c]">never</em>{' '}
            misses an order
          </h2>
          <p className="mt-5 text-[17px] font-light text-[#5a5754] dark:text-white/55 max-w-[520px] leading-[1.75]">
            Customers scan a QR code and instantly connect with an intelligent AI assistant — browsing menus, asking questions, placing orders, and paying without friction. For dine-in, geo-verification ensures authenticity.
          </p>

          {/* Features */}
          <div className="mt-10 flex flex-col gap-3">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 items-start p-5 rounded-2xl transition-colors duration-200 bg-[#f7f6f3] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.08] hover:bg-[#eceae4] dark:hover:bg-white/[0.07]"
              >
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] flex-shrink-0 mt-[5px]" />
                <div>
                  <h4 className="text-[15px] font-medium text-[#1a1918] dark:text-white/90 mb-1">{feat.title}</h4>
                  <p className="text-[14px] font-light text-[#5a5754] dark:text-white/45 leading-[1.6]">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
