const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellidos');
const identificacion = document.getElementById('identificacion');
const indice = document.getElementById('indice');
const form = document.getElementById('formulario');
const btnGuardar = document.getElementById('guardar');
const listaDuenos = document.getElementById('lista-duenos');
const titulo = document.getElementById('label');
const url = 'http://localhost:5000/duenos';


let duenos = [];

async function listarDuenos()
{
    try{
        const respuesta = await fetch(url);
        const duenosDelServer = await respuesta.json();
        if (Array.isArray(duenosDelServer)) {
          duenos = duenosDelServer;
        }
        if (duenos.length > 0) {
            const htmlDuenos = duenos
            .map((dueno,index)=>`<tr>
            <th scope="row">${index}</th>
            <td>${dueno.identificacion}</td>
            <td>${dueno.nombre}</td>
            <td>${dueno.apellidos}</td>
            <td><button class="btn btn-success editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger eliminar" data-bs-toggle="modal" data-bs-target="#modalEliminar" data-bs-whatever="@mdo"><i class="far fa-trash-alt"></i></button>
            </td>
            </tr>`)
            .join("");
            listaDuenos.innerHTML=htmlDuenos;
            Array.from(document.getElementsByClassName('editar')).forEach(
                (botonEditar,index)=>(botonEditar.onclick=editar(index))
            );
            Array.from(document.getElementsByClassName('eliminar')).forEach(
                (botonEliminar,index)=>(botonEliminar.onclick=eliminar(index))
            );
            return;
        }
        listaDuenos.innerHTML = `<tr>
        <td colspan="5" class="lista-vacia">No hay dueñ@s</td>
      </tr>`;
    }
    catch{
        console.log({ error });
        $(".alert").show();
    }
}
async function enviarDatos(e){
    try{
        const datos = {
            nombre: nombre.value,
            apellidos: apellidos.value,
            identificacion: identificacion.value
        };
        const accion = btnGuardar.innerHTML;
        let urlEnvio = url;
        let method = 'POST'
        if(accion === 'Editar')
        {
            urlEnvio += `/${indice.value}`;
            method = 'PUT'
        }
        const respuesta = await fetch(urlEnvio, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
            mode: "cors",
          });
        listarDuenos();
        resetModal();
    }
    catch{

    }
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
        identificacion.value = dueno.identificacion;
        indice.value = index;
    }
}

function resetModal()
{
  nombre.value = '';
  apellidos.value= '';
  identificacion.value= '';
  titulo.innerHTML = 'Agregar nuevo dueño'
  btnGuardar.innerHTML = 'Agregar'
}

function eliminar(index) {
    const urlEnvio = `${url}/${index}`;
    return async function clickEliminar() {
      try {
        const respuesta = await fetch(urlEnvio, {
          method: "DELETE",
          mode: "cors",
        });
        if (respuesta.ok) {
        //   listarDuenos();
        }
      } catch (error) {
        console.log({ error });
        $(".alert").show();
      }
    };
  }

function confirmarEliminacion()
{
    eliminar();
    listarDuenos();
}
function negarEliminacion()
{
    resetModal();
}
listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;