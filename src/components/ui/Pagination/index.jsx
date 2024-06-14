"use client";

import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(3);

  const pages = [1, 2, 3, "...", 8, 9, 10];

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-[14px]">
          <li>
            <button
              onClick={() =>
                setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
              }
                          className="flex items-center justify-center gap-2 px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              <ArrowBackIcon className="w-4 h-4" />
              Previous
            </button>
          </li>
          {pages.map((page, index) => (
            <li key={index}>
              <button
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  currentPage === page
                    ? "text-[#7F56D9] border border-gray-300 bg-gray-200 hover:bg-gray-100 hover:text-[#543990] "
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() =>
                setCurrentPage(currentPage < 10 ? currentPage + 1 : 10)
              }
              className="flex items-center justify-center gap-2 px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Next
              <ArrowForwardIcon className="w-4 h-4" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
