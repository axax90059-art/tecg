import React, { useState } from 'react';
import { FileText, CheckCircle2, ArrowRight, Download, Sliders, Send, Sparkles, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Language, ProductModel, RFQFormState } from '../types';
import { PRODUCT_MODELS } from '../data/mockData';

interface SpecComparisonAndRFQProps {
  lang: Language;
  rfqModalOpen: boolean;
  setRfqModalOpen: (open: boolean) => void;
}

export const SpecComparisonAndRFQ: React.FC<SpecComparisonAndRFQProps> = ({
  lang,
  rfqModalOpen,
  setRfqModalOpen,
}) => {
  const [selectedModel, setSelectedModel] = useState<ProductModel>(PRODUCT_MODELS[0]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [rfqForm, setRfqForm] = useState<RFQFormState>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    modelId: 'ws-n2-300',
    chamberSize: '300 L',
    maxTemp: '350 °C',
    cleanliness: 'Class 10',
    automation: ['SECS/GEM'],
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleAutomation = (opt: string) => {
    setRfqForm((prev) => {
      const exists = prev.automation.includes(opt);
      return {
        ...prev,
        automation: exists ? prev.automation.filter((a) => a !== opt) : [...prev.automation, opt],
      };
    });
  };

  return (
    <section id="specs-rfq" className="py-24 bg-slate-950 relative overflow-hidden text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono font-semibold uppercase mb-3 tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            <span>MODEL COMPARISON & INSTANT B2B RFQ • 規格與智慧選修</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Engineered Matrix.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
              {lang === 'tw' ? '半導體熱處理產品線規格對比' : lang === 'en' ? 'Product Matrix & Custom Specification Configurator' : '製品仕様比較・カスタマイズ'}
            </span>
          </h2>
          <p className="text-slate-400 text-base font-light">
            {lang === 'tw'
              ? '選擇適合您晶圓廠/封裝測試產線的無塵氮氣烘烤設備，或透過 RFQ 系統進行客製化參數線上估算。'
              : lang === 'en'
              ? 'Compare semiconductor-grade oven models or launch the interactive RFQ engine for custom engineering quotes.'
              : 'ウエハファブやOSATの要件に合わせて最適な熱処理システムを選択・カスタマイズ。'}
          </p>
        </div>

        {/* Product Model Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PRODUCT_MODELS.map((model) => (
            <div
              key={model.id}
              onClick={() => setSelectedModel(model)}
              className={`p-6 rounded-3xl border cursor-pointer transition-all flex flex-col justify-between ${
                selectedModel.id === model.id
                  ? 'bg-gradient-to-b from-cyan-950/90 to-slate-900 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.2)]'
                  : 'bg-slate-900/60 border-white/10 hover:border-white/30'
              }`}
            >
              <div>
                <div className="text-xs font-mono text-cyan-400 font-bold uppercase mb-2">
                  {model.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
                <div className="text-xs text-slate-400 font-mono mb-4">{model.codeName}</div>
                <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                  {model.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Purity Class:</span>
                  <span className="text-cyan-300 font-bold">{model.purityClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Uniformity:</span>
                  <span className="text-amber-300 font-bold">{model.tempUniformity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">O2 Concentration:</span>
                  <span className="text-blue-300 font-bold">{model.o2Concentration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Model Full Technical Spec Matrix Card */}
        <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase mb-1">
                DETAILED SPECIFICATION SHEET
              </div>
              <h3 className="text-2xl font-black text-white">{selectedModel.name}</h3>
            </div>
            <button
              onClick={() => setRfqModalOpen(true)}
              className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              {lang === 'tw' ? '線上配置與索取 B2B 報價' : 'Configure & Request B2B Quote'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div>
              <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {lang === 'tw' ? 'CORE ENGINEERING FEATURES (核心技術特點)' : 'CORE ENGINEERING FEATURES'}
              </h4>
              <ul className="space-y-3 font-mono text-xs text-slate-300">
                {selectedModel.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-white/5">
                    <span className="text-cyan-400 font-bold">0{idx + 1}.</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> {lang === 'tw' ? 'RECOMMENDED PROCESS APPLICATIONS (半導體製程應用)' : 'RECOMMENDED PROCESS APPLICATIONS'}
              </h4>
              <ul className="space-y-3 font-mono text-xs text-slate-300">
                {selectedModel.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-xl text-xs font-mono">
                <span className="text-cyan-300 font-bold">Target Customer Profile: </span>
                <span className="text-slate-300">{selectedModel.recommendedFor}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* RFQ Modal Drawer */}
      {rfqModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setRfqModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white font-mono text-xl"
            >
              ✕
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase font-bold mb-1">
                    WEI-SUN TECH • B2B RFQ ENGINE
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {lang === 'tw' ? '智慧詢價與客製化規格估算' : lang === 'en' ? 'Request B2B Quotation' : 'お見積りリクエスト'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Company Name (公司名稱)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. TSMC / ASE / Powertech"
                      value={rfqForm.companyName}
                      onChange={(e) => setRfqForm({ ...rfqForm, companyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Contact Name (聯絡人)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Chen"
                      value={rfqForm.contactName}
                      onChange={(e) => setRfqForm({ ...rfqForm, contactName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Business Email (電子郵件)</label>
                    <input
                      type="email"
                      required
                      placeholder="alex.chen@fab.com"
                      value={rfqForm.email}
                      onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Phone Number (電話)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+886 3 123 4567"
                      value={rfqForm.phone}
                      onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase">
                    EQUIPMENT CONFIGURATION (選配需求)
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block mb-1">Chamber Capacity</span>
                      <select
                        value={rfqForm.chamberSize}
                        onChange={(e) => setRfqForm({ ...rfqForm, chamberSize: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white"
                      >
                        <option value="150 L">150 L (Wafer Substrate)</option>
                        <option value="300 L">300 L (Standard Advanced Packaging)</option>
                        <option value="500 L">500 L (High Capacity Volume)</option>
                      </select>
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-1">Cleanroom Level</span>
                      <select
                        value={rfqForm.cleanliness}
                        onChange={(e) => setRfqForm({ ...rfqForm, cleanliness: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white"
                      >
                        <option value="Class 100">Class 100 (ISO 5)</option>
                        <option value="Class 10">Class 10 (ISO 4)</option>
                        <option value="Class 1">Class 1 (ISO 3 Ultra-Clean)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-xs font-mono mb-2">Smart Factory Options</span>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      {['SECS/GEM', 'AGV Robot Loader', 'Auto-Door Lock', 'Particle Counter'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => toggleAutomation(opt)}
                          className={`px-3 py-1.5 rounded-lg border transition ${
                            rfqForm.automation.includes(opt)
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                              : 'bg-slate-950 text-slate-500 border-slate-800'
                          }`}
                        >
                          {rfqForm.automation.includes(opt) ? '✓ ' : '+ '}
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT RFQ REQUEST • 傳送詢價專案</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-black text-white">
                  {lang === 'tw' ? '詢價單已成功傳送！' : 'RFQ Submitted Successfully!'}
                </h3>
                <p className="text-slate-300 text-sm font-light max-w-md mx-auto">
                  {lang === 'tw'
                    ? `感謝您，${rfqForm.contactName} (${rfqForm.companyName})。偉勝半導體工程應用團隊將於 24 小時內審閱您的規格需求並主動與您聯繫。`
                    : `Thank you, ${rfqForm.contactName} (${rfqForm.companyName}). Our semiconductor application engineering team will review your quote specification and contact you within 24 hours.`}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setRfqModalOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-mono text-xs hover:bg-slate-700 transition"
                >
                  {lang === 'tw' ? '關閉視窗' : 'Close Window'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
