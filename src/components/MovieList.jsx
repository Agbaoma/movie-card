import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#222",
              padding: "1rem",
              borderRadius: "8px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={movie.posterURL}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "0.5rem" }}>{movie.title}</h3>
            <p>Rating: {movie.rating.toFixed(1)} / 5</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;

// import React from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ movies }) => {
//   if (!movies || movies.length === 0) {
//     return <p style={{ color: "white" }}>No movies found.</p>;
//   }

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
//         gap: "1rem",
//       }}
//     >
//       {movies.map((movie, index) => (
//         <MovieCard key={index} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;
