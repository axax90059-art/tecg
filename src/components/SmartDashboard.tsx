import React, { useState, useEffect } from 'react';
import { Cpu, Activity, Play, Pause, RefreshCw, Download, ShieldAlert, CheckCircle2, Sliders, Database, Layers } from 'lucide-react';
import { Language, SensorData } from '../types';

interface SmartDashboardProps {
  lang: Language;
}

export const SmartDashboard: React.FC<SmartDashboardProps> = ({ lang }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<'pi-cure' | 'fanout-bake' | 'sic-anneal'>('pi-cure');
  const [running, setRunning] = useState<boolean>(true);

  // Live telemetry state
  const [sensor, setSensor] = useState<SensorData>({
    currentTemp: 249.8,
    targetTemp: 250.0,
    o2Ppm: 7.4,
    n2FlowRate: 120,
    chamberPressure: 101.3,
    heaterPowerPct: 42,
    cleanlinessParticles: 3,
    status: 'soaking',
  });

  // Simulated live telemetry jitter
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSensor((prev) => ({
        ...prev,
        currentTemp: Number((prev.targetTemp + (Math.random() * 0.3 - 0.15)).toFixed(1)),
        o2Ppm: Number((Math.max(3, prev.o2Ppm + (Math.random() * 0.4 - 0.2))).toFixed(1)),
        heaterPowerPct: Math.floor(38 + Math.random() * 10),
        n2FlowRate: Math.floor(118 + Math.random() * 5),
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, [running]);

  const recipes = [
    {
      id: 'pi-cure',
      name: lang === 'tw' ? '晶圓聚醯亞胺 (PI) 固化配方' : 'Wafer Polyimide (PI) Cure Recipe',
      targetTemp: 250,
      soakTime: '120 min',
      o2Target: '< 10 ppm',
      desc: lang === 'tw' ? '高精度恆溫浸潤，專為聚醯亞胺無氧化固化設計。' : 'High-precision thermal soak for polyimide curing without oxidation.',
    },
    {
      id: 'fanout-bake',
      name: lang === 'tw' ? '扇出型先進封裝 (Fan-Out) 烘烤配方' : 'Fan-Out Advanced Packaging Bake',
      targetTemp: 180,
      soakTime: '60 min',
      o2Target: '< 15 ppm',
      desc: lang === 'tw' ? '優化升溫曲線，有效消除塑封化合物 (EMC) 翹曲。' : 'Optimized ramp rate to prevent mold compound warpage.',
    },
    {
      id: 'sic-anneal',
      name: lang === 'tw' ? '第三代半導體 (SiC) 高溫退火週期' : 'SiC High-Temp Annealing Cycle',
      targetTemp: 350,
      soakTime: '90 min',
      o2Target: '< 5 ppm',
      desc: lang === 'tw' ? '高溫極速氮氣置換，專利保護寬禁帶半導體晶圓基板。' : 'High-temperature nitrogen purge for wide bandgap semiconductor substrates.',
    },
  ];

  return (
    <section id="dashboard" className="py-24 bg-slate-950 relative overflow-hidden text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono font-semibold uppercase mb-3 tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>SECS/GEM INDUSTRY 4.0 INTEGRATION • 智慧聯網系統</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Intelligence Unlocked.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
              {lang === 'tw' ? '智慧工廠全自動連線與微秒級過程監控' : lang === 'en' ? 'Smart Fab SECS/GEM Connectivity & Real-Time Telemetry' : 'SECS/GEM対応 スマートファクトリー統合'}
            </span>
          </h2>
          <p className="text-slate-400 text-base font-light">
            {lang === 'tw'
              ? '原生相容晶圓廠 MES 系統，動態記錄熱處理全週期曲線，自動生成品管 Pass 檢驗報表。'
              : lang === 'en'
              ? 'Native compatibility with fab MES via SECS-I / HSMS protocol for 100% automated batch traceably.'
              : 'ウエハファブMESシステムと完全統合。製造プロセスのリアルタイム追跡とレポート自動生成。'}
          </p>
        </div>

        {/* Dashboard Frame Container */}
        <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {lang === 'tw' ? '晶圓廠連線節點 #01 連線中' : 'FAB NODE #01 ONLINE'}
              </span>
              <span className="text-slate-400 hidden sm:inline">
                {lang === 'tw' ? 'SECS/GEM 狀態: 已建立連線' : 'SECS/GEM Status: CONNECTED'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setRunning(!running)}
                className={`px-4 py-1.5 rounded-lg flex items-center gap-1.5 font-bold transition ${
                  running
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                }`}
              >
                {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{running ? (lang === 'tw' ? '暫停遙測串流' : 'PAUSE TELEMETRY') : (lang === 'tw' ? '恢復數據串流' : 'RESUME STREAM')}</span>
              </button>

              <button
                onClick={() => alert(lang === 'tw' ? '已成功匯出整批次品管分析 PDF 報表！' : 'Batch quality report exported (PDF format generated).')}
                className="px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 flex items-center gap-1.5 font-bold transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'tw' ? '匯出品管檢驗報表' : 'EXPORT BATCH REPORT'}</span>
              </button>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
            
            {/* Left: Recipe Selector & Controls */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                {lang === 'tw' ? '當前晶圓製程配方選單' : 'ACTIVE WAFER PROCESS RECIPES'}
              </div>
              {recipes.map((rcp) => (
                <div
                  key={rcp.id}
                  onClick={() => {
                    setSelectedRecipe(rcp.id as any);
                    setSensor((prev) => ({ ...prev, targetTemp: rcp.targetTemp }));
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedRecipe === rcp.id
                      ? 'bg-gradient-to-r from-cyan-950/80 to-slate-900 border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                      : 'bg-slate-950/60 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-1">
                    <span className="font-bold text-white">{rcp.name}</span>
                    <span className="text-cyan-400">{rcp.targetTemp}°C</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-3 font-light leading-relaxed">
                    {rcp.desc}
                  </p>
                  <div className="flex gap-4 font-mono text-[10px] text-slate-500">
                    <span>Soak: {rcp.soakTime}</span>
                    <span>O2 Target: {rcp.o2Target}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Simulated Real-Time Telemetry Curve & Gauges */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Telemetry Visualizer Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between font-mono text-xs mb-4">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span>THERMAL PROFILE CURVE [SECS/GEM STREAM]</span>
                  </div>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    STATUS: {sensor.status.toUpperCase()}
                  </span>
                </div>

                {/* Simulated SVG Graph for Thermal Ramp & Soak Curve */}
                <div className="h-48 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="curve-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#1e293b" strokeDasharray="3 3" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="#1e293b" strokeDasharray="3 3" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#1e293b" strokeDasharray="3 3" />

                    {/* Temperature Ramp-Up -> Soak Phase -> Cooling Phase Area */}
                    <path
                      d="M 0 140 L 100 40 L 350 40 L 450 130 L 500 130 L 500 150 L 0 150 Z"
                      fill="url(#curve-gradient)"
                    />
                    
                    {/* Main Temperature Line */}
                    <path
                      d="M 0 140 L 100 40 L 350 40 L 450 130 L 500 130"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="3"
                    />

                    {/* Current Live Marker Dot */}
                    <circle cx="220" cy="40" r="5" fill="#38bdf8" className="animate-ping" />
                    <circle cx="220" cy="40" r="4" fill="#ffffff" />
                  </svg>

                  {/* Graph Annotations */}
                  <div className="absolute top-2 left-20 text-[10px] font-mono text-cyan-300">
                    Ramp Rate: 5.0°C/min
                  </div>
                  <div className="absolute top-2 left-64 text-[10px] font-mono text-emerald-300">
                    Isothermal Soak: {sensor.currentTemp} °C
                  </div>
                  <div className="absolute bottom-6 right-16 text-[10px] font-mono text-slate-400">
                    N2 Cooling
                  </div>
                </div>
              </div>

              {/* 4 Sensor Live Gauges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                  <div className="text-[10px] text-slate-400 mb-1">CHAMBER TEMP</div>
                  <div className="text-2xl font-black text-amber-400">{sensor.currentTemp}°C</div>
                  <div className="text-[10px] text-slate-500">Target: {sensor.targetTemp}°C</div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                  <div className="text-[10px] text-slate-400 mb-1">OXYGEN (O2)</div>
                  <div className="text-2xl font-black text-cyan-300">{sensor.o2Ppm} <span className="text-xs text-slate-500">PPM</span></div>
                  <div className="text-[10px] text-slate-500">Threshold: &lt;10 PPM</div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                  <div className="text-[10px] text-slate-400 mb-1">N2 FLOW RATE</div>
                  <div className="text-2xl font-black text-blue-400">{sensor.n2FlowRate} <span className="text-xs text-slate-500">L/min</span></div>
                  <div className="text-[10px] text-slate-500">Regulator: AUTO</div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                  <div className="text-[10px] text-slate-400 mb-1">HEATER POWER</div>
                  <div className="text-2xl font-black text-indigo-400">{sensor.heaterPowerPct} %</div>
                  <div className="text-[10px] text-slate-500">PID Closed Loop</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
