const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueño = document.getElementById('dueño');
const form = document.getElementById('formulario');
const btnGuardar = document.getElementById('guardar');
const listaMascotas = document.getElementById('lista-mascotas');


let mascotas = [
    {tipo: "Gato",
    nombre: "manchas",
    dueño: "Mario"
    }
];

function listarMascotas()
{
    const htmlMascotas = mascotas.map((mascota,indice)=>`<tr>
        <th scope="row">${indice}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueño}</td>
        <td><button class="btn btn-success"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
        </td>
    </tr>`).join("");
    listaMascotas.innerHTML=htmlMascotas;
}
function enviarDatos(evento)
{
    evento.PreventDefault();
    const datos = 
    {
        tipo: tipo.value,
        nombre: nombre.value,
        dueño: dueño.value
    };
    mascotas.push(datos);
    listarMascotas();
}
listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;