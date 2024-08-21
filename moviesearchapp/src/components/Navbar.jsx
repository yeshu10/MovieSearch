import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MovieApp</h1>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-l-md border-2 border-transparent focus:border-indigo-400 outline-none"
            placeholder="Search movies..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-700 text-white rounded-r-md hover:bg-indigo-800"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
