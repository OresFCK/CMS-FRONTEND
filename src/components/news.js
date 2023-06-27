import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function News() {
    return (
      <div>
        <h1>Aktualności</h1>
        <Button component={Link} to="/add-news" variant="contained" color="primary">
          Dodaj aktualności
        </Button>
      </div>
    );
  }
  
  export default News;
  