// App.js
import React, { useState } from 'react';
import Header from '/home/fay/Kitten-App/kitty-app/src/components/Header.js';
import KittenList from '/home/fay/Kitten-App/kitty-app/src/components/KittenList.js';
import Footer from '/home/fay/Kitten-App/kitty-app/src/components/Footer.js';
import './App.css'; // Import your CSS file

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  const fetchKittenImage = () => {
    const newUrl = `https://placekitten.com/${Math.floor(Math.random() * 400) + 200}/${Math.floor(Math.random() * 400) + 200}`;
    setImageUrls((prevImageUrls) => [...prevImageUrls, newUrl]);
  };

  return (
    <div className="container">
      <Header />
      <KittenList imageUrls={imageUrls} />
      <Footer fetchKittenImage={fetchKittenImage} />
    </div>
  );
}

export default App;
