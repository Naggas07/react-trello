import React from 'react';

const Card = (props) => {
    const {title, description} = props.card
    return ( 
        <div className="container card">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
     );
}
 
export default Card;