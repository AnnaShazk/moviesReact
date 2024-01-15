import React, { useState, useEffect } from "react";
import defaultProfileAvatarWhite from "../../assets/icons8-male-user-64-white.png";
import defaultProfileAvatar from "../../assets/icons8-male-user-64.png";
import { Button } from "flowbite-react";

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
    setNewComment("");
  };

  const handleUpdateComment = (id, text) => {
    setEditCommentId(id);
    setNewComment(text);
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  const handleEdit = (id) => {
    const comment = comments.find((comment) => comment.id === id);
    setNewComment(comment.text);
    setEditCommentId(id);
  };

  const handleDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem(
      `comments_${countryName}`,
      JSON.stringify(updatedComments)
    );
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
              Add a comment
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal dark:bg-custom-gray dark:placeholder:text-white resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type something you potato"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
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
                    value="Post"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <section className="relative flex items-center justify-start mb-6  antialiased min-full  ">
        <div className=" w-full">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex-col py-4 mx-auto mt-3 bg-white border-b-2   border-gray-200 sm:px-4 sm:py-4 md:px-4  sm:shadow-sm dark:bg-inherit "
            >
              <div className="flex flex-row ">
                <img
                  className="object-cover w-12 h-12  border-gray-300 dark:hidden"
                  alt="Noob master's avatar"
                  src={defaultProfileAvatar}
                />
                <img
                  className="object-cover w-12 h-12  border-gray-300 rounded-none hidden dark:block"
                  alt="Noob master's avatar"
                  src={defaultProfileAvatarWhite}
                />
                <div className="flex-col mt-1 ">
                  <div className="flex flex-col gap-2  flex-1 px-4 font-bold leading-tight">
                    Anonymous
                    <span className=" text-xs flex  font-normal text-gray-500 dark:text-white">
                      3 days ago
                    </span>
                  </div>
                  <div className="flex-1 mt-2 px-2 ml-2 text-sm font-medium leading-loose text-gray-600  dark:text-white">
                    {comment.text}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="rounded-2xl h-7 bg-blue-500 backdrop-filter backdrop-blur-md text-white border border-white border-opacity-20 mt-2"
                      >
                        Delete comment
                      </Button>
                      <Button
                        onClick={() => handleEdit(comment.id)}
                        className="rounded-2xl h-7 bg-blue-500  backdrop-filter backdrop-blur-md text-white border border-white border-opacity-20 mt-2"
                      >
                        Edit comment
                      </Button>
                    </div>
                  </div>
                  <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                    <svg
                      className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900 dark:text-white"
                      viewBox="0 0 95 78"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                  <button className="inline-flex items-center px-1 -ml-1 flex-column">
                    <svg
                      className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommentSection;
