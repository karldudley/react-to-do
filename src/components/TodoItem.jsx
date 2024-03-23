import React from 'react';

export default function TodoItem({
  completed,
  id,
  title,
  handleCheckChange,
  handleDelete,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => handleCheckChange(id, e.target.checked)}
        />
        <span>{title}</span>
      </label>
      <button onClick={(e) => handleDelete(id)}>Delete</button>
    </li>
  );
}
