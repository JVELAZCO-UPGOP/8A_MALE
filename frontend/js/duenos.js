const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellidos');
const identificacion = document.getElementById('identificacion');
const indice = document.getElementById('indice');
const form = document.getElementById('formulario');
const btnGuardar = document.getElementById('guardar');
const listaDuenos = document.getElementById('lista-duenos');
const titulo = document.getElementById('label');


let duenos = [
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

function listarDuenos()
{
    const htmlDuenos = duenos.map((dueno,index)=>`<tr>
        <th scope="row">${index}</th>
        <td>${dueno.identificacion}</td>
        <td>${dueno.pais}</td>
        <td>${dueno.nombre}</td>
        <td>${dueno.apellidos}</td>
        <td><button class="btn btn-success editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger eliminar" data-bs-toggle="modal" data-bs-target="#modalEliminar" data-bs-whatever="@mdo"><i class="far fa-trash-alt"></i></button>
        </td>
    </tr>`).join("");
    listaDuenos.innerHTML=htmlDuenos;
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
            duenos[indice.value] = datos;
            break;
        default:
            duenos.push(datos);
            break;
    }
    listarDuenos();
    resetModal();
}
function editar(index)
{
    return function cuandoCliqueo()
    {
        titulo.innerHTML='Editar dueño';
        btnGuardar.innerHTML='Editar';

        const dueno = duenos[index];
        nombre.value = dueno.nombre;
        apellidos.value = dueno.apellidos;
        pais.value = dueno.pais;
        identificacion.value = dueno.identificacion;
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
        duenos = duenos.filter((dueno,indiceDueno)=>indiceDueno !== index);
    }
}
function confirmarEliminacion()
{
    eliminar();
    listarDuenos();
}
listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;