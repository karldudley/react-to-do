import { useState } from 'react';

export default function NewItem({ onSubmit }) {
  const [item, setItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (item === '') return;

    onSubmit(item);

    setItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>New Item</label>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        type="text"
      />
      <button>Add</button>
    </form>
  );
}
