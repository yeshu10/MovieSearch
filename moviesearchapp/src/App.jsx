import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Guardians");

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const fetchMovies = async (search) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=3f4cee3e`);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching the movies data:", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />
      <main className="flex-grow">
        <h1 className="text-center text-2xl font-bold my-8">Movie Information</h1>
        <div className="movie-list grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  xl:grid-cols-5 gap-4 px-4">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">No movies found</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
