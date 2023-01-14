///PRACTICA INTEGRADORA///

//DESAFIO 1//
const tareas = [
  {
    Titulo: "Maquetar HTML",
    Estado: "Terminado",
  },
  {
    Titulo: "Estilar CSS",
    Estado: "En progreso",
  },
  {
    Titulo: "Crear JS",
    Estado: "Pendiente",
  },
];

console.log(tareas);


// DESAFIO 2 //
function agregarTareas (titulo, estado) {
    tareas.push ({Titulo: titulo, Estado: estado});
    return tareas
}
console.log (agregarTareas("Diseñar REACT", "Por estudiar"));

const mostrarTarea = (estado) => {
}

const progress = tareas.find ((obj) => {
console.log(obj)
tareas.Estado === "En progreso"

})

console.log (progress ("En progreso"))


// DESAFIO 3//
const listarTareas = (estado) => {
const estadoMin = estado.toLowerCase()
    if (estadoMin === "en progreso" || estadoMin === "pendiente" || estadoMin === "terminado") {
        const listadoTareas = tareas.filter(tarea => tarea.Estado.toLowerCase() === estadoMin);
        return listadoTareas;

    } 
    return tareas;
    
}

console.log(listarTareas("Pendiente"))


// //DESAFIO 4 //
const modificarEjDos = (titulo, estado) => {
  if (
    titulo === "Maquetar HTML" ||
    titulo === "Estilar CSS" ||
    titulo === "Crear JS" ||
    titulo === "Diseñar REACT"
  ) {
    return ("Ya existe")
  } else {
    
   tareas.push({ Titulo: titulo, Estado: estado });
    console.log(tareas);
  }
};
console.log(modificarEjDos("Andar en bicicleta", "Finalizado"));


// //DESAFIO 5//
const filtrarTarea = (texto) => {
  if (texto != "") {
      filtrar = tareas.filter(tarea => tarea.Titulo.includes(texto));
      if (filtrar.length > 0) {
          return filtrar;
      }
      else {
          return "No Existe..."
      }
  } else {
      return "No Existe...";
  }
}

console.log(filtrarTarea("Reac"));
 

  
 

