import React from 'react';
import { useHistory } from 'react-router-dom';
import './Buttons.scss';
import harryPotter from '../assets/harry-potter.png';

export const Buttons = () =>{

    const history = useHistory();

    function handleClick(){
        history.push('/students');
    }

    function handleClik(){
        history.push('/staff');
    }

    function handleClic(){
        history.push('/dead');
    }

    return(
        <div className="containerBtns">
            <img className="titleHP" src={harryPotter} alt="harryPotter"/>
            <h2>Selecciona tu filtro</h2>
            <div className="buttonsG">
                <button className="btnStudents" onClick={handleClick}>ESTUDIANTES</button>
                <button className="btnStaff" onClick={handleClik}>STAFF</button>
                <button className="btnDead" onClick={handleClic}>PERSONAJES MUERTOS</button>
            </div>
        </div>
    )
}