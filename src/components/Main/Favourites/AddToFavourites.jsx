import React from "react";

const AddToFavourites = ({ movie }) => {
  const addToFavourites = (movie) => {
    let favourites = localStorage.getItem("favourites");
    favourites = favourites ? JSON.parse(favourites) : [];
    favourites.push(movie);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  return (
    <button
      id={`add-to-favourites-${movie._id}`}
      onClick={() => addToFavourites(movie)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add to Favourites
    </button>
  );
};

export default AddToFavourites;
