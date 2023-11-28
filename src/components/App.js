import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [things, setThings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(setThings);
  }, []);

  function handleDeleteThing(id) {
    setThings(things.filter(thing => thing.id !== id));
  }

  const displayThingName = things.filter(thing =>
    thing.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="app">
      <Header onSearchChange={setSearch} />
      <ListingsContainer
        onThingDelete={handleDeleteThing}
        things={displayThingName}
      />
    </div>
  );
}

export default App;
