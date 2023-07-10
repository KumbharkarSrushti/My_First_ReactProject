"use client"
import MovieCard from './Fetch_Movie.js';
import React, { useState } from 'react';


const MovieList = () => {
  const [movies, setMovies] = useState([
    {
    id: 0,
    title: 'Dear Zindagi',
    year: '2016',
    Description: "Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections",
    genre: 'Drama Romance'
  },
  {
    id: 1,
    title: 'Brave',
    year: '2016',
    Description: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse",
    genre: 'Adventurous, Comedy '
  },
  {
    id: 2,
    title: 'Moana',
    year: '2016',
    Description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    genre: 'Drama Romance'
  },
  {
    id: 3,
    title: 'Mulan',
    year: '2016',
    Description: "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process.",
    genre: 'Drama Romance'
  },
  {
    id: 4,
    title: 'He Named Me Malala',
    year: '2016',
    Description: "Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker",
    genre: 'Drama Romance'
  },
  {
    id: 5,
    title: 'Soul Surfer',
    year: '2016',
    Description: "Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack",
    genre: 'Drama Romance'
  },
  {
    id: 6,
    title: 'Bend It Like Beckham',
    year: '2016',
    Description: "Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football.",
    genre: 'Drama Romance'
  },
  {
    id: 7,
    title: 'Into The Wild',
    year: '2016',
    Description: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
    genre: 'Drama Romance'
  },
  {
    id: 8,
    title: 'The Pursuit Of Happyness',
    year: '2016',
    Description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    genre: 'Drama Romance'
  },
  {
    id: 9,
    title: 'The Intouchables',
    year: '2016',
    Description: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver",
    genre: 'Drama Romance'
  }
  ]);

  const handleVoteUp = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, votes: (movie.votes || 0) + 1 };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

const handleVoteDown = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        const votes = movie.votes || 0;
        return { ...movie, votes: votes - 1 };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };
  
  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };


  const sortedData = movies.sort((handleVoteUp, handleVoteDown) => handleVoteDown.votes - handleVoteUp.votes);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onVoteUp={handleVoteUp}
          onVoteDown={handleVoteDown}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default MovieList;








