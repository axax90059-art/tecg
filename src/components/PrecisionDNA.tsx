import React, { useState } from 'react';
import { ShieldCheck, Thermometer, Wind, Gauge, Activity, BarChart3, CheckCircle2, RefreshCw } from 'lucide-react';
import { Language } from '../types';

interface PrecisionDNAProps {
  lang: Language;
}

export const PrecisionDNA: React.FC<PrecisionDNAProps> = ({ lang }) => {
  // Thermal 9-point grid state
  const [thermalMatrix, setThermalMatrix] = useState([
    250.0, 250.1, 249.9,
    250.1, 250.0, 250.0,
    249.9, 250.0, 250.1
  ]);

  // Particle counter size filter state
  const [particleSize, setParticleSize] = useState<'0.1' | '0.3' | '0.5'>('0.1');

  // Purge cycle simulation state
  const [purging, setPurging] = useState(false);
  const [purgeO2, setPurgeO2] = useState(8);

  const triggerPurgeSim = () => {
    setPurging(true);
    setPurgeO2(21000); // Start at air 21%
    let step = 21000;
    const interval = setInterval(() => {
      step = Math.max(8, Math.floor(step * 0.45));
      setPurgeO2(step);
      if (step <= 8) {
        clearInterval(interval);
        setPurging(false);
      }
    }, 300);
  };

  return (
    <section id="precision-dna" className="py-24 bg-slate-950 relative overflow-hidden text-slate-100 border-t border-slate-900">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono font-semibold uppercase mb-4 tracking-widest">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>PRECISION ENGINEERING DNA • 核心技術數據</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Data-Driven Performance.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">
              {lang === 'tw' ? '微米之境，定義極限控制力' : lang === 'en' ? 'Sub-Degree Thermal & Purity Mastery' : 'ナノの領域で極限精度を定義'}
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            {lang === 'tw'
              ? '擺脫傳統機器設備條列式規格，以數據主導的半導體級技術標準，為晶圓與封裝產線提供可靠驗證。'
              : lang === 'en'
              ? 'Bridging hardware craftsmanship with semiconductor-grade empirical data for high-yield wafer production.'
              : '最先端ウエハ製造の歩留まり向上を支える、データ駆動型の次世代熱処理テクノロジー。'}
          </p>
        </div>

        {/* 3 Large Glassmorphism Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Purity Control */}
          <div className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-cyan-500/50 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  {lang === 'tw' ? '環境純淨度' : 'ATMOSPHERE PURITY'}
                </span>
                <ShieldCheck className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>

              <div className="text-6xl font-black text-white tracking-tighter mb-2 group-hover:text-cyan-300 transition-colors">
                Class 10
              </div>
              <div className="text-xs font-mono text-cyan-400/80 mb-6 uppercase tracking-wider">
                {lang === 'tw' ? 'ISO 14644-1 CLASS 4 國際無塵認證' : 'ISO 14644-1 CLASS 4 CERTIFIED'}
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3">
                {lang === 'tw' ? 'Ultimate Purity Control 極致純淨' : lang === 'en' ? 'Ultimate Purity Control' : '極限クリーン制御'}
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                {lang === 'tw'
                  ? '於微米之境，定義極限純淨。搭載專利雙重 ULPA 濾網層流系統，確保粒子干擾降至物理極限。'
                  : lang === 'en'
                  ? 'Eliminating airborne contaminants down to sub-micron physical limits for flawless wafer surface yields.'
                  : '微粒子干渉を物理的限界まで抑え、ウエハ表面の歩留まりを極限まで保護。'}
              </p>
            </div>

            {/* Interactive Particle Simulator Inside Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-400 mb-3 text-[11px]">
                <span>{lang === 'tw' ? '微粒光譜動態監控' : 'PARTICLE SPECTRUM'}</span>
                <div className="flex gap-1 text-[10px]">
                  {(['0.1', '0.3', '0.5'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setParticleSize(sz)}
                      className={`px-2 py-0.5 rounded transition ${
                        particleSize === sz
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      &ge;{sz}µm
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span>{lang === 'tw' ? '實測微粒數：' : 'Measured Particles:'}</span>
                  <span className="text-cyan-400 font-bold">
                    {particleSize === '0.1' ? '8.2' : particleSize === '0.3' ? '0.4' : '0.0'} / m³
                  </span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-400 h-full transition-all duration-500"
                    style={{
                      width: particleSize === '0.1' ? '25%' : particleSize === '0.3' ? '5%' : '1%',
                    }}
                  />
                </div>
                <div className="text-[10px] text-slate-500 text-right">
                  {lang === 'tw' ? 'Class 10 標準上限: ≤ 352 顆/m³' : 'Standard Class 10 Limit: ≤ 352 particles/m³'}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Thermal Stability */}
          <div className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-amber-500/50 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {lang === 'tw' ? '熱場穩定度' : 'THERMAL STABILITY'}
                </span>
                <Thermometer className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>

              <div className="text-6xl font-black text-white tracking-tighter mb-2 group-hover:text-amber-300 transition-colors">
                ±0.1 °C
              </div>
              <div className="text-xs font-mono text-amber-400/80 mb-6 uppercase tracking-wider">
                {lang === 'tw' ? '9點熱場等溫矩陣' : '9-POINT THERMAL FIELD MATRIX'}
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3">
                {lang === 'tw' ? 'Thermal Stability Excellence 超精密熱場' : lang === 'en' ? 'Thermal Stability Excellence' : '超精密熱場コントロール'}
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                {lang === 'tw'
                  ? '動態熱平衡演算法，確保爐體內每一點溫度皆處於絕對一致，徹底防止晶圓 warping 翹曲變形。'
                  : lang === 'en'
                  ? 'Dynamic thermal balancing guarantees uniform heat distribution across every square millimeter of the wafer.'
                  : '動的熱平衡アルゴリズムにより、ウエハの反り（Warping）や歪みを完全防止。'}
              </p>
            </div>

            {/* Interactive 9-point thermal grid simulator */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-400 mb-3 text-[11px]">
                <span>{lang === 'tw' ? '9點實測等溫陣列 [設定 250.0°C]' : '9-POINT LIVE MATRIX [250.0°C SET]'}</span>
                <span className="text-amber-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {lang === 'tw' ? '檢驗合格' : 'PASS'}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {thermalMatrix.map((temp, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded bg-slate-900 border border-amber-500/20 text-center hover:border-amber-400 transition cursor-pointer"
                    title={`Sensor #${idx + 1}`}
                  >
                    <div className="text-[9px] text-slate-500">PT#{idx + 1}</div>
                    <div className="text-amber-300 font-bold">{temp.toFixed(1)}°</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Oxygen Management */}
          <div className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-blue-500/50 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  {lang === 'tw' ? '氣氛控制智控' : 'ATMOSPHERE INTELLIGENCE'}
                </span>
                <Wind className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>

              <div className="text-6xl font-black text-white tracking-tighter mb-2 group-hover:text-blue-300 transition-colors">
                &lt; 10 ppm
              </div>
              <div className="text-xs font-mono text-blue-400/80 mb-6 uppercase tracking-wider">
                {lang === 'tw' ? '極速氮氣無氧置換' : 'ULTRA-FAST N2 INERT PURGE'}
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3">
                {lang === 'tw' ? 'Inert Atmosphere Intelligence 零氧化防護' : lang === 'en' ? 'Inert Atmosphere Intelligence' : '超低酸素・窒素置換'}
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                {lang === 'tw'
                  ? '極速氮氣置換技術，將殘留氧氣濃度壓制於 10ppm 以下，徹底杜絕金屬導線與聚醯亞胺 (PI) 的表面氧化。'
                  : lang === 'en'
                  ? 'Rapid nitrogen purge technology suppressing residual oxygen below 10 ppm to protect sensitive metallization.'
                  : '超急速窒素置換技術により、残留酸素を10ppm未満に抑制。金属配線の酸化を完全にガード。'}
              </p>
            </div>

            {/* Interactive Purge Cycle Simulator */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-400 mb-2 text-[11px]">
                <span>{lang === 'tw' ? '氧氣濃度監測儀錶板' : 'O2 CONCENTRATION GAUGE'}</span>
                <button
                  onClick={triggerPurgeSim}
                  disabled={purging}
                  className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 hover:bg-blue-500/30 flex items-center gap-1 transition text-[10px]"
                >
                  <RefreshCw className={`w-2.5 h-2.5 ${purging ? 'animate-spin' : ''}`} />
                  <span>{purging ? (lang === 'tw' ? '置換中...' : 'Purging...') : (lang === 'tw' ? '模擬氮氣置換' : 'Simulate Purge')}</span>
                </button>
              </div>

              <div className="flex items-baseline justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">{lang === 'tw' ? '當前殘氧濃度：' : 'Current O2 Level:'}</span>
                <span className="text-2xl font-black text-cyan-300">
                  {purgeO2} <span className="text-xs text-slate-400">PPM</span>
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                <span>{lang === 'tw' ? '大氣環境 (210,000 ppm)' : 'Ambient (210,000 ppm)'}</span>
                <span>{lang === 'tw' ? '目標值 (≤ 10 ppm)' : 'Target (≤ 10 ppm)'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
