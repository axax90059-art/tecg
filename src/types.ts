export type Language = 'tw' | 'en' | 'jp';

export interface ProductModel {
  id: string;
  name: string;
  codeName: string;
  category: string;
  shortDesc: string;
  purityClass: string;
  tempUniformity: string;
  maxTemp: string;
  o2Concentration: string;
  chamberVolume: string;
  features: string[];
  applications: string[];
  recommendedFor: string;
}

export interface HotspotPin {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  description: Record<Language, string>;
  specs: Record<string, string>;
  xPercent: number;
  yPercent: number;
}

export interface DiagnosisPoint {
  id: number;
  oldIssue: Record<Language, string>;
  oldDetail: Record<Language, string>;
  newSolution: Record<Language, string>;
  newDetail: Record<Language, string>;
  principleTitle: Record<Language, string>;
  principleIcon: string;
}

export interface SensorData {
  currentTemp: number;
  targetTemp: number;
  o2Ppm: number;
  n2FlowRate: number; // L/min
  chamberPressure: number; // Pa
  heaterPowerPct: number; // %
  cleanlinessParticles: number; // particles/m3 >0.5um
  status: 'heating' | 'soaking' | 'cooling' | 'idle' | 'purging';
}

export interface RFQFormState {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  modelId: string;
  chamberSize: string;
  maxTemp: string;
  cleanliness: string;
  automation: string[];
  notes: string;
}
