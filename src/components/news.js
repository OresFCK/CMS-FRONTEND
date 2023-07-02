import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://127.0.0.1:8000/api/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div>
      <h1>Aktualności</h1>
      {news.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={`https://127.0.0.1:8000/uploads/news/${item.img}`} alt={item.name} />
          <p>{item.tekst}</p>
        </div>
      ))}
      <Button component={Link} to="/add-news" variant="contained" color="primary">
        Dodaj aktualności
      </Button>
    </div>
  );
}

export default News;
