const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

boton.addEventListener("click", function () {
    const tarea = input.value.trim();

    if (tarea === "") {
        alert("Escribe una tarea");
        return;
    }

    const elemento = document.createElement("li");

    elemento.textContent = tarea;

    elemento.addEventListener("click", function () {
        elemento.style.textDecoration = "line-through";
    });

    lista.appendChild(elemento);

    input.value = "";
});