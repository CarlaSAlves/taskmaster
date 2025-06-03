import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Show confirmation dialog when delete button is clicked
  // This function is called when the delete button is clicked
  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  // Confirm the deletion of the task
  // This function is called when the user confirms the deletion
  const handleConfirmDelete = () => {
    onDeleteTask(task.id);
    setShowConfirmation(false);
  };

  // Cancel the deletion and hide the confirmation dialog
  // This function is called when the user cancels the deletion
  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

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
        
        {!showConfirmation ? (
          <button 
            className="delete-btn"
            onClick={handleDeleteClick}
            aria-label="Delete task"
          >
            <span className="delete-icon">×</span>
          </button>
        ) : (
          <div className="delete-confirmation">
            <span>Sure?</span>
            <button 
              className="confirm-btn"
              onClick={handleConfirmDelete}
            >
              Yes
            </button>
            <button 
              className="cancel-btn"
              onClick={handleCancelDelete}
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;