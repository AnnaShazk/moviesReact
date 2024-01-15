import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const MovieDetails = () => {
  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={farStar} />);
      }
    }
    return <div>{stars}</div>;
  };

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/movies/${id}`
      );
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);
  console.log(movie);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="xl:bg-main bg-dry flex-col xl:flex-row xl:bg-opacity-90 top-0 left-0 right-0 bottom-0">
      <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-col xl:flex-row py-10 lg:py-20 gap-8">
        <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={movie.poster}
            alt={movie.title}
          />
        </div>
        <div className="col-span-2 md:grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="col-span-3 flex flex-col gap-10">
            <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
              {movie.title}
            </h1>
          </div>
          <div className="flex items-center gap-4 font-medium text-dryGray">
            <div className="flex-col bg-subMain text-xs px-2 py-1">
              HD 4K
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{movie.genre}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{movie.director}</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="text-sm font-medium">{movie.year}</span>
            </div>
          </div>
          <p className="text-text text-sm leading-7">{movie.movie_details}</p>
          <div>{movie.rating}/10</div>
          <div>
            <StarRating rating={movie.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
