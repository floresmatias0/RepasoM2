import React, { useState } from "react";


// REDUCER _________________________------------
const myCities={
  cities:[],
};


export const reducer=(state = myCities ,action) => {
  switch(action.type){
    case "AddCity": 
    return [...state.cities.concat(action.payload)]
    ;
    default:
      return state;
    
  }
  
}

// ACTIONS -----------------------
// por como esta diseñado el test, el id de la ciudad deberian colocarla al momento de agregarlo en el reducer
 export const addCity= (payload)=>{
   let suma = 1;
  return {
    type:"AddCity", payload:{
        city: payload.city,
        location: payload.location,
        temperatura: payload.temperatura,
        id: suma++
    }
  }
 }

 export const removeCity=(payload)=>{
   return {
     type:"RemoveCity", payload
   }
 }


 // COMPONENTE _--------------------
 // La idea es hacer una app donde uds mismos puedan ingresar una ciudad y renderizarlas en esta misma
 // hoja. Deberian hacer el form y renderizar lo que tendrian en el "estado local de redux"
 // la manera en la que pueden unir los componentes es al momento de agregar una ciudad es llamarlo de la siguiente
 // manera "onClick={reducer(EstadoActual,Accion(payload))}"
 // Recuerden que la idea es practicar y tener conceptos claros, con que entiendan los tests y sientan que entendieron
 // es suficiente.
export const App=() => {

  return(
  <form>
    <input name="city"></input>
    <textarea name="location"></textarea>
    <input name="temperatura"></input>
    <button type="submit">cerrar</button>
  </form>
  )
}

export default App;
