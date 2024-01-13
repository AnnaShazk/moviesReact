import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion } from "flowbite-react";

const PublicMovies = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const genres = ["Comedy", "Drama", "Action", "Adventure", "Thriller"];

  const handleSort = (sortType) => {
    let sortedMovies = [...filteredMovies];
    switch (sortType) {
      case "title-asc":
        sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "date-asc":
        sortedMovies.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
        break;
      case "date-desc":
        sortedMovies.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
      default:
        break;
    }
    setFilteredMovies(sortedMovies);
  };
  function handleFilter(genre) {
    if (filters.includes(genre)) {
      setFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== genre)
      );
    } else {
      setFilters((prevFilters) => [...prevFilters, genre]);
    }
  }
  useEffect(() => {
    if (filters.length > 0) {
      const filteredMovies = movies.filter((movie) =>
        movie.genres.some((genre) => filters.includes(genre.name))
      );
      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies(movies);
    }
  }, [filters, movies]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genreResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=ad1b3e747cf8ca49a4467491cb39f4e7&language=en-US`
        );
        const genres = genreResponse.data.genres;

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=ad1b3e747cf8ca49a4467491cb39f4e7&language=en-US&page=1`
        );
        const movies = response.data.results.slice(0, 30);

        const moviesWithDetails = await Promise.all(
          movies.map(async (movie) => {
            const responseCredits = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=ad1b3e747cf8ca49a4467491cb39f4e7`
            );
            const responseImages = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=ad1b3e747cf8ca49a4467491cb39f4e7`
            );
            const director = responseCredits.data.crew.find(
              (member) => member.job === "Director"
            );
            const cast = responseCredits.data.cast.slice(0, 5);
            const images = responseImages.data.backdrops.slice(0, 5);
            const movieGenres = movie.genre_ids.map((id) =>
              genres.find((genre) => genre.id === id)
            );
            return { ...movie, director, cast, images, genres: movieGenres };
          })
        );
        setMovies(moviesWithDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex xxs:flex-col-reverse md:flex-row-reverse max-w-7xl justify-items-center gap-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxxl:grid-cols-4  gap-4">
          {" "}
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className=" bg-white shadow-lg rounded-lg overflow-hidden w-full"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="p-4  flex flex-col dark:bg-gray-900 dark:text-white">
                <h2 className="font-bold text-md mb-2">
                  {movie.title} ({new Date(movie.release_date).getFullYear()})
                </h2>
                <p className="text-gray-700 mt-auto dark:text-white">
                  Director: {movie.director?.name}
                </p>
                <p className="text-gray-700">Cast:</p>
                <ul>
                  {movie.cast?.slice(0, 3).map((actor) => (
                    <li
                      key={actor.cast_id}
                      className="flex items-center space-x-2 my-1"
                    >
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={actor.name}
                      />
                      <span>{actor.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 max-w-sm   mt-4">
          <Accordion className="w-full sm:w-64 shadow-lg">
            <Accordion.Panel>
              <Accordion.Title className="text-black font-bold">
                Sort
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Sort Results By
                </p>
                <select
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(e) => handleSort(e.target.value)}
                >
                  <option value="title-asc">Title (A-Z)</option>
                  <option value="title-desc">Title (Z-A)</option>
                  <option value="date-asc">Date (Oldest First)</option>
                  <option value="date-desc">Date (Newest First)</option>
                </select>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
          <Accordion className="w-full sm:w-64  min-w-64 max-w-3xl shadow-lg">
            <Accordion.Panel>
              <Accordion.Title className="text-black font-bold">
                Filters
              </Accordion.Title>
              <Accordion.Content>
                <div>
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      className={`m-2 py-1 px-3 rounded-full ${
                        filters.includes(genre)
                          ? "bg-white  text-gray-500 border border-gray-500"
                          : "bg-blue-500   text-white"
                      }`}
                      onClick={() => handleFilter(genre)}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PublicMovies;
