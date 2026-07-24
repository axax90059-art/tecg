import React from 'react';
import { ShieldCheck, Globe, Building2, Cpu, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { CERTIFICATIONS, GLOBAL_LOCATIONS } from '../data/mockData';

interface GlobalTrustFooterProps {
  lang: Language;
}

export const GlobalTrustFooter: React.FC<GlobalTrustFooterProps> = ({ lang }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-cyan-500/20 pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-cyan-950/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Certifications Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white">{cert.name}</div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">{cert.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Hub Locations */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase font-bold mb-6">
            <Globe className="w-4 h-4" />
            <span>{lang === 'tw' ? '全球半導體晶圓廠在地支援網路' : 'GLOBAL SEMICONDUCTOR FAB SUPPORT NETWORK'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {GLOBAL_LOCATIONS.map((loc) => (
              <div key={loc.city} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono">
                <div className="flex items-center justify-between text-cyan-300 font-bold mb-1">
                  <span>{loc.city}</span>
                  <MapPin className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-[10px] text-slate-400 mb-2">{loc.role}</div>
                <div className="text-[9px] text-slate-600">{loc.coords}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation & Brand Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-slate-800 text-xs">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-black text-white tracking-wider">WEI-SUN TECH</span>
            </div>
            <p className="text-slate-400 font-light leading-relaxed max-w-sm">
              {lang === 'tw'
                ? '偉勝乾燥工業 — 創立於 1986 年，全球半導體與高精密電子熱處理設備領導品牌。為 TSMC、ASE 等一線晶圓封裝大廠指定夥伴。'
                : lang === 'en'
                ? 'WEI-SUN INDUSTRIAL CO., LTD. — Founded in 1986. Premier global supplier of semiconductor cleanroom nitrogen thermal treatment systems.'
                : '偉勝乾燥工業 — 1986年設立。半導体クリーン窒素熱処理システムのグローバルリーディングカンパニー。'}
            </p>
          </div>

          <div className="md:col-span-4 space-y-3 font-mono">
            <div className="text-cyan-400 font-bold uppercase">
              {lang === 'tw' ? '總部聯絡資訊' : 'HQ Contact Information'}
            </div>
            <div className="text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {lang === 'tw' ? '新竹科學園區台灣大道一段 188 號' : 'No. 188, Sec. 1, Taiwan Blvd, Hsinchu Science Park, Taiwan'}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                +886 3 578 8899 ({lang === 'tw' ? '全球客戶服務熱線' : 'Global Service Hotline'})
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                sales@wei-sun-oven.com
              </p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono">
            <div className="text-cyan-400 font-bold uppercase">
              {lang === 'tw' ? '國際合規與品質認證' : 'Compliance & Legal'}
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#" className="hover:text-cyan-300 transition">{lang === 'tw' ? 'ISO 9001 品質體系認證' : 'ISO 9001 Compliance'}</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">{lang === 'tw' ? 'SEMI S2 半導體設備安全標準' : 'SEMI S2 Safety Report'}</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">{lang === 'tw' ? '隱私權政策與 GDPR 保障' : 'Privacy Policy & GDPR'}</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} WEI-SUN INDUSTRIAL CO., LTD. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0 text-cyan-400/80">
            <span>Designed in Apple / ASML Sleek B2B Paradigm</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
