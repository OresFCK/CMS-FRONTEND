import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    maxWidth: '300px',
    margin: '0 auto',
  },
}));

function AddGallery() {
  const classes = useStyles();
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const galleryData = {
      name: name,
    };
  
    try {
      const response = await axios.post('https://127.0.0.1:8000/api/gallery/add', galleryData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }

   
  };

  return (
    <div>
      <h1>Dodaj galerie</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Dodaj
        </Button>
      </form>
    </div>
  );
}

export default AddGallery;