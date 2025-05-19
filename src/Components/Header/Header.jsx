import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <img src="./assets/to-do-list.png" alt="logo" />
            <h1>Task Master</h1>
            <p>Manage your tasks efficiently</p>
        </div>
    </header>
  );
};

export default Header;
