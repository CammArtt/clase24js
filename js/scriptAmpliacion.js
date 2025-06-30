//ELEMENTOS DEL DOM
const nombre = document.querySelector("#nombre");
const fecha = document.querySelector("#fecha");
const director = document.querySelector("#director");
const imagen = document.querySelector("#imagen");
const descripcion = document.querySelector("#descripcion");
const numeroFase = document.querySelector("#numeroFase");
const ulElenco = document.querySelector("ul");
const puntos = document.querySelector("#puntos");
const comentario = document.querySelector("#comentario");
const medio = document.querySelector("#medio");

// OBTENER ID DESDE LA URL
// Obtengo la parte de la URL que contiene los parámetros después del signo "?"
const ruta = window.location.search; 
// Ejemplo: "?id=3"
// Creo un objeto URLSearchParams para poder trabajar fácil con esos parámetros
const parametros = new URLSearchParams(ruta);
// Extraigo el valor del parámetro "id" de la URL
// Esto me devuelve el string que sigue a "id="
// En el ejemplo, idPelicula sería "3"
const idPelicula = parametros.get("id");
console.log(idPelicula)
// Ahora uso ese id para buscar la película en mi arreglo de películas
// Suponiendo que peliculasMCU es un array donde el índice coincide con el id
const pelicula = peliculasMCU[idPelicula]; // Ahora 'pelicula' tiene toda la información de la película que queremos mostrar
console.log(pelicula)

//Generar lista de elenco
let listaElenco = "";
for (let i = 0; i < pelicula.elenco.length; i++) {
  listaElenco += `<li>${pelicula.elenco[i]}</li>`;
}

//CARGAR INFO EN HTML
nombre.textContent = pelicula.nombre;
fecha.textContent = pelicula.fechaEstreno;
director.textContent = pelicula.director;
imagen.src = pelicula.portada;
descripcion.textContent = pelicula.descripcion;
numeroFase.textContent = pelicula.fase;
ulElenco.innerHTML = listaElenco;


puntos.textContent = `${pelicula.criticas[0].puntaje} puntos`;
comentario.textContent = `“${pelicula.criticas[0].comentario}”`;
medio.textContent = pelicula.criticas[0].medio;
