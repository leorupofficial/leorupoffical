import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { FeaturedSection } from './components/sections/FeaturedSection';
import { TeamSection } from './components/sections/TeamSection';
import { VisionSection } from './components/sections/VisionSection';
import { CTASection } from './components/sections/CTASection';

export default function App() {
  return (
    <div className="font-sans bg-white dark:bg-[#0a0a0a]">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedSection />
        <TeamSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
