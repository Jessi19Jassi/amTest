import React, {useState, useEffect} from 'react'
import {Character} from './Character.js'

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
                <button>Students</button>
                <button>Staff</button>
                {characters.map((element) => (
                    <Character element={element}/>
                ))}
            </div>
        </>
    );
}
