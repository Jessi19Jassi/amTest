import React, {useState,useEffect} from 'react';
import {Template} from '../components/Template';

export const Staff = () => {

    const[staff, setStaff] = useState([]);

    useEffect(() => {
		getStaff();
	}, []);

	const getStaff = async()=> {
        const data = await fetch('http://localhost:5000/charactershp');
        const staff = await data.json();
		let filterStaff = staff.filter(
		(item) => item.hogwartsStaff === true
		);
		setStaff(filterStaff);
	}

    return(
        <div>
            {staff.map((element) => (
                <Template element={element}/>
            ))}
        </div>
    )
}