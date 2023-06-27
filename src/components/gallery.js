import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Gallery() {
  return (
    <div>
      <h1>Galeria</h1>
      <Button component={Link} to="/add-gallery" variant="contained" color="primary">
        Dodaj galerie 
      </Button>
    </div>
  );
}

export default Gallery;