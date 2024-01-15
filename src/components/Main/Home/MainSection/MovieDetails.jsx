import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentSection from "../../../Comments/CommentSection";import DeleteMovie from "../../../DeleteMovie/DeleteMovie";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(movie);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/movies/${id}`
      );
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col max-w-3xl items-center justify-center mx-auto">
        <div className="max-w-md mx-auto dark:bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
              className="h-48 w-full object-contain lg:h-96"
                src={movie.poster}
                alt={movie.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {movie.title}
              </div>
              <p className="mt-2 text-gray-500">{movie.movie_details}</p>
              <p className="mt-2 text-gray-500">Director: {movie.director}</p>
              <p className="mt-2 text-gray-500">Rating: {movie.rating}</p>
              <p className="mt-2 mb-6 text-gray-500">Year: {movie.year}</p>
              <DeleteMovie id={movie.id} setMovieDetails={setMovieDetails} />
        </div>
          </div>
        </div>
        <CommentSection />
      </div>
    </>
  );
};

export default MovieDetails;
