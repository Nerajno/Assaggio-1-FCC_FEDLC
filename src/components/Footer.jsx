import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        <a href="https://www.example1.com">Example 1</a> |{' '}
        <a href="https://www.example2.com">Example 2</a>
      </p>
      <p>
        Created in {currentYear}.
      </p>
    </footer>
  );
};

export default Footer;