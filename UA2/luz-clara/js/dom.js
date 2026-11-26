// dom.js - Recorre el árbol de nodos de index.html (al final del body)

// document.title: el texto que está dentro de la etiqueta <title>
console.log(`Título de la página: ${document.title}`);

// documentElement es el nodo <html>: la raíz de todos los elementos
const raiz = document.documentElement;
// tagName: nombre de la etiqueta en MAYÚSCULAS (HTML)
// children.length: cuántos hijos tiene <html> (2: <head> y <body>)
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);

// document.body es el nodo <body>
const cuerpo = document.body;
// Recorre los hijos directos de <body>: <header>, <main>, <footer>…
for (const hijo of cuerpo.children) {
  // Los <script> también son hijos de <body>: aquí se saltan
  if (hijo.tagName !== "SCRIPT") {
    // Muestra la etiqueta del hijo y su id (ej.: MAIN · id contenido)
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}

// children[1] = segundo hijo de <body> (posición 1): el <main>
const principal = cuerpo.children[1];
// parentElement SUBE un nivel: el padre de <main> es <body>
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);
// firstElementChild BAJA un nivel: el primer hijo de <main>
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);
// children.length: cuántas secciones hay dentro de <main>
console.log(`Secciones dentro de <main>: ${principal.children.length}`);
