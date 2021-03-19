// const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellidos');
const identificacion = document.getElementById('identificacion');
const indice = document.getElementById('indice');
const form = document.getElementById('formulario');
const btnGuardar = document.getElementById('guardar');
const listaVeterinarias = document.getElementById('listaVeterinarias');
const titulo = document.getElementById('label');
const url = 'https://veterinaria-backend-inky.vercel.app/veterinarias';

let veterinarias = [];

async function listarVeterinarias(){
    try {
        const respuesta = await fetch(url)
        const veterinariasDelServer   = await respuesta.json();
        if(Array.isArray(veterinariasDelServer)){
            veterinarias = veterinariasDelServer;
        }
        if(veterinarias.length > 0){
            const htmlVeterinarias = veterinarias
            .map(
                (veterinaria,index)=>`<tr>
                <th scope="row">${index}</th>
                <td>${veterinaria.identificacion}</td>
                <td>${veterinaria.nombre}</td>
                <td>${veterinaria.apellidos}</td>
                <td><button class="btn btn-success editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger eliminar" data-bs-toggle="modal" data-bs-target="#modalEliminar" data-bs-whatever="@mdo"><i class="far fa-trash-alt"></i></button>
                </td>
            </tr>`).join("");
            listaVeterinarias.innerHTML=htmlVeterinarias;
            Array.from(document.getElementsByClassName('editar')).forEach(
                (botonEditar,index)=>(botonEditar.onclick=editar(index))
                );
            Array.from(document.getElementsByClassName('eliminar')).forEach(
                (botonEliminar,index)=>(botonEliminar.onclick=eliminar(index))
                );
                return;
        }
        listaVeterinarias.innerHTML= `<tr>
        <td colspan="5" class="lista-vacia">No hay veterinarias</td>
        </tr>`;   
    } 
    catch (error) {
        console.log({error});
    }
}
async function enviarDatos(e) {
    // evento.preventDefault();
    try {
      const datos = {
        nombre: nombre.value,
        apellidos: apellidos.value,
        identificacion: identificacion.value,
      };
      const accion = btnGuardar.innerHTML;
      let urlEnvio = url;
      let method = "POST";
      if (accion === "Editar") {
        urlEnvio += `/${indice.value}`;
        method = "PUT";
      }
      const respuesta = await fetch(urlEnvio, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
        mode: "cors",
      });
      if (respuesta.ok) {
        listarVeterinarias();
        resetModal();
      }
    } catch (error) {
      console.log({ error });
      $(".alert").show();
    }
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
        identificacion.value = veterinaria.identificacion;
        indice.value = index;
    }
}

function resetModal()
{
    nombre.value = '';
    apellidos.value= '';
    // pais.value= 'Selecciona un país';
    identificacion.value= '';
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
            resetModal();
            // listarVeterinarias();
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
    listarVeterinarias();
}
listarVeterinarias();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;