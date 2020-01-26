import React from 'react';
import Card from './Card';

import '../Css/Column.css'

const Column = (props) => {
    const {title, cards} = props.column
    return ( 
        <div className="column">
            <h3>{title}</h3>
            {cards.map(card => <Card key={card.id} card={card} />)}
        </div>
     );
}
 
export default Column;