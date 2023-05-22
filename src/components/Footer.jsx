import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        <a href="href='https://twitter.com/nerajno'
              target='_blank'
              rel='noopener noreferrer'"> Twitter</a> |{' '}
        <a href='https://developindvlpr.com/'
              target='_blank'
              rel='noopener noreferrer'>Portfolio</a>
      </p>
      <p>
        Created in 2023.
      </p>
    </footer>
  );
};

export default Footer;