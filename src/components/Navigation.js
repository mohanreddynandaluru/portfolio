import React from 'react';

const Navigation = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <nav className="nav">
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.id);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation; 