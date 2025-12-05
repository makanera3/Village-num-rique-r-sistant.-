export interface ConsultationData {
  role: string;
  context: string;
}

export interface AdviceResult {
  markdown: string;
  timestamp: number;
}

export enum AppStep {
  HOME = 'HOME',
  INPUT = 'INPUT',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  ERROR = 'ERROR'
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}