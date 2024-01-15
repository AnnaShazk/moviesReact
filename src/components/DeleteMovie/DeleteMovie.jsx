import axios from 'axios';

const DeleteMovie = ({ id, setMovieDetails }) => {
  const deleteMovie = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_URL}/api/movies/${id}`);
      setMovieDetails(prevMovies => prevMovies.filter(movie => movie.id !== id));
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  return (
    
    <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded" onClick={deleteMovie}>Delete Movie</button>
  );
};

export default DeleteMovie;