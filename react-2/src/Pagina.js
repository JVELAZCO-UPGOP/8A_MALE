import React from "react";
import Nav from "./componentes/Nav/index";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";


function Mascotas() {
    return (
        <div class="container">
            <Nav/>
            <ActionsMenu/>
            <Modal/>

        <div className="modal" tabindex="-1" id="modalEliminar">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">¿Seguro quieres eliminar el dato?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <p>Seleccciona una opción.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                            onclick="confirmarEliminacion()">
                            Sí</button>
                    </div>
                </div>
            </div>
        </div>
        <Tabla/>;
    </div>
    );
}

export default Mascotas;