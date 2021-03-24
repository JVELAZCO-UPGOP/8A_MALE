import React from 'react';

function ActionsMenu() {
    return( 
        <div className="container">
            <h1>Mascotas</h1>
            <div className="actions-menu-content">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo">
                    Agregar</button>
                <div className="alert alert-danger alert-dismissible" role="alert">
                    <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>)
}

export default ActionsMenu;

