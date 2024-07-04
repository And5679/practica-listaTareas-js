function agregarTarea() {
  //Obtenemos el valor del input
  let textoNuevaTarea = document.getElementById("nuevaTarea").value;

  //Validamos que no este vacio ese campo de text
  if (textoNuevaTarea === "") {
    alert("Por favor,ingrese una tarea");
    return;
  }


  //Creamos elementos de la lista 

  let nuevaTarea=document.createElement("li");
  nuevaTarea.textContent=textoNuevaTarea + " ";

  //Crear boton de eliminar

  let botonEliminar=document.createElement("button")
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick=function () {nuevaTarea.remove()}

 //Asociar boton de Eliminar al elemento de la lista

 nuevaTarea.appendChild(botonEliminar)


 //Agregar el elemento /Osea la tarea a la lista 

 document.getElementById("listaTareas").appendChild(nuevaTarea);

 //Limpiar el cuadro del texto del nombre de la tarea

 document.getElementById("nuevaTarea").value="";

}
