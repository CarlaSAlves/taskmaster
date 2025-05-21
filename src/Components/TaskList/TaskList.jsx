import React from 'react';
import './TaskList.css';

const TaskList = () => {
  // This is just a placeholder for now
  // We'll add actual task functionality in US2.1
  return (
<div className="task-list fade-in">
  <div className="task-list-header">
    <h2>My Tasks</h2>
    <span className="task-count">0</span>
  </div>
  <div className="empty-list">
    <div className="empty-list-icon fade-in delay-1">📝</div>
    <p className="fade-in delay-2">No tasks yet. Add your first task to get started!</p>
  </div>
</div>
    
  );
};

export default TaskList;
