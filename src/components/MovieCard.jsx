import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-poster" />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>
      </div>

      {/* Scoped styles */}
      <style>{`
        .movie-card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.7);
          transition: transform 0.3s;
          background-color: #222;
        }

        .movie-poster {
          width: 100%;
          height: auto;
          aspect-ratio: 2 / 3;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }

        .movie-info {
          position: absolute;
          bottom: 0;
          width: 100%;
          color: white;
          background: linear-gradient(0deg, rgba(0,0,0,0.85), transparent);
          padding: 10px;
          box-sizing: border-box;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .movie-card:hover {
          transform: scale(1.05);
          z-index: 10;
        }

        .movie-card:hover .movie-poster {
          transform: scale(1.1);
        }

        .movie-card:hover .movie-info {
          opacity: 1;
          pointer-events: auto;
        }

        .movie-info h3 {
          margin: 0;
        }

        .movie-info p {
          margin: 0.2rem 0;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default MovieCard;
