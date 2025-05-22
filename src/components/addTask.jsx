import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newTask = {
      id: Date.now(), // أو تقدر تستخدم uuid
      text: trimmedText,
      completed: false,
    };

    dispatch(addTask(newTask));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;
