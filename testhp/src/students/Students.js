import React, {useState,useEffect} from 'react';
import {Template} from '../components/Template.js';
import {Buttons} from '../components/Buttons.js';

export const Students = () => {

    const[students, setStudents] = useState([]);

    useEffect(() => {
		getStudents();
	}, []);

	const getStudents = async()=> {
        const data = await fetch('http://localhost:5000/charactershp');
        const students = await data.json();
		let filterStudents = students.filter(
		(item) => item.hogwartsStudent === true
		);
		setStudents(filterStudents);
	}

    return(
        <div>
            <Buttons />
            {students.map((element) => (
                <Template element={element}/>
            ))}
        </div>
    )
}