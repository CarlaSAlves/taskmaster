import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <label className="checkbox-container">
          <input 
            type="checkbox" 
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          <span className="checkmark"></span>
        </label>
        <p className="task-text">{task.text}</p>
      </div>
    </div>
  );
};

export default TaskItem;