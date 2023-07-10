"use client"

import React, { useState } from 'react';
import AddMovie from "./Add_Movie_Form.js"
const AddMovieButton = () => {
const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  return (
 <div className="footer-content">
        <h1 className="footer-header">Add A New Movie</h1>
        <p className="footer-para" >To add a movie you have to fill a form.The added movie will appear in the list above</p>
         <img className="addMovie" src="addMovie.svg" onClick={handleOpenForm}/>
               {showForm && <AddMovie />}

      </div>
      );
};
export default AddMovieButton;

