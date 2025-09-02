import React from 'react';
import type { FormData, Recommendation } from '../types';
import { TargetIcon, TrendingUpIcon, CheckCircleIcon } from './Icons';
import { ALL_CURRENCIES } from '../constants';

interface ResultsDisplayProps {
  formData: FormData;
  recommendation: Recommendation;
  onStartOver: () => void;
}

const getCurrencySymbol = (currencyCode: string): string => {
    const currency = ALL_CURRENCIES.find(c => c.value === currencyCode);
    return currency ? currency.symbol : '$';
};

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ formData, recommendation, onStartOver }) => {
  const currentSavings = parseFloat(formData.currentSavings) || 0;
  const progressPercentage = recommendation.targetAmount > 0 
    ? Math.min(100, (currentSavings / recommendation.targetAmount) * 100) 
    : 100;

  const currencySymbol = getCurrencySymbol(formData.currency);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your Emergency Fund Plan</h2>
        <p className="text-slate-600">Based on your personal situation and risk factors.</p>
      </div>

      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-indigo-900">Current Progress</h3>
          <span className="text-2xl font-bold text-indigo-600">{progressPercentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-indigo-200 rounded-full h-3 mb-2">
          <div
            className="bg-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-indigo-700 text-center">
          {currencySymbol}{currentSavings.toLocaleString()} of {currencySymbol}{recommendation.targetAmount.toLocaleString()} target
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
          <div className="flex items-center mb-2">
            <TargetIcon className="w-5 h-5 text-emerald-600 mr-2" />
            <h4 className="font-semibold text-emerald-900">Target Amount</h4>
          </div>
          <p className="text-3xl font-bold text-emerald-600">{currencySymbol}{recommendation.targetAmount.toLocaleString()}</p>
          <p className="text-sm text-emerald-700">{recommendation.monthsRecommended} months of essentials</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <div className="flex items-center mb-2">
            <TrendingUpIcon className="w-5 h-5 text-amber-600 mr-2" />
            <h4 className="font-semibold text-amber-900">Time to Goal</h4>
          </div>
          <p className="text-3xl font-bold text-amber-600">
            {recommendation.monthsToTarget > 0 ? `${recommendation.monthsToTarget} months` : 'Goal reached!'}
          </p>
          <p className="text-sm text-amber-700">
            At {currencySymbol}{recommendation.monthlyProgress.toLocaleString()}/month
          </p>
        </div>
      </div>
      
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Your Action Plan</h3>
        <div className="space-y-4">
          {recommendation.remainingNeeded > 0 ? (
            <>
              <ActionItem text={`Save ${currencySymbol}${recommendation.remainingNeeded.toLocaleString()} more`} subtext={`At ${currencySymbol}${recommendation.monthlyProgress.toLocaleString()}/month, you'll reach your goal in ${recommendation.monthsToTarget} months.`} />
              <ActionItem text={`Store in a ${formData.storagePreference === 'savings' ? 'high-yield savings' : formData.storagePreference} account`} subtext="Keep it accessible but separate from daily spending." />
              <ActionItem text="Automate your savings" subtext="Set up automatic transfers on payday to build the habit." />
            </>
          ) : (
            <div className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-emerald-900">Congratulations! You've reached your emergency fund goal.</p>
                <p className="text-sm text-emerald-700">Focus on maintaining this amount and consider other financial goals.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onStartOver}
          className="px-8 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors font-medium"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

const ActionItem: React.FC<{ text: string, subtext: string }> = ({ text, subtext }) => (
    <div className="flex items-start">
        <CheckCircleIcon className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
        <div>
            <p className="font-medium text-slate-800">{text}</p>
            <p className="text-sm text-slate-600">{subtext}</p>
        </div>
    </div>
);

export default ResultsDisplay;