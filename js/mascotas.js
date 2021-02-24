const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const indice = document.getElementById('indice');
const form = document.getElementById('formulario');
const btnGuardar = document.getElementById('guardar');
const listaMascotas = document.getElementById('lista-mascotas');
const titulo = document.getElementById('label');


let mascotas = [
    {tipo: "Gato",
    nombre: "manchas",
    dueno: "Mario"
    },
    {tipo: "Perro",
    nombre: "Pluto",
    dueno: "Angel"
    }
];

function listarMascotas()
{
    const htmlMascotas = mascotas.map((mascota,index)=>`<tr>
        <th scope="row">${index}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueno}</td>
        <td><button class="btn btn-success editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger eliminar" data-bs-toggle="modal" data-bs-target="#modalEliminar" data-bs-whatever="@mdo"><i class="far fa-trash-alt"></i></button>
        </td>
    </tr>`).join("");
    listaMascotas.innerHTML=htmlMascotas;
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index)=>botonEditar.onclick=editar(index))
    Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar,index)=>botonEliminar.onclick=eliminar(index))
}
function enviarDatos(e)
{
    const datos = 
    {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    const accion = btnGuardar.innerHTML;
    switch(accion)
    {
        case 'Editar':
            mascotas[indice.value] = datos;
            break;
        default:
            mascotas.push(datos);
            break;
    }
    listarMascotas();
    resetModal();
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
    btnGuardar.innerHTML = 'Crear'
}

function eliminar(index)
{
    return function clickEliminar()
    {
        mascotas = mascotas.filter((mascota,indiceMascota)=>indiceMascota !== index);
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




