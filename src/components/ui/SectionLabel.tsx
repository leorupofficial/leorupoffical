import { cn } from '../../lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'text-[11px] font-medium tracking-[0.18em] uppercase mb-5',
        light ? 'text-[#e8c96a]' : 'text-[#c9a84c]',
        className
      )}
    >
      {children}
    </div>
  );
}
