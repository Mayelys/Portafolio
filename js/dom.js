let titulo = document.getElementById("titulo");
titulo.style.color = "red";

let parrafos = document.getElementsByTagName("p");
Array.from(parrafos).forEach((el, idx) => {
el.innerText = "Texto " + (idx + 1);
});

let parrafos2 = document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor ="greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo párrafo</strong>";

let parrafo = document.querySelector(".parrafo");
parrafo.className = "nuevo-parrafo";

let parrafo1 = document.createElement("p");
parrafo.innerText = "Nuevo párrafo";
document.body.appendChild(parrafo1);

let h1 = document.querySelector("h1");
let hr = document.createElement("hr");
let nuevoParrafo = document.createElement("p");

document.body.insertBefore(nuevoParrafo, h1);
document.body.insertAfter(hr, nuevoParrafo);

// let parrafo = document.querySelector("p");
//document.body.removeChild(parrafo); // Se elimina por referencia

//let ultimo_parrafo = document.querySelector("p:last-child");
//ultimo_parrafo.remove();

//let nodo = document.body;

//while (nodo.firstChild) {
//nodo.removeChild(nodo.firstChild);}
//document.body.innerHTML = "";

let parrafo2 = document.querySelector("p");
let padre_parrafo = parrafo2.parentElement;
console.log(padre_parrafo); // body

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++) {
   let item = document.createElement("li");
   item.innerText = `Elemento ${i}`;
   lista.appendChild(item);
}

padre_parrafo.appendChild(lista);
