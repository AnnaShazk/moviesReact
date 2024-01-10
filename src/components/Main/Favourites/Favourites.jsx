import React, { useEffect, useState } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Show Favourites</button>
      {isModalOpen && (
        <div className="modal bg-red-500">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            {favourites.map((movie) => (
              <div key={movie._id}>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <img src={movie.posterUrl} alt={movie.title} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourites;
