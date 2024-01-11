import React, { useState, useEffect } from "react";

const SearchBar = ({ fetchMoviesData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (Array.isArray(fetchMoviesData)) {
      setFilteredMovies(
        fetchMoviesData.filter((movie) => {
          return (
            movie.name &&
            movie.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
    }
  }, [fetchMoviesData, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(fetchMoviesData);


  console.log(filteredMovies);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="rounded-3xl p-1"
    />
  );
};

export default SearchBar;
