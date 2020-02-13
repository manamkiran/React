import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!!!</h1>
      <Pet name="Luna" petType="Dog" breed="Some" />
      <Pet name="Mooncy" petType="Dog" breed="Pamerian" />
      <Pet name="CoCo" petType="Bird" breed="Yo" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
