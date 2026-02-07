import { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ type: 'In', amount: '', description: '' });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await axios.get('/api/transaction');
    setTransactions(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/transaction', form);
    setForm({ type: 'In', amount: '', description: '' });
    fetchTransactions();
  };

  return (
    <div>
      <h2>Transaction Tracker</h2>
      <form onSubmit={handleSubmit}>
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="In">In</option>
          <option value="Out">Out</option>
        </select>
        <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>{transactions.map((txn) => <li key={txn._id}>{txn.type}: ${txn.amount} - {txn.description}</li>)}</ul>
    </div>
  );
};

export default TransactionTracker;