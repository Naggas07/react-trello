import React from "react";
import '../Css/Card.css'
import services from "../services/TrelloService";

const Card = props => {
  const { id, title, description } = props.card;

  const deleteCard = (cardId) =>{
    services.deleteCard(cardId)
    .then(props.refreshColumns)
  }

  console.log(props, "card")

  return (
    <div className="card bg-light mb-3">
      <div className="card-header header-card">
        <h6>{title}</h6>
        <div className="text-danger btn-delete-card"
        onClick={() => deleteCard(id)}>
          <i className="fa fa-times"></i>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
