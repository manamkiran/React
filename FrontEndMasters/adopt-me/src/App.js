const Pet = ({ name, petType, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, petType),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
