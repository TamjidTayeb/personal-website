import React from 'react';
import './Card.css';

const person = (props) => {
    return (
        <div className ="Card">
        <div className="CardContent">
        <img src={props.image}/>
         <p>{props.name}</p>
         </div>
        </div>
    )
}

export default person;