import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PrecisionDNA } from './components/PrecisionDNA';
import { ExplodedView3D } from './components/ExplodedView3D';
import { SmartDashboard } from './components/SmartDashboard';
import { PainPointDiagnosis } from './components/PainPointDiagnosis';
import { SpecComparisonAndRFQ } from './components/SpecComparisonAndRFQ';
import { GlobalTrustFooter } from './components/GlobalTrustFooter';

export default function App() {
  const [lang, setLang] = useState<Language>('tw');
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [rfqModalOpen, setRfqModalOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 antialiased">
      {/* Top Fixed Header Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenRFQ={() => setRfqModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        lang={lang}
        onOpenRFQ={() => setRfqModalOpen(true)}
        onExploreSpecs={() => scrollToSection('specs-rfq')}
      />

      {/* Precision DNA Highlights */}
      <PrecisionDNA lang={lang} />

      {/* 3D Exploded View & Blueprint Hotspots */}
      <ExplodedView3D lang={lang} />

      {/* Smart Factory SECS/GEM IoT Dashboard Simulator */}
      <SmartDashboard lang={lang} />

      {/* Pain Point Diagnosis & Transformation Principles */}
      <PainPointDiagnosis lang={lang} />

      {/* Engineering Specs & B2B RFQ Engine */}
      <SpecComparisonAndRFQ
        lang={lang}
        rfqModalOpen={rfqModalOpen}
        setRfqModalOpen={setRfqModalOpen}
      />

      {/* Global Trust Footer & Certifications */}
      <GlobalTrustFooter lang={lang} />
    </div>
  );
}
