
import React from 'react';
import type { Question, FormData } from '../types.ts';
import { ALL_CURRENCIES } from '../constants.tsx';
import CurrencySelector from './CurrencySelector.tsx';

interface QuestionRendererProps {
  question: Question;
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  updateArrayField: (field: 'mainConcerns', value: string, checked: boolean) => void;
}

const getCurrencySymbol = (currencyCode: string): string => {
    const currency = ALL_CURRENCIES.find(c => c.value === currencyCode);
    return currency ? currency.symbol : '$';
};

const formatNumberInput = (value: string): string => {
    if (!value) return '';
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

const parseNumberInput = (value: string): string => {
    return value.replace(/,/g, '');
};

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  formData,
  updateField,
  updateArrayField
}) => {
  const value = formData[question.key];
  
  switch (question.type) {
    case 'number': {
      const currencySymbol = getCurrencySymbol(formData.currency);
      return (
        <div>
          <label htmlFor={question.key} className="block text-sm font-medium text-slate-700 mb-2">
            {question.label}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{currencySymbol}</span>
            <input
              id={question.key}
              type="text"
              inputMode="decimal"
              className="w-full pl-7 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder={question.placeholder}
              value={formatNumberInput(value as string)}
              onChange={(e) => {
                const parsedValue = parseNumberInput(e.target.value);
                if (/^\d*\.?\d*$/.test(parsedValue)) {
                  updateField(question.key, parsedValue);
                }
              }}
            />
          </div>
          {question.help && (
            <p className="text-xs text-slate-500 mt-1.5">{question.help}</p>
          )}
        </div>
      );
    }
    case 'select':
      if (question.key === 'currency') {
          return (
             <div>
                <label htmlFor={question.key} className="block text-sm font-medium text-slate-700 mb-2">
                    {question.label}
                </label>
                <CurrencySelector
                    value={value as string}
                    onChange={(newValue) => updateField('currency', newValue)}
                />
             </div>
          )
      }
      return (
        <div>
          <label htmlFor={question.key} className="block text-sm font-medium text-slate-700 mb-2">
            {question.label}
          </label>
          <select
            id={question.key}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white"
            value={value as string}
            onChange={(e) => updateField(question.key, e.target.value)}
          >
            <option value="">Select an option...</option>
            {question.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    
    case 'checkbox':
      return (
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            {question.label}
          </label>
          <div className="space-y-2">
            {question.options?.map(option => (
              <label key={option.value} className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                  checked={(value as string[]).includes(option.value)}
                  onChange={(e) => updateArrayField(question.key as 'mainConcerns', option.value, e.target.checked)}
                />
                <span className="ml-3 text-sm text-slate-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

export default QuestionRenderer;