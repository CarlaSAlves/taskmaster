import React from 'react';
import Header from './Components/Header/Header';
import TaskList from './Components/TaskList/TaskList';
import './App.css';

function App() {
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
          <TaskList />
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
