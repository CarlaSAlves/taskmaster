import React from 'react'
import './Header.css';
import todoLogo from '../../assets/to-do-list.png';

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <img src={todoLogo} alt="logo" />
            <h1>Task Master</h1>
            <p>Manage your tasks efficiently</p>
        </div>
    </header>
  );
};

export default Header;
