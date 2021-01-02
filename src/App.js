import React, { useState } from "react";


// REDUCER _________________________------------
const myCities={
  cities:[],
};


export const reducer=(state = myCities ,action) => {
  
  switch(action.type){
    case "AddCity": 
    return {
      ...state,
      cities: state.cities.concat(action.payload={
        city: action.payload.city,
        location: action.payload.location,
        temperatura: action.payload.temperatura,
        id: state.cities.length+1}),
      
      }
    ;
    case "RemoveCity":
    return {
      ...state,
      cities: state.cities.filter(borrado => borrado.id !== action.payload)
    };
    default:
      return state;
    
  }
  
}

// ACTIONS -----------------------
// por como esta diseñado el test, el id de la ciudad deberian colocarla al momento de agregarlo en el reducer
 export const addCity= (payload)=>{
  return {
    type:"AddCity", payload
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
export const App = () => {
  const [input,setInput] = React.useState({
    city:"",
    location:"",
    temperatura:""
  })
  console.log(input)

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })  
  }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.addTodo(input)   
// } 

  let {city,location,temperatura} = input;

  return(
  <form>
    <input name="city" onChange={handleChange} value={city}></input>
    <textarea name="location" onChange={handleChange} value={location}></textarea>
    <input name="temperatura" onChange={handleChange} value={temperatura}></input>
    <button type="submit">cerrar</button>
  </form>
  )
}

export default App;
