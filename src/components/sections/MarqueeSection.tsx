import { MARQUEE_ITEMS } from '../../lib/data';

export function MarqueeSection() {
  // Duplicate for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="py-5 border-t border-b border-black/[0.08] dark:border-white/[0.06] bg-[#f7f6f3] dark:bg-[#111] overflow-hidden">
      <div className="flex gap-[60px] marquee-track whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 text-[13px] font-normal tracking-[0.08em] uppercase text-[#9a9895] flex-shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-[#c9a84c] flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
