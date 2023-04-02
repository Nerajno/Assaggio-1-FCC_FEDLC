import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsBrightnessHigh, BsLightbulbOffFill } from 'react-icons/bs';

function MyNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // BsBrightnessHigh

  return (
    <Navbar
      bg={isDarkMode ? 'dark' : 'light'}
      variant={isDarkMode ? 'dark' : 'light'}
      expand='lg'
    >
      <Container>
        <Navbar.Brand href='#'>Assaggio</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='https://twitter.com/nerajno'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </Nav.Link>
            <Nav.Link
              href='https://github.com/Nerajno'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </Nav.Link>
            <Nav.Link
              href='https://developindvlpr.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={toggleDarkMode}>
            {isDarkMode ? (
                <>
                  <BsBrightnessHigh /> Light Mode
                </>
              ) : (
                <>
                  <BsLightbulbOffFill /> Dark Mode
                </>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
