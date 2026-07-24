import React, { useState, useEffect } from 'react';
import { Cpu, Globe, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXTS } from '../data/mockData';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
  onOpenRFQ: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  activeSection,
  setActiveSection,
  onOpenRFQ,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: UI_TEXTS.navOverview[lang] },
    { id: 'precision-dna', label: UI_TEXTS.navPrecisionDNA[lang] },
    { id: '3d-exploded', label: UI_TEXTS.nav3DView[lang] },
    { id: 'dashboard', label: UI_TEXTS.navDashboard[lang] },
    { id: 'diagnosis', label: UI_TEXTS.navDiagnosis[lang] },
    { id: 'specs-rfq', label: UI_TEXTS.navRFQ[lang] },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/10 shadow-2xl shadow-cyan-950/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => scrollToSection('overview')}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
            <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
              <span>WEI-SUN</span>
              <span className="text-cyan-400 font-extrabold text-xs px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 tracking-wider">
                TECH
              </span>
            </div>
            <div className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">
              {UI_TEXTS.subBrandName[lang]}
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900/80 border border-white/10 rounded-lg p-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
            <button
              onClick={() => setLang('tw')}
              className={`px-2 py-1 rounded transition ${
                lang === 'tw'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              繁中
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded transition ${
                lang === 'en'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('jp')}
              className={`px-2 py-1 rounded transition ${
                lang === 'jp'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              JP
            </button>
          </div>

          {/* Instant RFQ Button */}
          <button
            onClick={onOpenRFQ}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{UI_TEXTS.requestRfqBtn[lang]}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-white/10 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-cyan-500/20 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setLang('tw')}
                className={`px-3 py-1.5 rounded ${
                  lang === 'tw' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400'
                }`}
              >
                繁體中文
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded ${
                  lang === 'en' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('jp')}
                className={`px-3 py-1.5 rounded ${
                  lang === 'jp' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400'
                }`}
              >
                日本語
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg text-xs"
            >
              RFQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
