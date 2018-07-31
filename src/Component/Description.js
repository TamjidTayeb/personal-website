import React from 'react';
import './Description.css';

const description = (props) => {
    return (
        <div className ="Description">
        <h2 className="title">{props.name}</h2>
        <p>{props.content}</p>
        </div>
    )
}

export default description;