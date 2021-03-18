const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellidos');
const identificacion = document.getElementById('identificacion');
const indice = document.getElementById('indice');
const form = document.getElementById('formulario');
const btnGuardar = document.getElementById('guardar');
const listaVeterinarias = document.getElementById('listaVeterinarias');
const titulo = document.getElementById('label');


let veterinarias = [
    {nombre: "Karen",
    apellidos: "Vielma",
    pais: "Colombia",
    identificacion: "123456"
    },
    {nombre: "Perla",
    apellidos: "Salazar",
    pais: "México",
    identificacion: "654321"
    }
];

function listarVeterinarias()
{
    const htmlVeterinarias = veterinarias.map((veterinaria,index)=>`<tr>
        <th scope="row">${index}</th>
        <td>${veterinaria.identificacion}</td>
        <td>${veterinaria.pais}</td>
        <td>${veterinaria.nombre}</td>
        <td>${veterinaria.apellidos}</td>
        <td><button class="btn btn-success editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger eliminar" data-bs-toggle="modal" data-bs-target="#modalEliminar" data-bs-whatever="@mdo"><i class="far fa-trash-alt"></i></button>
        </td>
    </tr>`).join("");
    listaVeterinarias.innerHTML=htmlVeterinarias;
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index)=>botonEditar.onclick=editar(index))
    Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar,index)=>botonEliminar.onclick=eliminar(index))
}
function enviarDatos(e)
{
    const datos = 
    {
        nombre: nombre.value,
        apellidos: apellidos.value,
        pais: pais.value,
        identificacion: identificacion.value
    };
    const accion = btnGuardar.innerHTML;
    switch(accion)
    {
        case 'Editar':
            veterinarias[indice.value] = datos;
            break;
        default:
            veterinarias.push(datos);
            break;
    }
    listarVeterinarias();
    resetModal();
}
function editar(index)
{
    return function cuandoCliqueo()
    {
        titulo.innerHTML='Editar veterinario';
        btnGuardar.innerHTML='Editar';

        const veterinaria = veterinarias[index];
        nombre.value = veterinaria.nombre;
        apellidos.value = veterinaria.apellidos;
        pais.value = veterinaria.pais;
        identificacion.value = veterinaria.identificacion;
        indice.value = index;
    }
}

function resetModal()
{
    nombre.value = '';
    apellidos.value= '';
    pais.value= 'Selecciona un país';
    identificacion.value= '';
    btnGuardar.innerHTML = 'Agregar'
}

function eliminar(index)
{
    return function clickEliminar()
    {
        veterinarias = veterinarias.filter((veterinaria,indiceVeterinaria)=>indiceVeterinaria !== index);
    }
}
function confirmarEliminacion()
{
    eliminar();
    listarVeterinarias();
}
listarVeterinarias();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;