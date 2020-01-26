import React from "react";

const Card = props => {
  const { title, description } = props.card;
  return (
    <div className="card bg-light mb-3">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <p className="card-text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
