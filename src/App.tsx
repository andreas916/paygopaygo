import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import MobileFrame from './components/MobileFrame';
import './styles/theme.css';

export const App: React.FC = () => {
  return (
    <BudgetProvider>
      <MobileFrame />
    </BudgetProvider>
  );
};

export default App;
