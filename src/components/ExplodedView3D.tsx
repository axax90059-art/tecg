import React, { useState } from 'react';
import { Layers, Info, Cpu, ShieldCheck, Zap, Sliders, ArrowRight } from 'lucide-react';
import { Language, HotspotPin } from '../types';
import { HOTSPOT_PINS } from '../data/mockData';

interface ExplodedView3DProps {
  lang: Language;
}

export const ExplodedView3D: React.FC<ExplodedView3DProps> = ({ lang }) => {
  const [selectedPin, setSelectedPin] = useState<HotspotPin>(HOTSPOT_PINS[0]);
  const [explodeFactor, setExplodeFactor] = useState<number>(40); // 0% to 100%

  return (
    <section id="3d-exploded" className="py-24 bg-slate-950 relative overflow-hidden text-slate-100 border-t border-slate-900">
      {/* Glow effect */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono font-semibold uppercase mb-3 tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>3D ARCHITECTURE & BLUEPRINT • 機器機構拆解</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Precision Inside Out.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                {lang === 'tw' ? '透視無塵氮氣烤箱的核心機構' : lang === 'en' ? 'Dissecting Semiconductor-Grade Chamber Mechanics' : '分解構造：精密内部メカニズム'}
              </span>
            </h2>
          </div>

          {/* Interactive Explode Factor Slider Control */}
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-4 backdrop-blur-md max-w-sm w-full">
            <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-2">
              <span className="flex items-center gap-1 text-cyan-400">
                <Sliders className="w-3.5 h-3.5" /> {lang === 'tw' ? '機構拆解爆破率' : 'Explode View Factor'}
              </span>
              <span className="font-bold text-cyan-300">{explodeFactor} %</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={explodeFactor}
              onChange={(e) => setExplodeFactor(Number(e.target.value))}
              className="w-full accent-cyan-400 h-1.5 bg-slate-950 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>{lang === 'tw' ? '完全組裝 (0%)' : 'Assembled (0%)'}</span>
              <span>{lang === 'tw' ? '完全拆解 (100%)' : 'Fully Exploded (100%)'}</span>
            </div>
          </div>
        </div>

        {/* Interactive 3D Stage & Hotspot Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center 3D Interactive Blueprint Canvas */}
          <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 relative h-[480px] sm:h-[540px] flex items-center justify-center overflow-hidden shadow-2xl">
            
            {/* Background Grid Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-3d" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22d3ee" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-3d)" />
            </svg>

            {/* Simulated 3D Exploded Layer Assembly */}
            <div className="relative w-full max-w-md h-full flex flex-col items-center justify-center">
              
              {/* Layer 1: Top ULPA Filter Module (Translates UP with explodeFactor) */}
              <div
                className="w-72 h-16 rounded-xl border-2 border-cyan-500/60 bg-slate-950/90 shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center transition-all duration-500 relative cursor-pointer group"
                style={{
                  transform: `translateY(-${explodeFactor * 0.9}px)`,
                }}
                onClick={() => setSelectedPin(HOTSPOT_PINS[0])}
              >
                <span className="text-xs font-mono font-bold text-cyan-300 group-hover:scale-105 transition-transform">
                  {lang === 'tw' ? '[1] ULPA / HEPA 高效層流過濾模組' : '[1] ULPA / HEPA LAMINAR FILTER'}
                </span>
                <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-cyan-400 text-slate-950 font-bold font-mono text-xs flex items-center justify-center animate-bounce shadow-lg">
                  1
                </span>
              </div>

              {/* Connecting CAD Laser Lines */}
              <div
                className="w-0.5 bg-gradient-to-b from-cyan-400 to-amber-400 opacity-60 transition-all duration-500"
                style={{ height: `${explodeFactor * 0.5 + 16}px` }}
              />

              {/* Layer 2: Main Thermal Chamber & Incoloy Heating Element */}
              <div
                className="w-80 h-36 rounded-2xl border-2 border-amber-500/60 bg-slate-900/90 shadow-[0_0_25px_rgba(245,158,11,0.2)] flex flex-col items-center justify-center p-4 transition-all duration-500 relative cursor-pointer group"
                onClick={() => setSelectedPin(HOTSPOT_PINS[1])}
              >
                <div className="text-xs font-mono font-bold text-amber-300 mb-1 group-hover:scale-105 transition-transform">
                  {lang === 'tw' ? '[2] INCOLOY 多區獨立加熱爐腔' : '[2] INCOLOY MULTI-ZONE HEATING CHAMBER'}
                </div>
                <div className="w-full h-8 bg-slate-950 rounded-lg border border-amber-500/30 flex items-center justify-around px-3 text-[10px] font-mono text-amber-200">
                  <span>{lang === 'tw' ? '9點等溫平衡' : '9-POINT BALANCE'}</span>
                  <span>±0.1 °C MATRIX</span>
                </div>
                <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-bold font-mono text-xs flex items-center justify-center shadow-lg">
                  2
                </span>
              </div>

              {/* Connecting Line 2 */}
              <div
                className="w-0.5 bg-gradient-to-b from-amber-400 to-blue-400 opacity-60 transition-all duration-500"
                style={{ height: `${explodeFactor * 0.5 + 16}px` }}
              />

              {/* Layer 3: Inert N2 Purge Nozzles & Oxygen Sensing Base */}
              <div
                className="w-72 h-16 rounded-xl border-2 border-blue-500/60 bg-slate-950/90 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center transition-all duration-500 relative cursor-pointer group"
                style={{
                  transform: `translateY(${explodeFactor * 0.7}px)`,
                }}
                onClick={() => setSelectedPin(HOTSPOT_PINS[2])}
              >
                <span className="text-xs font-mono font-bold text-blue-300 group-hover:scale-105 transition-transform">
                  {lang === 'tw' ? '[3] 氮氣置換噴嘴與氧氣感測器' : '[3] INERT N2 PURGE & O2 SENSOR'}
                </span>
                <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-blue-400 text-slate-950 font-bold font-mono text-xs flex items-center justify-center shadow-lg">
                  3
                </span>
              </div>

              {/* Layer 4: SECS/GEM Smart PLC Controller Terminal Side-Attach */}
              <div
                className="absolute right-4 bottom-6 w-44 h-24 rounded-xl border-2 border-indigo-500/60 bg-slate-950/90 p-3 flex flex-col justify-between transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedPin(HOTSPOT_PINS[3])}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-indigo-300">
                  <span>{lang === 'tw' ? '[4] PLC 控制器' : '[4] PLC CONTROL'}</span>
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div className="text-[11px] font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {lang === 'tw' ? 'SECS/GEM 智慧節點' : 'SECS/GEM IoT Node'}
                </div>
                <span className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-indigo-400 text-slate-950 font-bold font-mono text-[10px] flex items-center justify-center shadow-lg">
                  4
                </span>
              </div>

            </div>

            {/* Instruction Overlay */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-950/80 px-3 py-1.5 rounded-lg border border-white/5">
              {lang === 'tw' ? '點擊組件查看 CAD 精密規格' : 'CLICK COMPONENT TO INSPECT CAD SPECS'}
            </div>
          </div>

          {/* Right Side: Detailed Hotspot Component Inspector */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase">
                  {selectedPin.category[lang]}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                {selectedPin.title[lang]}
              </h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                {selectedPin.description[lang]}
              </p>

              {/* Technical Specifications List */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {lang === 'tw' ? 'CAD 機構工程規格數據' : 'ENGINEERING METRICS (CAD DATA)'}
                </div>
                {Object.entries(selectedPin.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-white/5 font-mono text-xs">
                    <span className="text-slate-400">{key}</span>
                    <span className="font-bold text-cyan-300">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Switch Hotspot Tabs */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
              {HOTSPOT_PINS.map((pin, idx) => (
                <button
                  key={pin.id}
                  onClick={() => setSelectedPin(pin)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 ${
                    selectedPin.id === pin.id
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                      : 'bg-slate-900 text-slate-400 border border-white/5 hover:text-white'
                  }`}
                >
                  <span>#{idx + 1}</span>
                  <span className="truncate max-w-[90px]">{pin.title[lang]}</span>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
