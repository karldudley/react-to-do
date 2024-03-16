import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [item, setItem] = useState('');
  const [allItems, setAllItems] = useState([]);

  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAllItems((currentItems) => {
      return [...currentItems, item];
    });

    setItem('');
  };

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <label>New Item</label>
        <input value={item} onChange={handleInputChange} type="text" />
        <button>Add</button>
      </form>
      <h3>Todo List</h3>
      <ul>
        {allItems.map((item, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
