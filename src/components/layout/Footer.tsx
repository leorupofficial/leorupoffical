const FOOTER_COLS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'The Team', href: '#team' },
      { label: 'Vision', href: '#vision' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'AI Ordering', href: '#product' },
      { label: 'B2B Automation', href: '#services' },
      { label: 'AI Solutions', href: '#services' },
      { label: 'Roadmap', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter / X', href: '#' },
      { label: 'Email Us', href: 'mailto:leorupofficial@gmail.com' },
      { label: 'Press Kit', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#f7f6f3] dark:bg-[#111] pt-14 pb-8 px-5 sm:px-8 border-t border-black/[0.07] dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-serif text-[20px] text-[#1a1918] dark:text-white block mb-3">
              Leo<span className="text-[#c9a84c]">Rup</span>
            </a>
            <p className="text-[14px] text-[#9a9895] font-light leading-relaxed max-w-[220px]">
              Intelligence for business. Built in Scotland, designed for the world.
            </p>
          </div>

          {/* Link Columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <h5 className="text-[12px] font-medium tracking-[0.12em] uppercase text-[#9a9895] mb-4">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-2.5 list-none">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-[#5a5754] dark:text-white/40 font-light hover:text-[#1a1918] dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-black/[0.07] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[#9a9895] font-light order-2 sm:order-1">
            © 2024 LeoRup Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[12px] text-[#9a9895] order-1 sm:order-2">
            <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Proudly founded in Scotland, UK
          </div>
        </div>
      </div>
    </footer>
  );
}
