import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onEditTask }) => {

  const completedCount = tasks.filter(task => task.completed).length;
  
  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2>My Tasks</h2>
        <div className="task-counts">
          <span className="task-count">{tasks.length}</span>
          {tasks.length > 0 && (
            <span className="completed-count">
              {completedCount} of {tasks.length} completed
            </span>
          )}
        </div>
      </div>
      
      <div className="task-list-content">
        {tasks.length === 0 ? (
          <div className="empty-list">
            <div className="empty-list-icon">📝</div>
            <p>No tasks yet. Add your first task to get started!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;