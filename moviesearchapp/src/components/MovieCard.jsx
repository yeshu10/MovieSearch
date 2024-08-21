import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm w-64 h-96">
      {/* Poster Section */}
      <div className="w-full h-3/4">
        <img
          className="w-full h-full object-cover"
          src={movie.Poster}
          alt={movie.Title}
        />
      </div>
      
      {/* Movie Details Section */}
      <div className="p-4 h-1/4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{movie.Title}</h2>
        <p className="text-gray-600">Year: {movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
