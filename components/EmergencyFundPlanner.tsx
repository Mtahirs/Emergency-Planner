import React, { useState, useMemo } from 'react';
import type { FormData, Recommendation } from '../types';
import { STEPS, INITIAL_FORM_DATA } from '../constants';
import StepForm from './StepForm';
import ResultsDisplay from './ResultsDisplay';

const EmergencyFundPlanner: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateArrayField = (field: 'mainConcerns', value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const calculateRecommendation = useMemo((): Recommendation => {
    const essentials = parseFloat(formData.monthlyEssentials) || 0;
    const currentSavings = parseFloat(formData.currentSavings) || 0;
    const savingsCapacity = parseFloat(formData.monthlySavingsCapacity) || 0;

    let baseMonths = 4;

    if (formData.jobStability === 'very-stable') baseMonths -= 1;
    if (formData.jobStability === 'unstable') baseMonths += 2;

    if (formData.incomeStreams === 'multiple') baseMonths -= 0.5;
    if (formData.incomeStreams === 'single') baseMonths += 0.5;

    const dependentCount = parseInt(formData.dependents) || 0;
    baseMonths += dependentCount * 0.5;

    if (formData.mainConcerns.includes('medical')) baseMonths += 1;
    if (formData.mainConcerns.includes('home-repair')) baseMonths += 0.5;

    if (formData.familySupport === 'strong') baseMonths -= 1;
    if (formData.familySupport === 'none') baseMonths += 1;

    baseMonths = Math.max(3, Math.min(8, baseMonths));

    const targetAmount = Math.round(essentials * baseMonths);
    const remainingNeeded = Math.max(0, targetAmount - currentSavings);
    const monthsToTarget = savingsCapacity > 0 ? Math.ceil(remainingNeeded / savingsCapacity) : 0;

    return {
      targetAmount,
      monthsRecommended: baseMonths,
      remainingNeeded,
      monthsToTarget,
      monthlyProgress: savingsCapacity
    };
  }, [formData]);

  const nextStep = () => {
    if (currentStep < STEPS.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const startOver = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(0);
  };

  const isLastStep = currentStep === STEPS.length - 1;
  const showResults = currentStep === STEPS.length;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-6 sm:p-10">
            <header className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Emergency Fund Planner</h1>
                <p className="text-slate-500 max-w-2xl mx-auto">Build your financial safety net with a personalized plan.</p>
            </header>

            {showResults ? (
                <ResultsDisplay
                    formData={formData}
                    recommendation={calculateRecommendation}
                    onStartOver={startOver}
                />
            ) : (
                <StepForm
                    currentStep={currentStep}
                    formData={formData}
                    updateField={updateField}
                    updateArrayField={updateArrayField}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    isLastStep={isLastStep}
                />
            )}
        </div>
    </div>
  );
};

export default EmergencyFundPlanner;