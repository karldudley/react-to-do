import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewItem from './components/NewItem';
import ItemList from './components/ItemList';

function App() {
  const [allItems, setAllItems] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(allItems));
  }, [allItems]);

  function addTodoItem(title) {
    setAllItems((currentItems) => {
      return [
        ...currentItems,
        {
          id: Math.floor(Math.random() * 100000),
          title: title,
          completed: false,
        },
      ];
    });
  }

  const handleDelete = (id) => {
    const updatedItems = allItems.filter((currentItem) => {
      return currentItem.id !== id;
    });
    setAllItems(updatedItems);
  };

  const handleCheckChange = (id, checked) => {
    const updatedItems = allItems.map((currentItem) => {
      if (currentItem.id === id) {
        return {
          ...currentItem,
          completed: checked,
        };
      }
      return currentItem;
    });
    setAllItems(updatedItems);
  };

  return (
    <>
      <Header />
      <NewItem onSubmit={addTodoItem} />

      {allItems.length === 0 ? (
        <h3>Empty</h3>
      ) : (
        <h3>Todo List ({allItems.length})</h3>
      )}
      <ItemList
        todos={allItems}
        handleCheckChange={handleCheckChange}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
