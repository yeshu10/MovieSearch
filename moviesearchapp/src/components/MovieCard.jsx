import React, { useState, useEffect } from "react";

const MovieCard = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3f4cee3e");
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };

  if (!movie) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {movie.Title}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">
            Year: {movie.Year}
          </p>
          <p className="mt-2 text-gray-500">Genre: {movie.Genre}</p>
          <p className="mt-2 text-gray-500">Plot: {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
