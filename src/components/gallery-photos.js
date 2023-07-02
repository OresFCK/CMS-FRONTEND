import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GalleryPhotos() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`https://127.0.0.1:8000/api/gallery/${id}/photos`);
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div>
      <h1>Photos for Gallery ID: {id}</h1>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={`https://127.0.0.1:8000/uploads/photos/${photo.img}`} alt={photo.name} />
          <p>{photo.name}</p>
        </div>
      ))}
    </div>
  );
}

export default GalleryPhotos;