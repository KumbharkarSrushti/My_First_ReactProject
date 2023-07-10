"use client"
import React, { useState } from 'react';
import { movies } from './action.js';

const AddMovie = ({ movies }) => {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    Description: '',
    genre: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddMovie = (e) => {
    e.preventDefault();

    const newMovie = {
      id: movies.length,
      title: formData.title,
      year: formData.year,
      Description: formData.Description,
      genre: formData.genre,
    };

    setMovies([...movies, newMovie]);
    setFormData({
      title: '',
      year: '',
      Description: '',
      genre: '',
    });
  };

  return (
    <div className="footer-con">
    <h1 className="H-form">Fill this form to add Movie</h1>
      <form onSubmit={handleAddMovie}>
        <label className="s">
          Name of  Movie:
          <br />
          <input className="c"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="s">
          Year of Release:
          <br />
          <input className="c"
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="s">
          Description:
          <br />
          <textarea className="t-area"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="text">
          Movie Genre:
          <br />
          <input className="g"
            type="checkbox"
            name="genre"
            value="Drama"
            checked={formData.genre.includes('Drama')}
            onChange={handleChange}
          />{' '}
          Drama
          <br /> 
          <input className="g"
            type="checkbox"
            name="genre"
            value="Romance"
            checked={formData.genre.includes('Romance')}
            onChange={handleChange}
          />{' '}
          Romance
          <br />
          <input className="g"
            type="checkbox"
            name="genre"
            value="Comedy"
            checked={formData.genre.includes('Comedy')}
            onChange={handleChange}
          />{' '}
          Comedy
          <br />
          <input className="g"
            type="checkbox"
            name="genre"
            value="Biography"
            checked={formData.genre.includes('Drama')}
            onChange={handleChange}
          />{' '}
          Biography
          <br />
          <input className="g"
            type="checkbox"
            name="genre"
            value="Adventure"
            checked={formData.genre.includes('Drama')}
            onChange={handleChange}
          />{' '}
          Adventure
          <br />
          <input className="g"
            type="checkbox"
            name="genre"
            value="Family"
            checked={formData.genre.includes('Drama')}
            onChange={handleChange}
          />{' '}
          Family
          <br />
          <input className="g"
            type="checkbox"
            name="genre"
            value="Documentary"
            checked={formData.genre.includes('Drama')}
            onChange={handleChange}
          />{' '}
          Documentary
          <br />
        </label>
        <br />
        <button className="sumbitcolor" type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;

