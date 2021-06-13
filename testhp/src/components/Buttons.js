import React from 'react';
import { useHistory } from 'react-router-dom';

export const Buttons = () =>{

    const history = useHistory();

    function handleClick(){
        history.push('/students');
    }

    function handleClik(){
        history.push('/staff');
    }

    return(
        <div>
            <button onClick={handleClick}>Students</button>
            <button onClick={handleClik}>Staff</button>
        </div>
    )
}