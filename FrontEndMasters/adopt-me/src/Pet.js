import React from "react";

export default function Pet({ name, petType, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, petType),
    React.createElement("h2", {}, breed)
  ]);
}
