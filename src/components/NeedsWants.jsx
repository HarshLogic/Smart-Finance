import { useState, useEffect } from 'react';
import axios from 'axios';

const NeedsWants = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ category: 'Needs', item: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get('/api/needs-wants');
    setItems(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/needs-wants', form);
    setForm({ category: 'Needs', item: '' });
    fetchItems();
  };

  return (
    <div>
      <h2>Needs and Wants</h2>
      <form onSubmit={handleSubmit}>
        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          <option value="Needs">Needs</option>
          <option value="Wants">Wants</option>
        </select>
        <input type="text" placeholder="Item" value={form.item} onChange={(e) => setForm({ ...form, item: e.target.value })} required />
        <button type="submit">Add Item</button>
      </form>
      <ul>{items.map((item) => <li key={item._id}>{item.category}: {item.item}</li>)}</ul>
    </div>
  );
};

export default NeedsWants;