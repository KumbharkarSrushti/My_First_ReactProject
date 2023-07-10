import App from "./App.js"
import MovieList from "./action.js"
import Footer from "./Footer.js"
import AddMovieButton from "./addMovie.js"

const Main_App = () => {
  return (
    <>
        <App />
        <MovieList />   
        <AddMovieButton />
        <Footer />
        
     
    </>
    
  );
};

export default Main_App;

