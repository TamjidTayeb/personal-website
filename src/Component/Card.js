import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className ="Card" onClick={props.clicked}>
        <div className="CardContent">
        <img src={props.image}/>
         <p>{props.name}</p>
         </div>
        </div>
    )
}

export default card;