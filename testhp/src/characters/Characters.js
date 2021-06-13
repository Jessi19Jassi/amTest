import React, {useState, useEffect} from 'react';
import {Template} from '../components/Template.js';

export const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacter();
    }, [])
    
    const getCharacter = async () => {
        const data = await fetch('http://localhost:5000/charactershp');
        const characters = await data.json();
        setCharacters(characters);
    }

    return(
        <>
            <div>
                {characters.map((element) => (
                    <Template element={element}/>
                ))}
            </div>
        </>
    );
}
