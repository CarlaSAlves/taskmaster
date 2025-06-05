import React, { useState } from 'react';
import Header from './components/Header/Header';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

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

    //Function to edit a task
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
          <TaskList tasks={tasks} 
          onToggleComplete={toggleTaskComplete} 
          onDeleteTask={deleteTask} 
          onEditTask={editTask}/>
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