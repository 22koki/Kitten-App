// App.js
import React, { useState } from 'react';
import Header from '/home/fay/Kitten-App/kitty-app/src/components/Header.js';
import KittenList from '/home/fay/Kitten-App/kitty-app/src/components/KittenList.js';
import Footer from '/home/fay/Kitten-App/kitty-app/src/components/Footer.js';
import '/home/fay/Kitten-App/kitty-app/src/App.css'; // Import your CSS file

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  const fetchKittenImage = () => {
    const generateUniqueUrl = () => {
      const width = Math.floor(Math.random() * 400) + 200;
      const height = Math.floor(Math.random() * 400) + 200;
      return `https://placekitten.com/${width}/${height}`;
    };

    let newUrl;

    do {
      newUrl = generateUniqueUrl();
    } while (imageUrls.includes(newUrl));

    setImageUrls((prevImageUrls) => [...prevImageUrls, newUrl]);
  };

  return (
    <div className="container">
      <Header />
      <KittenList imageUrls={imageUrls} />
      <Footer onFetchKittenImage={fetchKittenImage} />
    </div>
  );
}

export default App;
