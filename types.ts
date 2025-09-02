import type React from 'react';

export interface FormData {
  currency: string;
  monthlyEssentials: string;
  monthlyIncome: string;
  currentSavings: string;
  monthlyDiscretionary: string;
  jobStability: string;
  incomeStreams: string;
  healthInsurance: string;
  housingStatus: string;
  dependents: string;
  mainConcerns: string[];
  jobSearchTime: string;
  familySupport: string;
  assetCondition: string;
  monthlySavingsCapacity: string;
  storagePreference: string;
  savingsApproach: string;
}

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  key: keyof FormData;
  label: string;
  type: 'number' | 'select' | 'checkbox';
  placeholder?: string;
  help?: string;
  options?: QuestionOption[];
}

export interface StepData {
  title: string;
  icon: React.ReactElement;
  questions: Question[];
}

export interface Recommendation {
  targetAmount: number;
  monthsRecommended: number;
  remainingNeeded: number;
  monthsToTarget: number;
  monthlyProgress: number;
}
