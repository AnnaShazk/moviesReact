import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PublicMoviesDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ad1b3e747cf8ca49a4467491cb39f4e7&language=en-US`
        );
        const movie = response.data;

        const responseCredits = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ad1b3e747cf8ca49a4467491cb39f4e7`
        );
        const director = responseCredits.data.crew.find(
          (member) => member.job === "Director"
        );
        const cast = responseCredits.data.cast.slice(0, 5);

        setSelectedMovie({ ...movie, director, cast });
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="bg-gray-800 text-white p-8 "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex">
          {selectedMovie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="rounded-lg shadow-lg w-1/4"
            />
          )}

          <div className="flex flex-col  justify-center gap-4 ml-4">
            <h1 className="text-4xl font-bold">
              {selectedMovie.title} (
              {selectedMovie.release_date
                ? new Date(selectedMovie.release_date).getFullYear()
                : "N/A"}
              )
            </h1>
            <p>
              Rating: {selectedMovie.vote_average} {selectedMovie.release_date}{" "}
              ({selectedMovie.original_language.toUpperCase()}){" "}
              {selectedMovie.genres.map((genre) => genre.name).join(", ")}{" "}
              {selectedMovie.runtime}m
            </p>
            <p className="mt-4">{selectedMovie.overview}</p>
            <p className="mt-4">
              <strong>Director:</strong> {selectedMovie.director?.name}
            </p>
            {/* Additional movie details */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col justify-center">
        <h2 className="text-2xl font-semibold ml-4 mt-4">Top Cast</h2>
        <div className="flex flex-wrap">
          {selectedMovie.cast?.map((actor) => (
            <div
              key={actor.cast_id}
              className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative pb-64 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-fill"
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                  />
                </div>
                <div className="p-4 flex flex-col dark:bg-gray-900 dark:text-white h-[120px]">
                  <h2 className="font-bold text-md mb-2">{actor.name}</h2>
                  <p className="text-gray-700 mt-auto  dark:text-white">
                    {actor.character}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-t border-2 max-w-5xl ml-4 border-gray-500 mt-4" />
        <h2 className="text-2xl font-semibold mt-4 ml-4">Discussion</h2>
      </div>
    </div>
  );
};

export default PublicMoviesDetails;
