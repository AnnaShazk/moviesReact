import React, { useState, useEffect } from "react";

const ShowFavourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const removeFromFavourites = (id) => {
    const newFavourites = favourites.filter((movie) => movie.id !== id);
    setFavourites(newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  };

  useEffect(() => {
    const fetchFavourites = () => {
      let favourites = localStorage.getItem("favourites");
      favourites = favourites ? JSON.parse(favourites) : [];
      setFavourites(favourites);
    };

    fetchFavourites();
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={openModal}>Show Favourites</button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto  ">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 dark:text-white  text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity "
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
                {favourites.map((movie) => (
                  <div key={movie.id}>
                    <h1 className="text-2xl">{movie.title}</h1>
                    <p>{movie.movie_details}</p>
                    <p>
                      Rating: <span className="text-yellow-500">&#9733;</span>{" "}
                      {movie.rating}
                    </p>
                    <img src={movie.poster} alt={movie.title} />
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => removeFromFavourites(movie.id)}
                    >
                      Remove from Favourites
                    </button>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-800">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border  border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowFavourites;
