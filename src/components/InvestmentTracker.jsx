import { useState, useEffect } from 'react';
import axios from 'axios';

const InvestmentTracker = () => {
  const [investments, setInvestments] = useState([]);
  const [form, setForm] = useState({ platform: '', amount: '' });

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    const res = await axios.get('/api/investment');
    setInvestments(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/investment', form);
    setForm({ platform: '', amount: '' });
    fetchInvestments();
  };

  return (
    <div>
      <h2>Investment Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Platform (e.g., Stocks)" value={form.platform} onChange={(e) => setForm({ ...form, platform: e.target.value })} required />
        <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
        <button type="submit">Add Investment</button>
      </form>
      <ul>{investments.map((inv) => <li key={inv._id}>{inv.platform}: ${inv.amount}</li>)}</ul>
    </div>
  );
};

export default InvestmentTracker;