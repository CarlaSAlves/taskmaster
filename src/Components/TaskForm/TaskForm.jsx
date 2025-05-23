import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trim para remover espaços em branco no início e fim
    const trimmedText = taskText.trim();
    
    // Verificar se o texto não está vazio
    if (trimmedText) {
      // Chamar a função que foi passada como prop
      onAddTask(trimmedText);
      // Limpar o campo de texto
      setTaskText('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button 
        type="submit" 
        className="add-task-btn"
        disabled={!taskText.trim()}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;