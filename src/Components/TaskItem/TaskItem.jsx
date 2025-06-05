import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

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

  // Handle the edit functionality
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedText(task.text);
  };

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSave = () => {
    const trimmedText = editedText.trim();
    if (trimmedText && trimmedText !== task.text) {
      onEditTask(task.id, trimmedText);
    }
    setIsEditing(false);
  };

  // Handle the cancel action for editing
  // This function is called when the user cancels the edit
    const handleEditCancel = () => {
    setIsEditing(false);
    setEditedText(task.text); 
  };

  // Handle keydown events for editing
  // This function is called when a key is pressed while editing
  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditSave();
    } else if (e.key === 'Escape') {
      handleEditCancel();
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {!isEditing ? (
        // visible when not editing
        <div className="task-content">
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            <span className="checkmark"></span>
          </label>
          
          <p 
            className="task-text"
            onClick={handleEditClick}
          >
            {task.text}
          </p>
          
          <div className="task-actions">
            <button 
              className="edit-btn"
              onClick={handleEditClick}
              aria-label="Edit task"
            >
              ✎
            </button>
            
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
      ) : (
        // Edition mode
        // visible when editing
        <div className="task-edit">
          <input
            type="text"
            className="edit-input"
            value={editedText}
            onChange={handleEditChange}
            onKeyDown={handleEditKeyDown}
            autoFocus
          />
          <div className="edit-actions">
            <button 
              className="save-btn"
              onClick={handleEditSave}
              disabled={!editedText.trim() || editedText.trim() === task.text}
            >
              Save
            </button>
            <button 
              className="cancel-btn"
              onClick={handleEditCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;