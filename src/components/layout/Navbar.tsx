import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NAV_ITEMS } from '../../lib/data';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Small delay so menu closes before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 h-16 flex items-center justify-between transition-all duration-300',
          scrolled
            ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.06] shadow-sm'
            : 'bg-white/70 dark:bg-transparent backdrop-blur-md border-b border-black/[0.05] dark:border-white/[0.03]'
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-[22px] tracking-[-0.5px] text-[#1a1918] dark:text-white no-underline"
        >
          Leo<span className="text-[#c9a84c]">Rup</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-[14px] font-normal text-[#5a5754] dark:text-white/50 hover:text-[#1a1918] dark:hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center text-[13px] font-medium text-white bg-[#1a1918] dark:bg-[#c9a84c] dark:text-[#0a0a0a] px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
          >
            Get in touch
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} className="text-[#1a1918] dark:text-white" /> : <Menu size={18} className="text-[#1a1918] dark:text-white" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0a0a0a] flex flex-col pt-20 px-6"
          >
            {/* Top row with theme toggle in mobile menu */}
            <div className="absolute top-4 right-[72px]">
              <ThemeToggle />
            </div>

            <ul className="flex flex-col gap-1 list-none mt-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left font-serif text-4xl text-[#1a1918] dark:text-white py-3 border-b border-black/[0.06] dark:border-white/[0.06] hover:text-[#c9a84c] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8"
            >
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center text-[15px] font-medium text-white bg-[#1a1918] dark:bg-[#c9a84c] dark:text-[#0a0a0a] px-8 py-4 rounded-full"
              >
                Get in touch
              </a>
            </motion.div>

            <p className="mt-auto mb-8 text-[13px] text-[#9a9895] font-light">
              Intelligence for business. Built in Scotland.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
