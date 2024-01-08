import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import UserContext from '../Context/context';

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if(!validate(name, 'name')) return;
    if(!validate(email, 'email')) return;
    if(!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }
  // Define la función para manejar el evento del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página al enviar el formulario
    // Realiza la lógica para agregar una cuenta o usuario aquí
    // Puedes utilizar las variables name, email y password para obtener los valores del formulario
    // y luego actualizar el estado o realizar las acciones necesarias
    // También puedes utilizar setStatus para mostrar un mensaje de éxito o error
  };

  // Define la función para limpiar el formulario
  const clearForm = () => {
    // Esta función puede ser utilizada para reiniciar los valores de name, email y password
    // y ocultar el mensaje de estado (setStatus)
    setName('');
    setEmail('');
    setPassword('');
    setStatus('');
  };

  return (
    <Card bg="primary" text="white" style={{ maxWidth: "18rem" }}>
      <Card.Header>Create an Account</Card.Header> {/* Envuelve el contenido en una tarjeta de Bootstrap */}
      <Card.Body> {/* Cuerpo de la tarjeta */}
        <form onSubmit={handleSubmit}>
          {/* Aquí puedes agregar los campos del formulario */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* Fin de los campos del formulario */}
          <button type="submit" className="btn btn-primary btn-light">Create Account</button>
        </form>
        {/* Fragmento del formulario de éxito */}
        {status && (
          <>
            <h5>Success</h5>
            <button type="button" className="btn btn-light" onClick={clearForm}>Add another Account</button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
export default CreateAccount;
