import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative w-10 h-10 rounded-full flex items-center justify-center transition-colors',
        'border border-black/10 dark:border-white/10',
        'bg-white/60 dark:bg-white/5 backdrop-blur-sm',
        'hover:bg-[#c9a84c]/10',
        className
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'light'
          ? <Moon size={15} className="text-[#5a5754]" />
          : <Sun size={15} className="text-[#c9a84c]" />
        }
      </motion.div>
    </motion.button>
  );
}
