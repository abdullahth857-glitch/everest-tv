import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import DevicesSection from '@/components/DevicesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

/**
 * Alpine Luxury Design System
 * - Dark theme with black (#0F0F1E) and navy (#1A1A2E) backgrounds
 * - Glowing blue accents (#00D4FF, #0099FF)
 * - Glassmorphism effects with backdrop blur
 * - Premium typography with Poppins for headings
 * - Smooth animations and transitions
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <DevicesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
