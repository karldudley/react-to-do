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

    if (!item) return;

    setAllItems((currentItems) => {
      return [...currentItems, {
        id: Math.floor(Math.random()*100000),
        title: item,
        completed: false
      }];
    });

    setItem('');
    console.log(allItems);
  };

  const handleDelete = (id) => {
    
    const updatedItems = allItems.filter((currentItem) => {
      
      return currentItem.id !== id;
    });
    setAllItems(updatedItems);
  }

  const handleCheckChange = (id, checked) => {
    const updatedItems = allItems.map((currentItem) => {
      if (currentItem.id === id) {
        return {
          ...currentItem,
          completed: checked
        }
      }
      return currentItem;
    });
    setAllItems(updatedItems);
  }

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <label>New Item</label>
        <input value={item} onChange={handleInputChange} type="text" />
        <button>Add</button>
      </form>
      {allItems.length === 0 ? <h3>Empty</h3> : <h3>Todo List ({allItems.length})</h3>}
      <ul>
        {allItems.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={item.completed} onChange={e => handleCheckChange(item.id, e.target.checked)}/>
              <span>{item.title}</span>
            </label>
            <button onClick={e => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
