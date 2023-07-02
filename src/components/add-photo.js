import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Card, CardMedia, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const AddPhotoForm = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState(null);
  const [galleryId, setGalleryId] = useState(null);
  const [galleries, setGalleries] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImgChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleGalleryChange = (e) => {
    setGalleryId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('img', img);

    axios.post(`https://127.0.0.1:8000/api/photos/${galleryId}`, formData)
      .then((response) => {
        console.log(response.data.message);
        // Handle success, e.g., show a success message or update the photo list
        fetchPhotos(); // Fetch the updated list of photos
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
  };

  const fetchGalleries = () => {
    axios.get('https://127.0.0.1:8000/api/gallery')
      .then((response) => {
        setGalleries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchPhotos = () => {
    axios.get('https://127.0.0.1:8000/api/get_photos')
      .then((response) => {
        setPhotos(response.data.photos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchGalleries();
    fetchPhotos();
  }, []); // Fetch galleries and photos when the component mounts

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={handleNameChange}
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="img"
            type="file"
            onChange={handleImgChange}
            fullWidth
          />
        </div>
        <div>
          <FormControl fullWidth>
            <Select
              labelId="gallery-select-label"
              id="gallery-select"
              value={galleryId}
              onChange={handleGalleryChange}
            >
              {galleries.map((gallery) => (
                <MenuItem key={gallery.id} value={gallery.id}>{gallery.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <StyledButton type="submit" variant="contained">Add Photo</StyledButton>
      </form>
      <Grid container spacing={2} mt={4}>
        {photos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={`https://127.0.0.1:8000/uploads/photos/${photo.img}`}
                alt={photo.name}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AddPhotoForm;