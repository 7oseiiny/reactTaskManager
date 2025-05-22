import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/tasksSlice';
import { setFilter } from '../redux/filterSlice';
import AddTask from './AddTask';
import TaskItem from './TaskItem';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const filterStatus = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === 'active') return !task.completed;
    if (filterStatus === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="task-list">
      <AddTask />

      <div className="filters">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className={filterStatus === 'all' ? 'active-filter' : ''}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('active'))}
          className={filterStatus === 'active' ? 'active-filter' : ''}
        >
          Active
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className={filterStatus === 'completed' ? 'active-filter' : ''}
        >
          Completed
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found...</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => dispatch(toggleTask(task.id))}
              onDelete={() => dispatch(deleteTask(task.id))}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
