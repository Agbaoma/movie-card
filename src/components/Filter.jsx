import React from "react";

const Filter = ({
  titleFilter,
  ratingFilter,
  onTitleChange,
  onRatingChange,
}) => {
  return (
    <div
      style={{
        marginBottom: "1rem",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <input
        placeholder="Search by title..."
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
        style={{
          flex: "1 1 200px",
          padding: "0.5rem",
          borderRadius: "4px",
          border: "none",
        }}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Min rating"
        value={ratingFilter}
        onChange={(e) => onRatingChange(Number(e.target.value))}
        style={{
          width: "100px",
          padding: "0.5rem",
          borderRadius: "4px",
          border: "none",
        }}
      />
    </div>
  );
};

export default Filter;
