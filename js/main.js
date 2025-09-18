// Creamos las constantes globales para los elementos principales 

const input =document.getElementById("to-do-input");
const addbtn = document.getElementById("add-btn");
const ToDoList = document.getElementById("cont-to-do-list");
const CompletedList = document.getElementById("cont-completed");

// Creamos la función que nos permite crear una nueva tarea 
// Todas las etiquetas que vamos a crear parten de la maqueta HTML preexistente


// Esta funcion solo crea la estructura del html , la deja en el limbo, aun no la inserta en la pagina 
function createToDoItem(textoItem){
    // Creamos el nodo o elemento padre
    const item =document.createElement("div");
    item.classList.add("item-to-do");

    // Creamos el nodo o elemento hijo y le agregamos el nodo checkbox
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";

    // Creamos el siguiente nodo hijo (párrafo). 
    // A este párrafo le asignamos el valor del argumento de la función, 
    // es decir, lo que escribe el usuario en el campo
    const p =document.createElement("p");
    p.textContent=textoItem;

    // Creamos el último nodo hijo: el botón de eliminar
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="x";

    // Ensamblamos dentro del nodo padre sus nodos hijos, es decir, la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // Utilizamos return para devolver el elemento creado, ya que lo usaremos en otra función más adelante
    return item;
} 

// Detectamos el evento click sobre el botón "Agregar" con un event listener
// A partir de este evento se agregará la tarea dentro del contenedor cont-to-do-list

addbtn.addEventListener('click', ()=>{
    const textoItem=input.value.trim();
    if (textoItem=="") {
        alert("No se puede crear una tarea vacia")
    } else {
        const newItem = createToDoItem(textoItem);
        ToDoList.appendChild(newItem);
        input.value="";
        eventsToItem(newItem);
    }


});

// La siguiente funcion nos permitira agregar en funcionamiento principal sobre  las tareas es decir marcar la tarea como terminada o completada

function eventsToItem(item){
    // utilizamos query selector para capturar el input y el button que esta dentro del item
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button'); 
    
    // Completar la tarea o marcarla como terminada

    checkbox.addEventListener('change', ()=>{
        if(checkbox.checked){
        CompletedList.appendChild(item);

        }else{
            ToDoList.appendChild(item);

        }
    })

    // eliminar una tarea

    deleteBtn.addEventListener('click', ()=>{
        item.remove();
    })


}


