import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Name",
      petType: "PetType",
      breed: "Breed"
    }),
    React.createElement(Pet, {
      name: "Mooncy",
      petType: "Dog",
      breed: "Pamerian"
    }),
    React.createElement(Pet, {
      name: "Lulu",
      petType: "Bird",
      breed: "Parrot"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
