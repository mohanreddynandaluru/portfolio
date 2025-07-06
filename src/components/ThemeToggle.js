import React from 'react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={onToggle}
      id={theme === 'dark' ? 'dark' : 'white'}
    >
      <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
    </button>
  );
};

export default ThemeToggle; 