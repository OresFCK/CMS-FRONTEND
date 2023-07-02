import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Gallery() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    fetchGalleries();
  }, []);

  const fetchGalleries = async () => {
    try {
      const response = await fetch('https://127.0.0.1:8000/api/news');
      const data = await response.json();
      setGalleries(data);
    } catch (error) {
      console.error('Error fetching galleries:', error);
    }
  };

  return (
    <div>
      <h1>Galeria</h1>
      <h2>Istniejiące galerie:</h2>
      <ul>
        {galleries.map(gallery => (
          <li key={gallery.id}>{gallery.name}</li>
        ))}
      </ul>

      <Button component={Link} to="/add-gallery" variant="contained" color="primary">
        Dodaj galerie
      </Button>
    </div>
  );
}

export default Gallery;