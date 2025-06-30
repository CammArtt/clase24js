


//------ELEMENTOS DEL DOM
const contenedorPeliculas = document.querySelector(".contenedorPeliculas");
const selectFases = document.querySelector("#faseMCU");
const inputBuscador = document.querySelector("#buscador");
const botonReset = document.getElementById("resetFiltros");

//------Funciones que se ejcutan al cargar la pagina
generarOpcionesFases(); // Carga las opciones del <select> con las fases únicas
mostrarPeliculas(peliculasMCU); // Muestra todas las películas por defecto

//------Funciones generales
// 💡 FUNCIÓN GENERAL PARA MOSTRAR PELÍCULAS EN LA PÁGINA
function mostrarPeliculas(_unArray) {
  let contenido = ""; // Variable para acumular el HTML de cada tarjeta de película)

  // Recorro el array recibido por parámetro
  for (let i = 0; i <= _unArray.length - 1; i++) {
    // Voy concatenando el HTML de cada película al string contenido
    contenido += `  
      <div class="pelicula-card">
        <a href="ampliacion.html?id=${_unArray[i].id}"> <!-- Link con ID para ver más info -->
          <img src="${_unArray[i].portada}" alt="pelicula ${_unArray[i].id}" class="pelicula-img">
        </a>
        <div class="pelicula-info">
          <h2 class="pelicula-titulo">${_unArray[i].nombre} <br> (${_unArray[i].fechaEstreno})</h2>
          <p class="pelicula-subtitulo">Dirigido por ${_unArray[i].director}</p>
        </div>
      </div>`;
  }

  // Inserto todo el contenido generado en el contenedor del HTML
  contenedorPeliculas.innerHTML = contenido;
}

//------Funciones especificas

//FUNCIÓN PARA GENERAR OPCIONES ÚNICAS EN EL SELECT DE FASES
function generarOpcionesFases() {
  let fasesUnicas = []; // Array para guardar las fases sin repetir

  // Recorro todas las películas
  for (let i = 0; i < peliculasMCU.length; i++) {
    let faseActual = peliculasMCU[i].fase;

    // Solo agrego la fase si no está en la lista
    if (fasesUnicas.indexOf(faseActual) === -1) {
      fasesUnicas.push(faseActual);
    }
  }

  // Ordeno las fases alfabéticamente (por si vienen desordenadas)
  fasesUnicas.sort();

  // Comienzo agregando la opción "Todos"
  selectFases.innerHTML = `<option value="Todos">Todos</option>`;

  // Agrego cada fase como una opción del <select>
  for (let i = 0; i < fasesUnicas.length; i++) {
    selectFases.innerHTML += `<option value="${fasesUnicas[i]}">${fasesUnicas[i]}</option>`;
  }
}

/*
//FILTRAR PELÍCULAS POR FASE
function filtrarPeliculasPorFases() {
  let faseSeleccionada = selectFases.value; // Leo el valor actual del select
  let peliculasFiltradasPorFase = []; // Array donde voy a guardar las pelis filtradas

  // Recorro todas las películas
  for (let i = 0; i <= peliculasMCU.length - 1; i++) {
    // Si la fase coincide o el usuario eligió "Todos", agrego la película
    if (
      peliculasMCU[i].fase == faseSeleccionada ||
      faseSeleccionada == "Todos"
    ) {
      peliculasFiltradasPorFase.push(peliculasMCU[i]);
    }
  }

  // Muestro las pelis filtradas en pantalla
  mostrarPeliculas(peliculasFiltradasPorFase);
}

//FILTRAR PELÍCULAS POR NOMBRE (BUSCADOR)
function filtrarXNombre() {
  let textoBuscar = inputBuscador.value; // Lo que el usuario escribió
  let arrayFiltradoXNombre = []; // Acá voy a guardar las coincidencias

  // Recorro todas las películas
  for (let i = 0; i <= peliculasMCU.length - 1; i++) {
    // Comparo el nombre actual con lo buscado (en mayúsculas para que no importe el caso)
    if (peliculasMCU[i].nombre.toUpperCase().includes(textoBuscar.toUpperCase())) {
      arrayFiltradoXNombre.push(peliculasMCU[i]);
    }
  }

  // Si no hay coincidencias, aviso al usuario
  if (arrayFiltradoXNombre.length == 0) {
    contenedorPeliculas.innerHTML = `<p>No hay películas con ese nombre</p>`;
  } else {
    // Si hay, las muestro
    mostrarPeliculas(arrayFiltradoXNombre);
  }
}

//------Eventos
selectFases.addEventListener("change", filtrarPeliculasPorFases);
inputBuscador.addEventListener("keyup", filtrarXNombre);
*/

function filtrarPeliculasTextoFaseyAnio() {
  let faseSeleccionada = selectFases.value;
  let textoBuscar = inputBuscador.value.toUpperCase();
  let pelisFiltradas = [];
  
  for (let i = 0; i < peliculasMCU.length; i++) {
    let peli = peliculasMCU[i];
    let nombrePeli = peli.nombre.toUpperCase();
    
    //se combina porq estamos evaluando dos codinciones al mismo tiempo, si la quicieramos por seprado hariamos
    //dos funciones por seprados
    if ((faseSeleccionada === "Todos" || peli.fase === faseSeleccionada) && nombrePeli.includes(textoBuscar)) {
      pelisFiltradas.push(peli);
    }
  }

  if (pelisFiltradas.length === 0) {
    contenedorPeliculas.innerHTML = `<p>No hay películas que coincidan con los filtros</p>`;
  } else {
    mostrarPeliculas(pelisFiltradas);
  }
}

function resetearFiltros() {
  selectFases.value = "Todos";
  inputBuscador.value = "";

  mostrarPeliculas(peliculasMCU); // vuelve a mostrar todo
}

//------Eventos
selectFases.addEventListener("change", filtrarPeliculasTextoFaseyAnio);
inputBuscador.addEventListener("keyup", filtrarPeliculasTextoFaseyAnio);
botonReset.addEventListener("click", resetearFiltros);

/*
 * Intentaste filtrar sobre un array ya filtrado, o sea,
 * fuiste achicando el conjunto de pelis en cadena,
 *  y al final ya no quedaba nada que coincidiera con ambos filtros.
 */


//DESORDENAR RANDOMMMMMMMMMMM AL CARGAR LOS PRODUCTOS
/*
function desordenar(array){

  let arrayOrdenRandom=[];

  let arrayCopia=[];

  for (let i = 0; i < array.length; i++) {
arrayCopia.push(array[i]);

}


while(arrayCopia.length>0){
   //agarra un rno random del 0 al 1 y me lo multmp´lica por el alrgo de mi array, dandome un nro entre 0 y el largo de mi array y redondeo
  let random= Math.floor(Math.random()*arrayCopia.length);
  arrayOrdenRandom.push(arrayCopia[random]);
  arrayCopia.splice(random,1); //evita q se me repita la posicion
}

return arrayOrdenRandom;
}

let peliculasRandom= desordenar(peliculasMCU);
mostrarPeliculas(peliculasRandom);

*/