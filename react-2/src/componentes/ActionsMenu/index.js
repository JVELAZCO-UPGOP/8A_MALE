import React,{useState} from 'react';
import './ActionsMenu.css';
import Alert from "../Alert";

function ActionsMenu() {
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const alertSwitch = () => setMostrarAlerta(!mostrarAlerta);
    return( 
        <div className="containerActions">
            <h1>Mascotas</h1>
            <div className="actions-menu-content">
                <button type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                onClick={alertSwitch}
                >
                Agregar</button>
                    {mostrarAlerta && <Alert alertSwitch= {alertSwitch} /> }
            </div>
        </div>)
}

export default ActionsMenu;