import favorite from '../assets/favorite.png';
import add from '../assets/add.png';
import './ButtonsFav.scss';
// import {Modal} from 'react-bulma-components'

export const ButtonsFav = () =>{

    // const [open, setOpen] = useState(true);

    // const history = useHistory();

    // function handleClick(){
    //     history.push('/favorites');
    // }

    // function handleClik(){
    //     history.push('/add');
    // }
    // const hideModal = () => {
    //     console.log('closing modal')
    //     setOpen(false);
    // };

    // const showModal = () => {
    //     setOpen(true);
    //     console.log('funciono')
    // };

    return(
        <>
        <div className="btnsFavs">
            <button className="btnFav" >FAVORITOS <img src={favorite} alt="favorite" className="favorite"/></button>
            <button className="btnAdd" >AGREGAR <img src={add} alt="add" className="add"/></button>
        </div>
        {/* <Modal show={open} onClose={() => setOpen(false)}>
            <Modal.Card>
                <Modal.Card.Head>
                    Form
                </Modal.Card.Head>
                <Modal.Card.Body>
                    Formulario
                </Modal.Card.Body>
            </Modal.Card>
        </Modal> */}
        </>
    )
}