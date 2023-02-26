import React, { useState } from 'react';

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#">Assaggio</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
      </ul>
      <label htmlFor="dark-mode-toggle">
        Dark Mode
        <input
          type="checkbox"
          id="dark-mode-toggle"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
      </label>
    </nav>
  );
};

export default Navbar;




