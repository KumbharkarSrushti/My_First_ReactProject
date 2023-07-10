const MovieCard =({movie, onVoteUp, onVoteDown,onDelete }) =>{
  
  return (
    <div className="Movie_Row_Movie">
       <div className="Image_Col">
        <img className="img1" src="image 1.png" alt="vector" height="100%" width="100%" />
      </div>
      
      <div className="Movie_data">
          <h1 className="white">{movie.title}</h1>
          <p className="white">{movie.year}<span> | {movie.genre}</span></p>
          <p className="white">{movie.Description}</p>
      </div>
      <div className="handlevote">
            <img className="likevoteButton" src="Icon - Like.svg" alt="vector" height="50px" width="50px" onClick={() => onVoteUp(movie.id)} />
            <span className="dot">{movie.votes || 0}</span>
            <img className="dislikevoteButton" src="dislikeIcon.svg" alt="vector" height="50px" width="50px" onClick={() => onVoteDown(movie.id)} />
            <img className="DeleteButton" src="Vector.svg"  alt="vector" onClick={() => onDelete(movie.id)}/>
      </div>
      
    </div>
  );
};

export default MovieCard;

