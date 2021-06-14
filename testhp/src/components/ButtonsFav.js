import favorite from '../assets/favorite.png';
import add from '../assets/add.png';
import './ButtonsFav.scss';

export const ButtonsFav = () =>{

    return(
        <div className="btnsFavs">
            <button className="btnFav" >FAVORITOS <img src={favorite} alt="favorite" className="favorite"/></button>
            <button className="btnAdd" >AGREGAR <img src={add} alt="add" className="add"/></button>
        </div>
    )
}