import React, { useState } from "react";

function ListingCard({ thing, onThingDelete }) {
  const { description, image, location, id } = thing;
  const [star, setStar] = useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onThingDelete(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {star ? (
          <button
            className="emoji-button favorite active"
            onClick={() => setStar(false)}>
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={() => setStar(true)}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
