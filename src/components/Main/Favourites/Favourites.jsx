import React from 'react';

const Favourites = ({ favourites, deleteFavourite, toggleModal, showModal }) => {
  return (
    <div>
      <button
        onClick={toggleModal}
        className=" text-white rounded"
      >
        Favourites
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow p-6 m-4 max-w-xs max-h-full text-center overflow-auto">
            <h1 className="text-2xl font-bold mb-4">Favourites</h1>
            <ul className="mb-4">
              {favourites.map((movie, index) => (
                <li key={index} className="border-b border-gray-400 py-2 flex justify-between items-center">
                  <span>{movie.title}</span>
                  <button onClick={() => deleteFavourite(movie)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={toggleModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourites;