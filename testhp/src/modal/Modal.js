import React from 'react'
import './Modal.scss';


export const Modal = (props) => {

    const[]

    return(
        props.open && (
            <div className="modalContent">
                <div className="myModal">
                    <h1>Agrega un personaje</h1>
                    <form>
                        <label htmlFor="name">Nombre</label>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" required />
                        <label htmlFor="birthday">Cumpleaños</label>
                        <input value={birthday} onChange={(e) => {setBirthday(e.target.value)}} type="text" required />
                        <label htmlFor="eyesColour">Color de ojos</label>/label>
                        <input value={eyesColour} onChange={(e) => {setEyes(e.target.value)}} type="text" required />
                        <label htmlFor="hairColour">Color de pelo</label>/label>
                        <input value={hairColour} onChange={(e) => {setEyes(e.target.value)}} type="text" required />
                    </form>
                    <button className="close" onClick={props.onClose}>Cerrar</button>
                </div>
            </div>
        )
    );
}