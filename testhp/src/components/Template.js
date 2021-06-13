import React from 'react';

export const Template = (props) =>{
    return(
        <div className="card">
        <div className="card-body">
            <div className="card-body-text">
                <img src={props.element.image} alt="harrypotter" />
                <h1>{props.element.name}</h1>
                <p>Birthday: {props.element.dateOfBirth}</p>
                <p>Gender: {props.element.gender}</p>
                <p>Eyes colour: {props.element.eyeColour}</p>
                <p>Hair colour: {props.element.hairColour}</p>
                </div>
        </div>
    </div>
    )
}