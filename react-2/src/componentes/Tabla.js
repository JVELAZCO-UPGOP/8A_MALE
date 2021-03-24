import React from 'react';

function Tabla() {
    return( 
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Dueño</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="lista-mascotas">
            </tbody>
        </table>
    </div>)
}

export default Tabla;