import IncomeCalculator from './components/IncomeCalculator';
import InvestmentTracker from './components/InvestmentTracker';
import TransactionTracker from './components/TransactionTracker';
import SavingsPredictor from './components/SavingsPredictor';
import NeedsWants from './components/NeedsWants';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Smart Finance Dashboard</h1>
      <IncomeCalculator />
      <hr />
      <InvestmentTracker />
      <hr />
      <TransactionTracker />
      <hr />
      <SavingsPredictor />
      <hr />
      <NeedsWants />
    </div>
  );
}

export default App;