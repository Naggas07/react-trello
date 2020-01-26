import React from "react";
import Card from "./Card";
import services from "../services/TrelloService";

import "../Css/Column.css";

const Column = props => {
  const { id, title, cards } = props.column;

  const deleteColum = (columnId) =>{
    services.deleteColumn(columnId)
    .then(props.refreshColumns)
  }


  return (
    <div className="column">
      <div className="column-title">
        <h5>{title}</h5>
        <div className="text-danger btn-delete-column" onClick={() => deleteColum(id)}>
          <i className="fa fa-times"></i>
        </div>
      </div>

      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Column;
