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

function AddNews() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [img, setImg] = useState(null); 
  const [tekst, setTekst] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleImgChange = (event) => {
    setImg(event.target.files[0]);
  };

  const handleTekstChange = (event) => {
    setTekst(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('link', link);
    formData.append('img', img);
    formData.append('tekst', tekst);

    api
      .post('add-news', formData)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        // Reset form fields
        setName('');
        setLink('');
        setImg(null);
        setTekst('');
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Dodaj aktualności</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          variant="outlined"
        />
        <TextField
          label="Link"
          value={link}
          onChange={handleLinkChange}
          variant="outlined"
        />
        <input type="file" onChange={handleImgChange} />
        <TextField
          label="Tekst"
          value={tekst}
          onChange={handleTekstChange}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Dodaj
        </Button>
      </form>
    </div>
  );
}

export default AddNews;