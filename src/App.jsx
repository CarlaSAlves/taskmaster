import React, { useState } from 'react';
import Header from './components/Header/Header';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Função para adicionar uma nova tarefa
  const addTask = (text) => {
    // Criar um novo objeto de tarefa
    const newTask = {
      id: Date.now(), // Usar timestamp como ID único
      text: text,
      completed: false,
      createdAt: new Date()
    };
    
    // Adicionar a nova tarefa ao array de tarefas
    setTasks([...tasks, newTask]);
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
          <TaskList tasks={tasks} />
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