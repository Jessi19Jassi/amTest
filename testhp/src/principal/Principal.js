import React from 'react';
import {Characters} from '../characters/Characters.js';
import './Principal.scss';

export const Principal = () =>{
    return(
        <div className="principalDiv">
            <Characters />
        </div>
    )
}