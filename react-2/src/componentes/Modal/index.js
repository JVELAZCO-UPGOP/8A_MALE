import React from 'react';
import ModalHeader from "./ModalHeader";
import ModalFooter from './ModalFooter';
import Select from "../Select";
import Input from '../Input/index';
import "./Modal.css";

const tiposMascota = [
    {valor: "perro" , etiqueta: "perro"},
    {valor: "gato" ,etiqueta: "gato"},
    {valor: "pájaro" , etiqueta: "pájaro"},
    ]
function Modal({cambiarModal = () => {}, manejarInput = () => {}, crearEntidad = () => {}, objeto = {}}) {
    return (
        <>
        <div className="modal" data-backdrop="static" data-keyboard="false" id="exampleModal"
            aria-labelledby="exampleModalLabel" aria-hidden="true" href="#">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader cambiarModal={cambiarModal}/>
                    <div className="modal-body">
                        <form action="" id="formulario">
                            <Select 
                            nombreCampo="tipo"
                            options= {tiposMascota} 
                            onChange={manejarInput} 
                            placeholder= "tipo de animal"
                            value = {objeto.tipo} 
                            />
                            <Input
                            tipo="text" 
                            onInput={manejarInput} 
                            value={objeto.nombre}
                            value2={objeto.dueno}
                            />
                            <ModalFooter cambiarModal={cambiarModal} crearEntidad={crearEntidad} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade show"></div>
        </>
    );
}

export default Modal;