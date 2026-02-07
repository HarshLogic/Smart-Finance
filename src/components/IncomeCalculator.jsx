import { useState, useEffect } from 'react';
import axios from 'axios';

const IncomeCalculator = () => {
  const [incomes, setIncomes] = useState([]);
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState({ type: '', amount: '' });

  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = async () => {
    const res = await axios.get('/api/income');
    setIncomes(res.data.incomes);
    setTotal(res.data.total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/income', form);
    setForm({ type: '', amount: '' });
    fetchIncomes();
  };

  return (
    <div>
      <h2>Income Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type (e.g., Salary)" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} required />
        <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
        <button type="submit">Add Income</button>
      </form>
      <h3>Total Income: ${total}</h3>
      <ul>{incomes.map((inc) => <li key={inc._id}>{inc.type}: ${inc.amount}</li>)}</ul>
    </div>
  );
};

export default IncomeCalculator;