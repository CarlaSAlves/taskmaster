import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2>My Tasks</h2>
        <span className="task-count">{tasks.length}</span>
      </div>
      
      <div className="task-list-content">
        {tasks.length === 0 ? (
          <div className="empty-list">
            <div className="empty-list-icon">📝</div>
            <p>No tasks yet. Add your first task to get started!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
