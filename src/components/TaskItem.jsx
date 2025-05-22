import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      <span>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
