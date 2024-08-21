import React from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="text-center text-2xl font-bold mb-8">Movie Information</h1>
      <MovieCard />
    </div>
  );
};

export default App;
