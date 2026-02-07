import { useState } from 'react';
import axios from 'axios';

const SavingsPredictor = () => {
  const [form, setForm] = useState({ principal: '', rate: '', time: '' });
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/savings/predict', form);
    setPrediction(res.data.futureValue);
  };

  return (
    <div>
      <h2>Savings Predictor</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Current Savings (Principal)" value={form.principal} onChange={(e) => setForm({ ...form, principal: e.target.value })} required />
        <input type="number" step="0.01" placeholder="Interest Rate (e.g., 0.05 for 5%)" value={form.rate} onChange={(e) => setForm({ ...form, rate: e.target.value })} required />
        <input type="number" placeholder="Time in Years" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
        <button type="submit">Predict</button>
      </form>
      {prediction && <p>Future Value: ${prediction}</p>}
    </div>
  );
};

export default SavingsPredictor;