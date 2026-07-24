import React, { useState } from 'react';
import { AlertTriangle, Sparkles, CheckCircle2, ArrowRight, Eye, ShieldAlert, Cpu, BarChart3, Layers } from 'lucide-react';
import { Language } from '../types';
import { DIAGNOSIS_DATA } from '../data/mockData';

interface PainPointDiagnosisProps {
  lang: Language;
}

export const PainPointDiagnosis: React.FC<PainPointDiagnosisProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="diagnosis" className="py-24 bg-slate-950 relative overflow-hidden text-slate-100 border-t border-slate-900">
      {/* Glow background */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono font-semibold uppercase mb-3 tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>UI/UX & BRAND TRANSFORMATION • 痛點診斷與視覺轉型</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Traditional vs. Semiconductor-Grade.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
              {lang === 'tw' ? '從傳統工業設備網站，躍升 ASML 級國際品牌' : lang === 'en' ? 'Transforming Traditional Industrial UI to ASML-Level Precision' : '伝統的な産業サイトからASML級ハイテクブランドへ'}
            </span>
          </h2>
          <p className="text-slate-400 text-base font-light">
            {lang === 'tw'
              ? '透過 UI/UX 專業診斷，解析舊官網的 3 大視覺痛點，並導入 4 大國際半導體大廠的視覺重構原則。'
              : lang === 'en'
              ? 'Diagnosing 3 critical UI pain points in traditional machinery sites and executing 4 high-tech redesign principles.'
              : '従来の設備サイトの3つの課題を診断し、4つのハイテクデザイン原則を導入。'}
          </p>
        </div>

        {/* Diagnosis Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {DIAGNOSIS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`p-5 rounded-2xl border text-left transition-all relative ${
                activeTab === idx
                  ? 'bg-gradient-to-br from-cyan-950/90 to-slate-900 border-cyan-400/80 shadow-[0_0_25px_rgba(34,211,238,0.2)]'
                  : 'bg-slate-900/60 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs text-cyan-400 mb-2">
                <span>STAGE #{idx + 1}</span>
                {activeTab === idx && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {item.principleTitle[lang]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Transformation Detailed Comparison Card */}
        {(() => {
          const current = DIAGNOSIS_DATA[activeTab];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              
              {/* Left Column: Old Website Pain Point (舊版痛點) */}
              <div className="bg-slate-950/80 border border-rose-500/30 rounded-2xl p-6 relative">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase mb-4">
                  <AlertTriangle className="w-4 h-4" />
                  <span>TRADITIONAL PAIN POINT • 舊官網問題</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {current.oldIssue[lang]}
                </h3>

                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {current.oldDetail[lang]}
                </p>

                {/* Simulated Traditional Old UI Wireframe Box */}
                <div className="bg-white text-slate-800 p-4 rounded-xl border border-slate-300 font-sans text-xs space-y-2 opacity-80">
                  <div className="bg-blue-800 text-white p-2 font-bold flex justify-between">
                    <span>舊版：偉勝乾燥工業股份有限公司</span>
                    <span className="text-[10px]">產品目錄</span>
                  </div>
                  <div className="p-3 bg-slate-100 border border-slate-300 rounded text-slate-700">
                    <div className="font-bold mb-1">【無塵氮氣烤箱】產品簡介</div>
                    <p className="text-[11px] text-slate-600">
                      本設備適用於電子零件、PCB與半導體烘烤。規格：最高溫度300度，無塵等級Class 10，溫控±1°C... (字體小且未突顯重點)
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: New High-Tech Solution (新版改版原則) */}
              <div className="bg-slate-950/80 border border-cyan-500/40 rounded-2xl p-6 relative shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase mb-4">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>ASML-GRADE REDESIGN • 新版半導體風格重構</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {current.newSolution[lang]}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  {current.newDetail[lang]}
                </p>

                {/* Simulated Modern B2B Glassmorphism Card */}
                <div className="bg-slate-900/90 border border-cyan-500/40 rounded-xl p-4 font-mono text-xs text-slate-200 backdrop-blur-md shadow-xl space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-cyan-400 border-b border-white/10 pb-2">
                    <span>WEI-SUN TECH • SEMICONDUCTOR SUITE</span>
                    <span className="bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">PREMIUM B2B</span>
                  </div>
                  <div className="text-2xl font-black text-white py-1">
                    Class 10 <span className="text-cyan-400 font-normal text-sm">| ±0.1°C | &lt;10ppm</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    「於微米之境，定義極限純淨。專為先進封裝製程打造的 Class 10 級氣氛環境。」
                  </p>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};
