import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from '../api';

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const galleryData = {
      name: name,
    };

    api
      .post('add-gallery', galleryData)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        // Reset form fields
        setName('');
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
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