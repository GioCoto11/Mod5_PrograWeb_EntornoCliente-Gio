//vista.js - VISTA: Muestra los datos (por ahora en consola)
class VsitaReservas {
  //recibe la ista de reservas del modelo y la escribe en el <ol>
  mostrar(lista) {
    //el <ol> id="lista-reservas" que se agregó en contacto.html
    const ol = document.getElementById("lista-reservas");
    //varciar el ol para no repetir reservas
    ol.innerHTML = "";
    lista.forEach((r) => {
      const li = document.createElement("li");
    });
  }
}
