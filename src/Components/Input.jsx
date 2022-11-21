import { useState } from "react";

export default function Search({ searchHandler, qwery }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={qwery}
        onChange={searchHandler}
      />
    </div>
  );
}
