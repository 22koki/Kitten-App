import React, { useState } from 'react';
import Header from './Header';
import KittenList from './KittenList';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchKittenImage = () => {
    fetch('https://placekitten.com/200/300')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.url;
      })
      .then((url) => setImageUrl(url))
      .catch((error) => console.error('Error fetching kitten image:', error));
  };

  return (
    <div className="app">
      <Header />
      <button onClick={fetchKittenImage}>Show me a Kitty</button>
      <KittenList imageUrl={imageUrl} />
    </div>
  );
};

export default App;
