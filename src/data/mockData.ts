import { ProductModel, HotspotPin, DiagnosisPoint, Language } from '../types';

export const UI_TEXTS: Record<string, Record<Language, string>> = {
  brandName: {
    tw: '偉勝乾燥工業',
    en: 'WEI-SUN TECH',
    jp: '偉勝テクノロジー',
  },
  subBrandName: {
    tw: '半導體熱處理與無塵無氧設備',
    en: 'Semiconductor Thermal & Cleanroom Solutions',
    jp: '半導体熱処理＆クリーン窒素オーブン',
  },
  heroBadge: {
    tw: 'SEMICONDUCTOR THERMAL EXCELLENCE • 半導體先進封裝烘烤系統',
    en: 'SEMICONDUCTOR THERMAL EXCELLENCE • ADVANCED PACKAGING BAKE',
    jp: '半導体熱処理システム • 先端パッケージング用熱処理',
  },
  heroTitleMain: {
    tw: 'Beyond Heat.',
    en: 'Beyond Heat.',
    jp: '熱の限界を超えて。',
  },
  heroTitleSub: {
    tw: 'Precision Redefined.',
    en: 'Precision Redefined.',
    jp: '高精度を、再定義する。',
  },
  heroDesc: {
    tw: '專為晶圓級先進封裝與高精密電子製造打造的「Class 10 無塵低氧熱處理系統」，極致熱場與微米級純淨度，推動摩爾定律的下一波巔峰。',
    en: 'Engineered for wafer-level advanced packaging and precision electronics. Class 10 ultra-clean, low-oxygen thermal system delivering sub-degree precision for next-gen semiconductor nodes.',
    jp: 'ウエハレベル先端パッケージングと超精密電子製造のために設計された「Class 10 クリーン・低酸素熱処理システム」。度を超えた熱場均一性と超純度環境を提供します。',
  },
  viewSpecsBtn: {
    tw: '瀏覽技術規格 (Specs)',
    en: 'Explore Technology Specs',
    jp: '技術仕様を見る',
  },
  requestRfqBtn: {
    tw: '極速 B2B 智慧詢價 (RFQ)',
    en: 'Instant B2B RFQ',
    jp: '迅速 B2B お見積り',
  },
  navOverview: {
    tw: '產品概觀',
    en: 'Overview',
    jp: '概要',
  },
  navPrecisionDNA: {
    tw: '核心技術',
    en: 'Precision DNA',
    jp: '核心技術',
  },
  nav3DView: {
    tw: '3D 拆解與機構',
    en: '3D Exploded View',
    jp: '3D 構造解析',
  },
  navDashboard: {
    tw: '智慧聯網 (SECS/GEM)',
    en: 'Industry 4.0 Dashboard',
    jp: 'スマートモニター',
  },
  navDiagnosis: {
    tw: '品牌視覺轉型診斷',
    en: 'Design Transformation',
    jp: 'デザイン診断',
  },
  navRFQ: {
    tw: '規格對比與選購',
    en: 'Specs & RFQ',
    jp: '仕様と比較',
  },
};

export const DIAGNOSIS_DATA: DiagnosisPoint[] = [
  {
    id: 1,
    oldIssue: {
      tw: '舊網視覺像 2010 年電子零件目錄，缺乏半導體設備高單價質感',
      en: 'Dated white/blue visual style resembling a 2010 component catalog, failing to convey semiconductor-grade value.',
      jp: '2010年代の部品カタログのような古いデザインで、高価な半導体装置の高級感が欠如。',
    },
    oldDetail: {
      tw: '傳統白底與死板藍色邊框，呈現硬梆梆的鐵櫃機器感，無法建立國際大廠（如 TSMC、ASE）信任度。',
      en: 'Hard white backgrounds and static blue borders evoke a plain steel box rather than a high-precision semiconductor system.',
      jp: '白い背景と青い枠線は「ただの鉄箱」に見え、グローバル大手への説得力が不十分。',
    },
    newSolution: {
      tw: '改用 Deep Space 深色基底，營造無塵室般的純淨高貴感',
      en: 'Adopt a Slate-950 / Deep Space dark canvas to mirror cleanroom environments.',
      jp: 'Slate-950ダークキャンバスを採用し、クリーンルームの静寂と高級感を再現。',
    },
    newDetail: {
      tw: '透過微光玻璃 (Glassmorphism) 與螢光藍 (Cyan Accent) 的極細動態光暈，賦予設備高端精密科技感。',
      en: 'Glassmorphism textures and neon cyan accents give the equipment an ASML-level high-tech allure.',
      jp: 'ガラスモフィズムとネオンシアンのアクセントで、ASML並みの精密ハイテク感を演出。',
    },
    principleTitle: {
      tw: '原則 1：沉浸式深色場景 (Deep Space Canvas)',
      en: 'Principle 1: Deep Space Canvas',
      jp: '原則 1：ディープスペース・ダークキャンバス',
    },
    principleIcon: 'Sparkles',
  },
  {
    id: 2,
    oldIssue: {
      tw: '規格文字平鋪直敘，去背生硬，缺乏核心視覺焦點',
      en: 'Text-heavy specifications list with flat unpolished images and no key visual hierarchy.',
      jp: 'テキストが平坦に羅列され、画像のトリミングが荒く、視覚的焦点を欠く。',
    },
    oldDetail: {
      tw: '將溫控 ±1°C、無塵 Class 10 等核心競爭力混雜在冗長表格中，客戶無法一眼抓住勝出同業的關鍵。',
      en: 'Crucial specs like ±0.1°C thermal precision and Class 10 cleanroom level were buried in dull, dense text tables.',
      jp: '±0.1°Cの温度精度やClass 10などの強みが埋もれ、競合との差別化が一目で伝わらない。',
    },
    newSolution: {
      tw: '採用「大字級數據卡片 (Data-Driven Highlights)」，視覺化數據',
      en: 'Transform raw numbers into Display-Typography Data Cards.',
      jp: '大文字タイポグラフィのデータカードで、主要スペックをダイナミックに提示。',
    },
    newDetail: {
      tw: '大號數字配合對比色標題，直接將「Class 10」、「±0.1°C」、「< 10ppm」做為視覺主角展現。',
      en: 'Display size numbers elevated to hero focal points alongside high-contrast clean typography.',
      jp: '数字自体をメインデザイン要素とし、重要な数値を一目で認識可能に。',
    },
    principleTitle: {
      tw: '原則 2：數據作為視覺主體 (Data-Driven Aesthetics)',
      en: 'Principle 2: Data-Driven Aesthetics',
      jp: '原則 2：データ主導の視覚デザイン',
    },
    principleIcon: 'BarChart3',
  },
  {
    id: 3,
    oldIssue: {
      tw: '缺乏「工業 4.0」數位質感，看起來像盲目封閉的硬體鐵櫃',
      en: 'No representation of software control, digital feedback, or smart factory interconnectivity.',
      jp: 'ソフトウェア制御やデジタルインターフェースの表現がなく、単なるハードウェアに見える。',
    },
    oldDetail: {
      tw: '只放外殼去背圖，完全沒有展示熱對流、氣體置換路徑或人機介面 Dashboard，讓設備看起來過時。',
      en: 'Only showing exterior chassis without illustrating internal convection, gas purge vectors, or SECS/GEM connectivity.',
      jp: '外観写真のみで、内部の気流・熱対流やSECS/GEMダッシュボードの表示がなく先進性が伝わらない。',
    },
    newSolution: {
      tw: '導入 3D 機構拆解 + SECS/GEM 工業 4.0 智慧聯網儀表板',
      en: 'Integrate 3D Exploded Structural Blueprint + Live SECS/GEM IoT Dashboard.',
      jp: '3D構造分解ビューとSECS/GEM対応スマートダッシュボードを統合。',
    },
    newDetail: {
      tw: '讓買家能線上探索加熱器、HEPA 濾網、氣體噴嘴與即時溫控曲線，展現「硬體 + 軟體」綜合實力。',
      en: 'Interactive hotspots for HEPA filters, nitrogen nozzles, PID zones, and real-time process telemetry curves.',
      jp: 'ヒーター、HEPAフィルター、窒素ノズル、リアルタイム熱曲線を操作・視覚化し、「ハード＋ソフト」の統合力をアピール。',
    },
    principleTitle: {
      tw: '原則 3：宏觀與微觀的動態對比 (Macro & Micro Dynamic)',
      en: 'Principle 3: Macro & Micro Dynamic',
      jp: '原則 3：マクロとミクロの動的対比',
    },
    principleIcon: 'Layers',
  },
  {
    id: 4,
    oldIssue: {
      tw: '文案枯燥偏向機器製造，缺少國際高科技品牌説服力',
      en: 'Dry technical machine descriptions rather than high-tech, precision-focused semiconductor language.',
      jp: '単なる機械仕様の文章で、国際的なハイテクブランドとしての説得力に欠ける。',
    },
    oldDetail: {
      tw: '使用傳統「無塵烤箱、烘烤溫度 300 度」等通俗用語，難以傳遞微米晶圓封裝級別的極致追求。',
      en: 'Plain language like "clean oven 300C" failed to inspire confidence for high-yield silicon wafer production.',
      jp: '「300度クリーンオーブン」という標準的な言葉では、半導体ウェハ製造への信頼を醸成しにくい。',
    },
    newSolution: {
      tw: '轉化為「Ultimate Purity Control」與「Thermal Stability Excellence」',
      en: 'Rewrite into precision narrative: "Ultimate Purity Control" & "Inert Atmosphere Intelligence".',
      jp: '「Ultimate Purity Control」「Inert Atmosphere Intelligence」などの洗練されたコピーに刷新。',
    },
    newDetail: {
      tw: '用半導體語言講述故事：「於微米之境，定義極限純淨。確保每一片晶圓在最嚴苛熱場下完美熟成。」',
      en: 'Craft persuasive narrative around yield optimization, thermal balance, and zero-defect oxidation defense.',
      jp: '「マイクロの領域で、究極の純度を定義する。最厳密な熱曲線下でウェハを最適キュア。」',
    },
    principleTitle: {
      tw: '原則 4：高科技品牌文案 (Semiconductor Narrative)',
      en: 'Principle 4: High-Tech Brand Narrative',
      jp: '原則 4：ハイテクブランド・ナラティブ',
    },
    principleIcon: 'Cpu',
  },
];

export const PRODUCT_MODELS: ProductModel[] = [
  {
    id: 'ws-n2-300',
    name: 'WS-N2-300 Smart Clean Nitrogen Oven',
    codeName: '智慧無塵氮氣烘烤系統',
    category: 'Wafer & Substrate Packaging',
    shortDesc: '專為半導體 2.5D/3D 封裝設計，具備快速氮氣置換與極低氧氣殘留率。',
    purityClass: 'Class 10 (ISO 4)',
    tempUniformity: '±0.1 °C',
    maxTemp: '350 °C',
    o2Concentration: '< 10 ppm',
    chamberVolume: '300 L',
    features: [
      '專利動態多點 PID 梯度加熱，避免晶圓熱應力形變',
      'Class 10 水平層流風道，微粒過濾效率 99.999%',
      '急速 O2 氧氣抽除氣閥，3 分鐘降至 10ppm 以下',
      'SECS/GEM 半導體通訊協定全開，支援 Smart Factory 聯網',
    ],
    applications: [
      'Wafer Polyimide (PI) / BCO Curing 聚醯亞胺烘烤',
      'Flip Chip & Fan-out Packaging 扇出型封裝熟化',
      'MEMS Sensor Thermal Annealing 微機電退火',
    ],
    recommendedFor: '晶圓代工廠、先進封裝 OSAT 工廠、高規 MEMS 製造業',
  },
  {
    id: 'ws-sc-500',
    name: 'WS-SC-500 Ultra-Clean Precision Oven',
    codeName: '極致無塵高溫熱處理機',
    category: 'High-Temperature Process',
    shortDesc: '最高溫可達 500°C，專利耐高溫 HEPA 濾網與雙重水冷密封面設計。',
    purityClass: 'Class 1 (ISO 3)',
    tempUniformity: '±0.2 °C',
    maxTemp: '500 °C',
    o2Concentration: '< 5 ppm',
    chamberVolume: '500 L',
    features: [
      '特殊金屬密封 Flange + 水冷循環迴路，防洩漏無氧化',
      '高溫 Class 1 級特製石英玻璃/金屬過濾單元',
      '極速冷卻雙迴路氣冷/水冷系統，縮短 40% 製程 Cycle Time',
      '整合線上微粒連續監測 (Continuous Particle Counter)',
    ],
    applications: [
      'GaN / SiC 第三代半導體高溫退火 (Annealing)',
      'High-Temperature Glass Substrate Curing 玻璃基板熱處理',
      'Optoelectronic Crystal Sintering 光電晶體燒結',
    ],
    recommendedFor: '化合物半導體晶圓廠、矽光子晶片廠、面板級封裝 FPLP',
  },
  {
    id: 'ws-x1-ultra',
    name: 'WS-X1-Ultra Automated Cassette Station',
    codeName: '全自動晶圓盒連線型氮氣烘烤站',
    category: 'Automated Fab Equipment',
    shortDesc: '結合 AGV/OHT 自動派工人機介面與自動開關艙門，實現完全無人化產線。',
    purityClass: 'Class 1 (ISO 3)',
    tempUniformity: '±0.1 °C',
    maxTemp: '300 °C',
    o2Concentration: '< 3 ppm',
    chamberVolume: '150 L x 2 Dual Stack',
    features: [
      'Dual-Chamber 獨立控溫控氣設計，產能翻倍 Footprint 減半',
      '支援 AGV/OHT 機械手臂自動 Load/Unload 晶圓卡匣 (FOUP/Cassette)',
      '氣動全密閉自鎖閥門，零微粒摩擦釋放',
      'AI 預測性維護 (Predictive Maintenance) 濾網與加熱棒壽命分析',
    ],
    applications: [
      '12-inch Wafer Fab Automatic Production 12 吋晶圓自動化廠',
      'CoWoS / High Bandwidth Memory (HBM) 頂級封裝熟化',
      'Automotive Chip Quality Stress Bake 車用晶片老化測試',
    ],
    recommendedFor: '先進 12 吋晶圓廠、HBM 高頻寬記憶體封裝巨頭',
  },
];

export const HOTSPOT_PINS: HotspotPin[] = [
  {
    id: 'hepa-filter',
    title: {
      tw: 'Class 10 ULPA/HEPA 水平層流單元',
      en: 'Class 10 ULPA/HEPA Laminar Flow Module',
      jp: 'Class 10 ULPA/HEPA 水平層流ユニット',
    },
    category: {
      tw: '環境純淨度 (Air Purity)',
      en: 'Air Purity System',
      jp: '清浄度制御システム',
    },
    description: {
      tw: '搭載耐高溫多孔矽膠密封濾網，空氣經由流體力學風道分佈，風速均勻維持 0.45 m/s，徹底去除 0.1 µm 以上微粒。',
      en: 'High-temp silicone sealed HEPA filters ensure uniform 0.45 m/s laminar airflow, intercepting particles down to 0.1 microns.',
      jp: '耐熱シリコンシール付きHEPAフィルター。風速0.45m/sの層流により、0.1μm以上の微粒子をシャットアウト。',
    },
    specs: {
      'Efficiency 效率': '99.999% @ 0.1 µm',
      'Air Velocity 風速': '0.35 - 0.55 m/s Adjustable',
      'Filter Life 壽命': 'Live AI Wear Analytics',
    },
    xPercent: 32,
    yPercent: 28,
  },
  {
    id: 'heating-element',
    title: {
      tw: 'Multi-Zone 多區獨立 PID 加熱元件',
      en: 'Multi-Zone Independent PID Heater Units',
      jp: 'マルチゾーン独立PIDヒーター',
    },
    category: {
      tw: '熱場控制 (Thermal Balance)',
      en: 'Thermal Control System',
      jp: '熱場制御システム',
    },
    description: {
      tw: '採用英高鎳 (Incoloy) 低塵高溫發熱管，結合 9 點獨立溫度補償演算法，實現全腔體 ±0.1°C 極致等溫面。',
      en: 'Incoloy low-particle heating elements with 9-point real-time algorithm compensation for ±0.1°C thermal uniform matrix.',
      jp: 'インコロイ発熱管と9点独立補正アルゴリズムにより、炉内全域で±0.1°Cの均一温度を実現。',
    },
    specs: {
      'Ramp Rate 升溫速率': '1 - 10 °C/min Programmable',
      'Accuracy 精度': '±0.1 °C @ Steady State',
      'Max Temp 最高溫': '350°C / Optional 500°C',
    },
    xPercent: 68,
    yPercent: 42,
  },
  {
    id: 'n2-nozzle',
    title: {
      tw: 'Inert N2 氮氣置換與微氧檢知單元',
      en: 'Inert N2 Gas Purge & PPM Oxygen Sensor',
      jp: '窒素置換＆超微量酸素センサー',
    },
    category: {
      tw: '氣氛控制 (Atmosphere Intelligence)',
      en: 'Atmosphere Control',
      jp: '雰囲気制御システム',
    },
    description: {
      tw: '多孔矩陣式氮氣噴嘴，充氮效率提高 300%。搭配電化學/氧化鋯 PPM 級氧氣感測器，即時回饋閥門開度。',
      en: 'Multi-port matrix N2 nozzles increase purging efficiency by 300%. Integrated zirconia PPM oxygen sensors drive closed-loop N2 control.',
      jp: '多孔マトリックス窒素ノズルで置換効率が300%向上。ジルコニア酸素センサーで閉ループ制御。',
    },
    specs: {
      'Purge Time 置換時間': '< 3 min to 10ppm',
      'O2 Sensor 精度': '0 - 1000 ppm (±1% FS)',
      'N2 Flow Rate 流量': '10 - 200 L/min Auto-regulated',
    },
    xPercent: 45,
    yPercent: 62,
  },
  {
    id: 'plc-controller',
    title: {
      tw: 'SECS/GEM 工業 4.0 智慧控制器',
      en: 'SECS/GEM Industry 4.0 Smart PLC Controller',
      jp: 'SECS/GEM対応スマートPLCコントローラー',
    },
    category: {
      tw: '數位監控 (Digital Intelligence)',
      en: 'Digital Control',
      jp: 'デジタル制御システム',
    },
    description: {
      tw: '內建半導體通訊協定 SECS-I/HSMS，實時傳送溫控曲線、Recipe 參數、微粒數與警報日誌至晶圓廠 MES 系統。',
      en: 'Embedded SECS/GEM interface natively broadcasts thermal curves, recipe parameters, and alarm logs to wafer fab MES.',
      jp: 'SECS/GEM標準プロトコル内蔵。熱曲線やレシピ、アラーム履歴をウエハファブMESに即時送信。',
    },
    specs: {
      'Protocol 通訊': 'SECS-I / HSMS / OPC-UA / Modbus TCP',
      'Touch Panel 螢幕': '15.6" Industrial Glass Touch Panel',
      'Recipe Storage 處方': 'Over 1,000 Dynamic Recipes',
    },
    xPercent: 82,
    yPercent: 78,
  },
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', desc: 'Global Quality Management Certified' },
  { name: 'CE Marking', desc: 'European Safety & Machinery Directive' },
  { name: 'SEMI S2 / S8', desc: 'Semiconductor Equipment Safety & Ergonomics' },
  { name: 'ISO Class 1 Cleanroom Lab', desc: 'Internal Wafer Testing Cleanroom Facility' },
];

export const GLOBAL_LOCATIONS = [
  { city: 'Hsinchu, Taiwan (HQ)', role: 'R&D Center & Main Manufacturing Plant', coords: '24.78° N, 120.99° E' },
  { city: 'Tainan Science Park', role: 'Advanced Semiconductor Service Center', coords: '23.11° N, 120.27° E' },
  { city: 'Singapore Regional Hub', role: 'Southeast Asia Technical Support', coords: '1.35° N, 103.81° E' },
  { city: 'Munich, Germany', role: 'European Semiconductor Support Hub', coords: '48.13° N, 11.58° E' },
  { city: 'San Jose, USA', role: 'Silicon Valley Application Engineering Lab', coords: '37.33° N, -121.88° W' },
];
