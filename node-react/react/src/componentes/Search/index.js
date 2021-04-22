import React from 'react';
import "./Search.css";
import Select from "../Select";

function Search({
  manejarSearchInput=() => {}, 
  buscar =() => {},   
  entidad = null,
  options = {},
}) {
    return (
        <form className="d-flex">
            <input className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            onInput ={manejarSearchInput}
            />
            {entidad === "consultas" && (
        <>
          <Select
            nombreCampo="mascota"
            options={options.mascota ? options.mascota : []}
            placeholder="búsqueda por mascota"
            onChange={manejarSearchInput}
          />
          <Select
            nombreCampo="veterinaria"
            options={options.veterinaria ? options.veterinaria : []}
            placeholder="búsqueda por veterinaria"
            onChange={manejarSearchInput}
          />
        </>
      )}
            <button className=" btn btn-outline-light" type="submit" onClick={buscar}>Search</button>
        </form>
    );
}

export default Search;


