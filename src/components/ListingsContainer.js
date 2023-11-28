import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ things, onThingDelete }) {
  return (
    <main>
      <ul className="cards">
        {things.map(thing => (
          <ListingCard
            key={things.id}
            thing={thing}
            onThingDelete={onThingDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
