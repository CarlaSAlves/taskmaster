import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <div className="task-content">
        <p>{task.text}</p>
      </div>
    </div>
  );
};

export default TaskItem;