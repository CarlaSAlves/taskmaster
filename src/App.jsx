import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';
import SaveIndicator from './Components/SaveIndicator/SaveIndicator';
// Importing styles
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage if available
    const savedTasks = localStorage.getItem('tasks');
    // If tasks are found, parse them; otherwise, return an empty array
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error('Error parsing tasks from localStorage:', error);
        return [];
      }
    }
    return [];
  }); 

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    setSaving(true);
    setError(null);
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        setError('Local storage is full. No more tasks can be saved.');
      } else {
        setError('Error saving tasks.');
      }
    }
    
    // simulate a save delay
    const timer = setTimeout(() => {
      setSaving(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [tasks]);

  const addTask = (text) => {  
    // Add a new task with a unique ID and current timestamp
    const newTask = {
      id: Date.now(), 
      text: text,
      completed: false,
      createdAt: new Date()
    };
    
    setTasks([...tasks, newTask]);
  };

  // Change the task's completed status
  const toggleTaskComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  // Delete a task by its ID
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to edit a task
  const editTask = (taskId, newText) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, text: newText, updatedAt: new Date() } 
        : task
    ));
  };

  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <div className="app-intro">
            <h2>Welcome to TaskMaster</h2>
            <p>
              Stay organized and boost your productivity with TaskMaster.
              Add tasks, set priorities, and track your progress all in one place.
            </p>
          </div>
          
          <TaskForm onAddTask={addTask} />
          <TaskList 
            tasks={tasks} 
            onToggleComplete={toggleTaskComplete} 
            onDeleteTask={deleteTask} 
            onEditTask={editTask}
          />
          {saving && <SaveIndicator />}
          {error && <div className="error-message">{error}</div>}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>TaskMaster &copy; {new Date().getFullYear()} | Simplify your day</p>
        </div>
      </footer>
    </div>
  );
}

export default App;