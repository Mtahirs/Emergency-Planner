
import React from 'react';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    const percentage = ((currentStep + 1) / totalSteps) * 100;
    
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-indigo-600">
                {Math.round(percentage)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
