import React from 'react';

const SocialIcons = () => {
  const socialLinks = [
    {
      url: 'https://linkedin.com/in/bharath-reddy-kanamakindha',
      icon: 'fab fa-linkedin'
    },
    {
      url: 'https://github.com/kanamakindhabharathreddy',
      icon: 'fab fa-github'
    }
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 