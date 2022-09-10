import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
//)
//const Saludar = () => {} Arrow Functions
//function Saludar(params) {} Función declarativa
//const Saludar = function() {} Función expresiva
//Los compontentes deben tener un contenedor padre

function Saludar() {
  const name = 'Diego Carmona Bernal';
  let edad = 25;
  let yearBorn = 1997;
  let mayorEdad = true;

  //if (mayorEdad) {
    //return (<p>{name} es mayor de edad</p>);
  //} else {
    //return (<p>{name} es menor de edad</p>);
  //}

  const users = [{
    name: 'Diego',
    lastName: 'Carmona Bernal'
  },
  {
    name: 'Carlos',
    lastName: 'Hernandez'
  }];

  //return (<p>{user[1].name} es {mayorEdad ? 'mayor' : 'menor'} de edad</p>);

  return (
    <p>
      {users.map((user) => {
        return (
          <p>{user.name}</p>
        );
      }
      )}
    </p>
  );

  return (
    <div>
      <h1>¡Hola { name }!</h1>
      <h2>Bienvenido, tu edad es: { 2022 - yearBorn }</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
<div>{ Saludar() }</div>
);