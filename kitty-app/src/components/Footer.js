// Footer.js
import React from 'react';

const Footer = ({ onFetchKittenImage }) => {
  return (
    <footer>
      <button onClick={onFetchKittenImage}>Get Kitty</button>
    </footer>
  );
};

export default Footer;
