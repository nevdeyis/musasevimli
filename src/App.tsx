import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { OfficeLocationMap } from './components/OfficeLocationMap';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';

export default function App() {
  const navigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header with Navigation & Direct Call */}
      <Header 
        onNavigateToSection={navigateToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero: Office Introduction & Contact Highlights */}
        <Hero 
          onNavigateToLocation={() => navigateToSection('konum')}
          onNavigateToServices={() => navigateToSection('islemler')}
        />

        {/* 2. Yapılan İşlemler (Operations Performed) */}
        <ServicesSection />

        {/* 3. Açık Ofis Konumu & Ulaşım (Location & Interactive Map) */}
        <OfficeLocationMap />
      </main>

      {/* Simple Professional Footer */}
      <Footer onNavigateToSection={navigateToSection} />

      {/* Floating Quick Call & WhatsApp for Mobile Users */}
      <FloatingContactBar 
        onNavigateToLocation={() => navigateToSection('konum')}
      />
    </div>
  );
}
