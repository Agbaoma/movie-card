import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/Addmovie";

const API_KEY = "cd2549bf5c241676add4b72120436edd"; // <-- Put your TMDb API key here

const App = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  // Fetch movies from TMDb API when titleFilter changes
  useEffect(() => {
    if (!titleFilter.trim()) {
      setMovies([]);
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        titleFilter
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          // Map TMDb response to our movie format
          const mappedMovies = data.results.map((movie) => ({
            title: movie.title,
            description: movie.overview || "No description available",
            posterURL: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image",
            rating: movie.vote_average / 2, // TMDb rating is out of 10, convert to 5 scale
          }));
          setMovies(mappedMovies);
        } else {
          setMovies([]);
        }
      })
      .catch(() => setMovies([]));
  }, [titleFilter]);

  // Add new movie manually
  const handleAddMovie = (movie) => {
    setMovies((prev) => [movie, ...prev]);
  };

  // Filter movies by rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
        padding: "2rem",
        color: "white",
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Movie App</h1>
      <AddMovie onAdd={handleAddMovie} />
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
