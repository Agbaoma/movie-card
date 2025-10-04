import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the movie by ID
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          backgroundColor: "#444",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        ← Back to Home
      </button>

      <h2>{movie.title}</h2>
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ maxWidth: "300px", borderRadius: "8px" }}
      />
      <p style={{ marginTop: "1rem" }}>{movie.description}</p>

      {movie.trailerURL ? (
        <div style={{ marginTop: "2rem" }}>
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={movie.trailerURL}
            title={`${movie.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>No trailer available.</p>
      )}
    </div>
  );
};

export default MovieDetail;
