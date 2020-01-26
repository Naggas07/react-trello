import React from "react";
import Card from "./Card";

import "../Css/Column.css";

const Column = props => {
  const { title, cards } = props.column;
  return (
    <div className="column">
        <div>
        <h3>{title}</h3>
            <div className="text-danger btn-delete-column" ><i className="fa fa-times"></i></div>
        </div>
      
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
      {/* <button
        className="btn btn-danger btn-block mb-2 mt-2"> Delete
      </button> */}
    </div>
  );
};

export default Column;
