import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ fetchMoviesData }) => {
  const [dropdown, setDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const matches = fetchMoviesData.filter((movie) =>
      movie.title?.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setDropdown(matches.length > 0);
    if (event.target.value === "") {
      setDropdown(false);
    }
  };

  return (
    <div className="">
      <div className="inline-flex flex-col justify-center relative text-gray-500">
        <div className="relative">
          <input
            type="text"
            className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
            placeholder="search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <svg
            className="w-4 h-4 absolute left-2.5 top-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {dropdown && (
          <ul className="bg-white border border-gray-100 w-full mt-2 absolute top-8">
            {fetchMoviesData
              .filter((movie) => {
                return movie.title
                  ?.toLowerCase()
                  .includes(searchTerm.toLowerCase());
              })
              .map((movie) => (
                <Link to={`/movies/${movie.id}`}>
                  <li
                    className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
                    key={movie.id}
                  >
                    <svg
                      className="absolute w-4 h-4 left-2 top-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <b>{movie.title}</b>
                  </li>
                </Link>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
