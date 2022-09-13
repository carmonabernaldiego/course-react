import '../assets/style/contacto.css'

function Contacto() {
  const users = [{
    name: 'Josue',
    lastName: 'Galdamez'
  },
  {
    name: 'José',
    lastName: 'Escobar'
  },
  {
    name: 'Diego',
    lastName: 'Carmona'
  }];

  return (
    <div className='container'>
      <h1>Lista de Contactos</h1>
      {users.map((users)=>(<span>{users.name} {users.lastName}</span>))}
    </div>
  );
}

export default Contacto