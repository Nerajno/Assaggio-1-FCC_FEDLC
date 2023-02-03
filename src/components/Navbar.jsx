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
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
        <li>
          <a href="#">Link 4</a>
        </li>
        <li>
          <a href="#">Link 5</a>
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

export default Nav;
In this example, the component uses the useState hook to manage the state of the dark mode toggle switch. When the toggle switch is changed, the handleDarkModeToggle function is called, which updates the darkMode state. The state is then used to determine whether the toggle switch should be checked or not by using the checked prop.




