import React from 'react';

const KittenList = ({ imageUrl }) => {
  return (
    <div className="kitten-list">
      <img src={imageUrl} alt="Kitten" />
    </div>
  );
};

export default KittenList;
