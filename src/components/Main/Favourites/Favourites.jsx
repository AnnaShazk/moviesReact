import React, { useState } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (movie) => {
    setFavourites([...favourites, movie]);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Favourites</h1>
      <button 
        onClick={() => addFavourite("Example Movie")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Favourites
      </button>
      <ul className="mt-4 space-y-2">
        {favourites.map((movie, index) => (
          <li key={index} className="p-2 bg-white rounded shadow">{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;