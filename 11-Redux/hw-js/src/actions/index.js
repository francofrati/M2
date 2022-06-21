const { INCREMENTO, DECREMENTO, ASYNC, IMPAR } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

function incremento(){
  return{
    type: INCREMENTO
  }
}

function decremento(){
  return{  
    type: DECREMENTO
  }
}

function async(){
  return{
    type:ASYNC
  }
}

function impar(){
  return{
    type:IMPAR
  }
}
module.exports = {
  incremento,
  decremento,
  async,
  impar,
}