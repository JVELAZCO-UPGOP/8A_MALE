// const { url } = require("node:inspector");

const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const indice = document.getElementById('indice');
const form = document.getElementById('formulario');
const btnGuardar = document.getElementById('guardar');
const listaMascotas = document.getElementById('lista-mascotas');
const titulo = document.getElementById('label');
const url = 'https://veterinaria-backend-inky.vercel.app/mascotas';


let mascotas = [];

async function listarMascotas(){
    try {
        const respuesta = await fetch(url)
        const mascotasDelServer   = await respuesta.json();
        if(Array.isArray(mascotasDelServer)){
            mascotas = mascotasDelServer;
        }
        if(mascotas.length > 0)
        {
            const htmlMascotas = mascotas
        .map(
            (mascota,index)=>`<tr>
        <th scope="row">${index}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueno}</td>
        <td><button class="btn btn-success editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger eliminar" data-bs-toggle="modal" data-bs-target="#modalEliminar" data-bs-whatever="@mdo"><i class="far fa-trash-alt"></i></button>
        </td>
        </tr>`
        )
        .join("");
            listaMascotas.innerHTML=htmlMascotas;
            Array.from(document.getElementsByClassName('editar')).forEach(
                (botonEditar,index)=> (botonEditar.onclick=editar(index))
            );
            Array.from(document.getElementsByClassName('eliminar')).forEach(
                (botonEliminar,index)=>(botonEliminar.onclick=eliminar(index))
            );
            return;
        }
        listaMascotas.innerHTML= `<tr>
            <td colspan="5" class="lista-vacia">No hay mascotas</td>
            </tr>`;
    } 
    catch (error) {
        $(".alert").show();
    }
}
async function enviarDatos(e)
{
    try {
        const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    let method = 'POST';
    let urlEnvio = url;
    const accion = btnGuardar.innerHTML;
    if(accion === 'Editar')
    {
        method = 'PUT';
        mascotas[indice.value] = datos;
        urlEnvio = `${url}/${indice.value}`;
    }
    const respuesta = await fetch(urlEnvio,{
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
        mode: 'cors',
    });
    if(respuesta.ok){
        listarMascotas();
        resetModal();
    }
    listarMascotas();
    }
    catch (error) {
        $(".alert").show();
    }
}
function editar(index)
{
    return function cuandoCliqueo()
    {
        titulo.innerHTML='Editar mascota';
        btnGuardar.innerHTML='Editar';

        const mascota = mascotas[index];
        nombre.value = mascota.nombre;
        dueno.value = mascota.dueno;
        tipo.value = mascota.tipo;
        indice.value = index;
    }
}

function resetModal()
{
    nombre.value = '';
    dueno.value = '';
    tipo.value = 'Tipo animal';
    indice.value = '';
    btnGuardar.innerHTML = 'Agregar'
}

function eliminar(index)
{
    const urlEnvio = `${url}/${index}`;
    return async function clickEliminar()
    {
        try {
            const respuesta = await fetch(urlEnvio,{
                method: 'DELETE',
            });
            if(respuesta.ok){
                // listarMascotas();
                resetModal();
            }
            // listarMascotas();
        } catch (error) {
            $(".alert").show();
        }
    }
}
function confirmarEliminacion()
{
    eliminar();
    listarMascotas();
}
listarMascotas();


form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;




