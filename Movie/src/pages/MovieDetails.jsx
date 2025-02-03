import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details by ID
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
    const selectedMovie = sampleData.find((m) => m.id === parseInt(id));
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Genre: {movie.genre}</p>
      <Link to="/movies">Back to Movies</Link>
    </div>
  );
};

export default MovieDetails;