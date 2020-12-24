import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  //&&size=180x180
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        alt={props.monster.id}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
