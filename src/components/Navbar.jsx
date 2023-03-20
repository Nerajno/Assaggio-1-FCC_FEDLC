// import React, { useState } from 'react';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" href="#">Assaggio</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Twitter</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Github</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Portfolio</a>
//       </li>
//     </ul>
//     <label className="form-check-label mx-2" htmlFor="dark-mode-toggle">
//       <input
//         type="checkbox"
//         className="form-check-input"
//         id="dark-mode-toggle"
//         checked={darkMode}
//         onChange={handleDarkModeToggle}
//       />
//       Dark Mode
//     </label>
//   </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Assaggio</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://twitter.com/nerajno" target="_blank" rel="noopener noreferrer">Twitter</Nav.Link>
            <Nav.Link href="https://github.com/Nerajno" target="_blank" rel="noopener noreferrer">Github</Nav.Link>
            <Nav.Link href="https://developindvlpr.com/"target="_blank" rel="noopener noreferrer">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;




