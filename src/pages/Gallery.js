import React, { useState, useEffect } from 'react';
import { getImagesFromFolder } from './../googleDrive';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const folderId = 'YOUR_FOLDER_ID';
      const imageFiles = await getImagesFromFolder(folderId);
      setImages(imageFiles);
    }

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="image-container">
          <img src={image.webViewLink} alt={image.name} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
