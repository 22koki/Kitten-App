// KittenList.js
import React from 'react';

const KittenList = ({ imageUrls }) => {
  return (
    <div className="kitten-list">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Kitten ${index}`} />
      ))}
    </div>
  );
};

export default KittenList;
