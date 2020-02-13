const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.petType),
    React.createElement("h2", {}, props.breed)
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
