import React, { useState, useEffect } from "react";

const CommentSection = ({ movieId }) => {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(`comments_${movieId}`);
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);

  useEffect(() => {
    localStorage.setItem(`comments_${movieId}`, JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (editCommentId) {
      setComments(
        comments.map((comment) =>
          comment.id === editCommentId
            ? { ...comment, text: newComment }
            : comment
        )
      );
      setEditCommentId(null);
    } else {
      setComments([...comments, { id: Date.now(), text: newComment }]);
    }
    setNewComment(""); // Clear the textarea after adding/editing
  };

  const handleUpdateComment = (id, text) => {
    setEditCommentId(id);
    setNewComment(text);
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <>
      <div className="flex  items-center justify-center shadow-md mt-6 max-w-6xl  mb-4 w-full">
        <form
          onSubmit={handleAddComment}
          className="w-full  bg-white rounded-lg px-4 pt-2 dark:bg-inherit"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Dodaj novi komentar
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal dark:bg-custom-gray dark:placeholder:text-white resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Vpiši komentar..."
                value={newComment} // Bind value to state
                onChange={(e) => setNewComment(e.target.value)} // Handle change
                required
              ></textarea>
            </div>
            <div className="flex items-center flex-grow ">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <svg
                  fill="none"
                  className="w-5 h-5 dark:text-white mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs md:text-sm pt-px dark:text-white"></p>
              </div>
              <div className="w-full md:w-full flex items-start px-3">
                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
                <div className="-mr-1">
                  <input
                    type="submit"
                    className="cursor-pointer text-white font-medium py-1 px-4 border bg-blue-500  border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100 hover:text-black"
                    value="Objavi komentar"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <section className="relative flex items-center justify-start mb-6  antialiased min-full  ">
        <div className="container  ">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex-col py-4 mx-auto mt-3 bg-white border-b-2   border-gray-200 sm:px-4 sm:py-4 md:px-4  sm:shadow-sm dark:bg-inherit "
            >
              <div className="flex flex-row ">
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommentSection;
