import React from 'react';

const AddToFavourites = ({ addToFavourites, movie }) => {
  return (
    <button 
      onClick={() => addToFavourites(movie)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add to Favourites
    </button>
  );
};

export default AddToFavourites;