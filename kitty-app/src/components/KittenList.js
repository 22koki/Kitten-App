import React, { useState, useEffect } from 'react';

const KittenList = () => {
  const [kittenImages, setKittenImages] = useState([]);

  useEffect(() => {
    const fetchKittenImages = async () => {
      try {
        const response = await fetch('https://placekitten.com/200/300', {
          method: 'GET',
          headers: {
            // Add any headers if needed
          },
          // You can add other options like body, mode, etc.
        });

        if (!response.ok) {
          throw new Error('Failed to fetch kitten images');
        }

        const data = await response.blob(); // Assuming the response is an image, use blob()
        setKittenImages(URL.createObjectURL(data));
      } catch (error) {
        console.error('Error fetching kitten images:', error.message);
      }
    };

    fetchKittenImages();
  }, []); // Empty dependency array to fetch data once when the component mounts

  return (
    <div>
      <h2>Cute Kitten Images</h2>
      <img src={kittenImages} alt="Kitten" />
    </div>
  );
};

export default KittenList;
