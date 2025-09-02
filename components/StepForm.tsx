
import React from 'react';
import { STEPS } from '../constants';
import type { FormData } from '../types';
import QuestionRenderer from './QuestionRenderer';
import ProgressBar from './ProgressBar';

interface StepFormProps {
  currentStep: number;
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  updateArrayField: (field: 'mainConcerns', value: string, checked: boolean) => void;
  prevStep: () => void;
  nextStep: () => void;
  isLastStep: boolean;
}

const StepForm: React.FC<StepFormProps> = ({
  currentStep,
  formData,
  updateField,
  updateArrayField,
  prevStep,
  nextStep,
  isLastStep,
}) => {
  const stepData = STEPS[currentStep];

  return (
    <div>
      <ProgressBar currentStep={currentStep} totalSteps={STEPS.length} />
      
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm mt-8">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            {stepData.icon}
          </div>
          <h2 className="text-xl font-semibold text-slate-900">
            {stepData.title}
          </h2>
        </div>

        <div className="space-y-4">
          {stepData.questions.map(question => (
            <QuestionRenderer
              key={question.key}
              question={question}
              formData={formData}
              updateField={updateField}
              updateArrayField={updateArrayField}
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLastStep ? 'Calculate Plan' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
