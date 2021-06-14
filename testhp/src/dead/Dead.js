import React, {useState,useEffect} from 'react';
import {Template} from '../components/Template';

export const Dead = () => {

    const[dead, setDead] = useState([]);

    useEffect(() => {
		getDead();
	}, []);

	const getDead = async()=> {
        const data = await fetch('http://localhost:5000/charactershp');
        const dead = await data.json();
		let filterDead = dead.filter(
		(item) => item.alive === false
		);
		setDead(filterDead);
	}

    return(
        <div>
            {dead.map((element) => (
                <Template element={element}/>
            ))}
        </div>
    )
}