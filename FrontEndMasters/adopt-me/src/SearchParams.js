import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("India");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder={location}
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
