
import React from 'react';
import EmergencyFundPlanner from './components/EmergencyFundPlanner';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-50 text-slate-800">
      <EmergencyFundPlanner />
    </main>
  );
};

export default App;
