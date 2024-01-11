import React, { useState } from "react";

const Pagination = ({ activeIndex, setActiveIndex }) => {
/* s */
  const totalPages = 3;
  return (
    <div>
      <div id="app-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`button-pagination ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
