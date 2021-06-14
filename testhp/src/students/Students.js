import React, {useState,useEffect} from 'react';
import {Template} from '../components/Template.js';
import './Students.scss';

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
<link rel="stylesheet" href="styles.css" />

            {students.map((element) => (
                <Template element={element}/>
            ))}
        </div>
    )
}