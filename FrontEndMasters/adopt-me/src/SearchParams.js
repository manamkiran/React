import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./UseDropDown";

const SearchParams = () => {
  const [location, setLocation] = useState("India");

  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown] = useDropDown("Breed", "", breeds);

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
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
