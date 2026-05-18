/*
 * CIBORE V2 — Home Page
 * Design: Midnight Cartography
 * Assembles all sections in order
 */

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import VisionSection from '@/components/sections/VisionSection';
import SitesSection from '@/components/sections/SitesSection';
import WhyCiboreSection from '@/components/sections/WhyCiboreSection';
import StatsBarSection from '@/components/sections/StatsBarSection';
import TransformationSection from '@/components/sections/TransformationSection';
import PartnersSection from '@/components/sections/PartnersSection';
import DeploymentSection from '@/components/sections/DeploymentSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'oklch(0.07 0.008 240)', color: 'oklch(0.95 0.003 240)' }}
    >
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <VisionSection />
      <SitesSection />
      <WhyCiboreSection />
      <StatsBarSection />
      <TransformationSection />
      <PartnersSection />
      <DeploymentSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
