import React from "react";
import "./Input.css";

function Input({ tipo = "text", nombreCampo, onInput=() => {}, value="",value2="" }) {
  return (
    <div className="mb-3">
      <input type={tipo} name="nombre" className="form-control" onInput={onInput} value={value}/>
      <input type={tipo} name="dueno" className="form-control"  onInput={onInput} value={value2} />
    </div>
  );
}

export default Input;
