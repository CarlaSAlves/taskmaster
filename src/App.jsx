
import React from 'react';
import Header from './Components/Header/Header';
import TaskList from './Components/TaskList/TaskList';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <TaskList />
      </main>
      <footer className="footer">
        <div className="container">
          <p>TaskMaster &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
