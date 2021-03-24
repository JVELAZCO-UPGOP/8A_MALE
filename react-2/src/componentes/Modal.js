import React from 'react';

function Modal() {
    return( 
        <div className="modal fade" data-backdrop="static" data-keyboard="false" id="exampleModal" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true" href="#">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="label">Agregar nueva mascota</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onclick="resetModal()">
                    </button>
                </div>
                <div className="modal-body">
                    <form action="" id="formulario">
                        <input type="hidden" id="indice" />
                        <label for="tipo" className="form-label">Seleccione un tipo de mascota</label>
                        <select className="form-select" aria-label="Default select example" id="tipo">
                            <option selected>Tipo animal</option>
                            <option value="Perro">Perro</option>
                            <option value="Gato">Gato</option>
                            <option value="Ave">Ave</option>
                        </select>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre de la mascota</label>
                            <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" />

                            <label for="dueño" className="form-label">Dueño de la mascota</label>
                            <input type="text" className="form-control" id="dueno" aria-describedby="emailHelp" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onclick="resetModal()">Cerrar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="guardar">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}

export default Modal;