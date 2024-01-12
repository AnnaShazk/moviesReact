import React, { useState, useEffect } from "react";

const ShowFavourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = () => {
      let favourites = localStorage.getItem("favourites");
      favourites = favourites ? JSON.parse(favourites) : [];
      setFavourites(favourites);
    };

    fetchFavourites();
  }, []);

  return (
    <div>
      {favourites.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowFavourites;
