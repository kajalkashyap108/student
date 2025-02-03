import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from API or use static data
    const sampleData = [
      {
        id: 1,
        title: "Inception",
        poster: "https://placehold.co/150",
        releaseDate: "2010-07-16",
        genre: "Sci-Fi",
        description: "A mind-bending thriller by Christopher Nolan.",
      },
      // Add more movies
    ];
    setMovies(sampleData);
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <Link to={`/movies/${movie.id}`}>View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;