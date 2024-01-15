import React, { useState } from "react";

const AddMovieForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalPostData = {
      title,
      director,
      poster: image,
      movie_details: description,
      year,
      rating,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_URL}/api/movies`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalPostData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      setIsSubmitted(true); 

     
      setTitle("");
      setDirector("");
      setRating("");
      setDescription("");
      setImage("");
      setYear("");
    } catch (error) {
      console.error("Failed to add movie:", error);
    }
  };

  return (
    <div className="z-10">
      <button
        onClick={() => {
          setIsOpen(true);
          setIsSubmitted(false);
        }}
        className="p-2 bg-gradient-to-r from-purple-700 to-black-200 text-white rounded hover:from-black-500 hover:to-purple-600 transition-all duration-200"
      >
        Add Movie
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-5 rounded shadow-md"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="float-right text-black"
            >
              X
            </button>

            {isSubmitted && <p className="text-green-500">Movie Submitted</p>}

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddMovieForm;
