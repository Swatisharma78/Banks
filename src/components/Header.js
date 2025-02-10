import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <h1>Bank Statement Analyzer</h1>
      <nav>
        <a href="/">Home</a>
        {/* <a href="/about">About</a> */}
        <button onClick={toggleDarkMode} className="mode-toggle">
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;