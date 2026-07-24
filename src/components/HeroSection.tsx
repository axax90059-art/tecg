import React, { useState } from 'react';
import { Cpu, ShieldCheck, Thermometer, Wind, Zap, Eye, Play, Sparkles, Layers, Activity } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXTS } from '../data/mockData';

interface HeroSectionProps {
  lang: Language;
  onOpenRFQ: () => void;
  onExploreSpecs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenRFQ,
  onExploreSpecs,
}) => {
  const [viewMode, setViewMode] = useState<'blueprint' | 'thermal' | 'gas'>('blueprint');
  const [targetTemp, setTargetTemp] = useState<number>(250);
  const [n2Active, setN2Active] = useState<boolean>(true);

  // Simulated oxygen calculation based on N2
  const currentO2 = n2Active ? Math.max(3, Math.round(15 - targetTemp / 30)) : 21000;

  return (
    <section id="overview" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Neon Glow & Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-transparent rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
        
        {/* Semiconductor Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-300 uppercase">
            {UI_TEXTS.heroBadge[lang]}
          </span>
        </div>

        {/* Display Typography Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
          {UI_TEXTS.heroTitleMain[lang]} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-cyan-400 font-extrabold">
            {UI_TEXTS.heroTitleSub[lang]}
          </span>
        </h1>

        {/* Narrative Description */}
        <p className="max-w-3xl text-slate-300 text-base sm:text-xl font-light leading-relaxed mb-10 tracking-wide">
          {UI_TEXTS.heroDesc[lang]}
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenRFQ}
            className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {UI_TEXTS.requestRfqBtn[lang]}
          </button>
          <button
            onClick={onExploreSpecs}
            className="px-8 py-4 rounded-xl text-sm font-medium tracking-wider text-cyan-300 bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800/90 backdrop-blur-md transition-all"
          >
            {UI_TEXTS.viewSpecsBtn[lang]}
          </button>
        </div>

        {/* Interactive Equipment Canvas / ASML-style Visualizer */}
        <div className="w-full max-w-5xl bg-slate-900/60 border border-cyan-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          {/* Glass Card Header / Mode Switchers */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                SYSTEM INTERACTIVE SIMULATOR • WEI-SUN WS-N2-300
              </span>
            </div>

            <div className="flex bg-slate-950 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setViewMode('blueprint')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                  viewMode === 'blueprint' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{lang === 'tw' ? '3D CAD 機構圖' : lang === 'en' ? '3D CAD Structure' : '3D CAD 機構構造'}</span>
              </button>
              <button
                onClick={() => setViewMode('thermal')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                  viewMode === 'thermal' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'tw' ? '熱場等溫陣列 (±0.1°C)' : lang === 'en' ? 'Thermal Heatmap (±0.1°C)' : '熱場分布 (±0.1°C)'}</span>
              </button>
              <button
                onClick={() => setViewMode('gas')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                  viewMode === 'gas' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Wind className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'tw' ? '氮氣層流置換 (<10ppm)' : lang === 'en' ? 'N2 Laminar Flow (<10ppm)' : '窒素層流 (<10ppm)'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Equipment Canvas Stage */}
          <div className="relative my-6 h-80 sm:h-96 rounded-2xl bg-slate-950/80 border border-cyan-900/30 flex items-center justify-center overflow-hidden p-6">
            {/* Background SVG Grid inside canvas */}
            <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="canvas-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#canvas-grid)" />
            </svg>

            {/* Equipment 3D Vector Schematic Graphic */}
            <div className="relative w-72 sm:w-96 h-56 sm:h-72 flex flex-col items-center justify-center">
              
              {/* Outer Metallic Oven Chassis */}
              <div className={`relative w-full h-full rounded-2xl border-2 transition-all duration-500 ${
                viewMode === 'thermal'
                  ? 'border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.25)] bg-slate-900/90'
                  : viewMode === 'gas'
                  ? 'border-cyan-400/60 shadow-[0_0_40px_rgba(34,211,238,0.25)] bg-slate-900/90'
                  : 'border-slate-700 bg-slate-900/80'
              }`}>
                {/* Top HEPA Filter Housing */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-slate-800 border-t border-x border-cyan-500/30 rounded-t-lg flex items-center justify-around px-4">
                  <span className="text-[9px] font-mono text-cyan-400">
                    {lang === 'tw' ? 'Class 10 ULPA 層流過濾模組' : 'Class 10 ULPA FILTER MODULE'}
                  </span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Inner Sealed Chamber */}
                <div className={`m-4 h-[calc(100%-2rem)] rounded-xl border relative flex flex-col justify-between p-4 transition-all ${
                  viewMode === 'thermal'
                    ? 'border-amber-500/40 bg-gradient-to-b from-amber-500/10 via-amber-950/20 to-slate-950'
                    : viewMode === 'gas'
                    ? 'border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 via-blue-950/20 to-slate-950'
                    : 'border-slate-800 bg-slate-950/90'
                }`}>
                  
                  {/* Chamber Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/5 pb-2">
                    <span className="flex items-center gap-1">
                      <Thermometer className="w-3 h-3 text-amber-400" /> {targetTemp} °C (±0.1°C)
                    </span>
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Wind className="w-3 h-3" /> {lang === 'tw' ? '殘氧' : 'O2'}: {currentO2} PPM
                    </span>
                  </div>

                  {/* Wafer Trays / Heat Convection Representation */}
                  <div className="my-auto space-y-3 relative">
                    {/* Simulated Gas Stream Particles */}
                    {viewMode === 'gas' && n2Active && (
                      <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-80">
                        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse delay-75" />
                        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-150" />
                      </div>
                    )}

                    {/* Wafer Cassette Trays */}
                    {[1, 2, 3].map((tray) => (
                      <div
                        key={tray}
                        className={`h-6 rounded-md border flex items-center justify-between px-3 font-mono text-[10px] transition-all ${
                          viewMode === 'thermal'
                            ? 'border-amber-500/60 bg-amber-500/20 text-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                            : 'border-slate-700 bg-slate-900/80 text-slate-300'
                        }`}
                      >
                        <span className="text-[9px] text-slate-400">
                          {lang === 'tw' ? `載盤 #${tray} [300mm 晶圓]` : `TRAY #${tray} [300mm WAFER]`}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          <span className="text-cyan-300">{lang === 'tw' ? '100% 熱場等溫' : '100% UNIFORM'}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chamber Bottom Sealed Flange & N2 Injector */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5">
                    <span className="text-slate-500">{lang === 'tw' ? '水冷密封雙重法蘭' : 'SEALED WATER-COOLED FLANGE'}</span>
                    <span className="text-cyan-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> {lang === 'tw' ? 'SECS/GEM 連線就緒' : 'SECS/GEM READY'}
                    </span>
                  </div>
                </div>

                {/* Glass Door Touchscreen Accent */}
                <div className="absolute right-3 top-3 w-1.5 h-12 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee]" />
              </div>
            </div>

            {/* Live Interactive Control Panel inside Hero Card */}
            <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/10 rounded-xl p-3 text-left backdrop-blur-md hidden sm:block max-w-xs">
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-2 flex items-center justify-between">
                <span>{lang === 'tw' ? '動態模擬控制面板' : 'Interactive Controls'}</span>
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
              </div>

              {/* Temperature Slider */}
              <div className="mb-2">
                <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                  <span>{lang === 'tw' ? '腔體設定溫度' : 'Chamber Temp'}</span>
                  <span className="text-amber-400 font-bold">{targetTemp} °C</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="350"
                  step="10"
                  value={targetTemp}
                  onChange={(e) => setTargetTemp(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-1 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* N2 Purge Toggle */}
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-300">{lang === 'tw' ? '氮氣強制置換 (<10ppm O2)' : 'N2 Purge (<10ppm O2)'}</span>
                <button
                  onClick={() => setN2Active(!n2Active)}
                  className={`px-2.5 py-1 rounded text-[10px] font-bold transition ${
                    n2Active
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {n2Active ? (lang === 'tw' ? '運轉中' : 'ACTIVE') : (lang === 'tw' ? '關閉' : 'OFF')}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Metric Ticker Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-left">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1">
                {lang === 'tw' ? '無塵潔淨等級' : 'Purity Class'}
              </div>
              <div className="text-2xl font-black text-white">Class 10</div>
              <div className="text-[11px] text-slate-400">{lang === 'tw' ? 'ISO 4 國際潔淨認證' : 'ISO 4 Cleanroom Spec'}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1">
                {lang === 'tw' ? '熱場等溫均一' : 'Thermal Uniformity'}
              </div>
              <div className="text-2xl font-black text-white">±0.1 °C</div>
              <div className="text-[11px] text-slate-400">{lang === 'tw' ? '多區 PID 動態平衡' : 'Multi-point PID Balance'}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1">
                {lang === 'tw' ? '殘氧控制濃度' : 'Oxygen Level'}
              </div>
              <div className="text-2xl font-black text-white">&lt; 10 ppm</div>
              <div className="text-[11px] text-slate-400">{lang === 'tw' ? '極速氮氣無氧置換' : 'Inert N2 Fast Displacement'}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1">
                {lang === 'tw' ? '晶圓廠通訊協定' : 'Fab Protocol'}
              </div>
              <div className="text-2xl font-black text-white">SECS/GEM</div>
              <div className="text-[11px] text-slate-400">{lang === 'tw' ? '智慧工廠原生通訊' : 'Smart Factory Native IoT'}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
