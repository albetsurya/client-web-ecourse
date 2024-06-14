import React from "react";

const SearchInput = () => {
  return (
    <div>
      <form className="w-80 h-9 mx-auto">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 py-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-[#9f82dc] focus:border-[#7F56D9] "
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2 bottom-2 bg-[#7F56D9] hover:bg-[#543990] focus:ring-4 focus:outline-none focus:ring-[#7F56D9] font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
