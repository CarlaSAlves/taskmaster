import React from 'react'
import './Header.css';
import todoLogo from '../../assets/to-do-list.png';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <img src={todoLogo} alt="TaskMaster logo" />
            <h1>TaskMaster</h1>
          </div>
          <p>Manage your tasks efficiently</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
