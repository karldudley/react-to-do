import React from 'react';
import TodoItem from './TodoItem';

export default function ItemList({ todos, handleCheckChange, handleDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          handleCheckChange={handleCheckChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
