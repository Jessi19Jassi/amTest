import React from 'react';
import './Template.scss';
import favorite from '../assets/favorite.png';

export const Template = (props) =>{
    return(
        <div className="card">
            <div className="card-body-text">
                <div className="imgTemplate">
                    <img src={props.element.image} alt="harrypotter" />
                </div>
                <div className="textTemplate">
                    <img src={favorite} alt="favorite" className="favorite"/>
                    <h1 className="nameHP">{props.element.name}</h1>
                    <p className="parrafo">Cumpleaños: {props.element.dateOfBirth}</p>
                    <p className="parrafo">Género: {props.element.gender}</p>
                    <p className="parrafo">Color de ojos: {props.element.eyeColour}</p>
                    <p className="parrafo">Color de pelo: {props.element.hairColour}</p>
                </div>
            </div>
        </div>
    )
}