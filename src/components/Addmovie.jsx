import React, { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim() || !posterURL.trim()) return;

    onAdd({
      title: title.trim(),
      description: description.trim(),
      posterURL: posterURL.trim(),
      rating: Number(rating),
    });

    // Clear form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(3);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "1rem",
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
      }}
    >
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          flex: "1 1 150px",
          padding: "0.5rem",
          borderRadius: "4px",
          border: "none",
        }}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          flex: "2 1 250px",
          padding: "0.5rem",
          borderRadius: "4px",
          border: "none",
        }}
      />
      <input
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
        style={{
          flex: "2 1 250px",
          padding: "0.5rem",
          borderRadius: "4px",
          border: "none",
        }}
      />
      <input
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{
          width: "80px",
          padding: "0.5rem",
          borderRadius: "4px",
          border: "none",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#e50914",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0 1rem",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
