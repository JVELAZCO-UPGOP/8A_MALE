const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const indice = document.getElementById('indice');
const form = document.getElementById('formulario');
const btnGuardar = document.getElementById('guardar');
const listaMascotas = document.getElementById('lista-mascotas');


let mascotas = [
    {tipo: "Gato",
    nombre: "manchas",
    dueno: "Mario"
    }
];

function listarMascotas()
{
    const htmlMascotas = mascotas.map((mascota,index)=>`<tr>
        <th scope="row">${index}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueno}</td>
        <td><button class="btn btn-success editar" data-indice?${index}><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
        </td>
    </tr>`).join("");
    listaMascotas.innerHTML=htmlMascotas;
        Array.from(document.getElementsByClassName('editar')).forEach((botonEditar)=>botonEditar.onclick=editar)
}
function enviarDatos(e)
{
    // e.PreventDefault();
    const datos = 
    {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    mascotas.push(datos);
    listarMascotas();
}
function editar(e)
{
    console.log('editar' , e)
}


listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;