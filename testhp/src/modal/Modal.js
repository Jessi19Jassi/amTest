import React from 'react'
import './Modal.scss';


export const Modal = (props) => {

    return(
        props.open && (
            <div className="modalContent">
                <div className="myModal">
                    <h1>Agrega un personaje</h1>
                    <form>
                    </form>
                    <button className="close" onClick={props.onClose}>Cerrar</button>
                </div>
            </div>
        )
    );
}
