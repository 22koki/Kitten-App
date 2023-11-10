// Footer.js
import React from 'react';

const Footer = ({ fetchKittenImage }) => {
  return (
    <footer>
      <button onClick={fetchKittenImage}>Get Kitty</button>
    </footer>
  );
};

export default Footer;
