import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const AddToFavourites = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const addToFavourites = () => {
    try {
      let favourites = localStorage.getItem("favourites");
      favourites = favourites ? JSON.parse(favourites) : [];
      const isMovieAlreadyFavourite = favourites.some(
        (favMovie) => favMovie.id === movie.id
      );
      if (!isMovieAlreadyFavourite) {
        favourites.push(movie);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        setModalContent("Movie added to favourites!");
        setIsModalOpen(true);
      } else {
        setModalContent("This movie is already in your favourites!");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Failed to add to favourites:", error);
    }
  };

  return (
    <>
      <button
        onClick={addToFavourites}
        className="hover:bg-black-700 text-red font-bold py-1 px-1 rounded"
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="text-emerald-500 "
          size="2x"
        />
      </button>
      {isModalOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {modalContent}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToFavourites;
