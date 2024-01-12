import React, {useState, useContext, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Alert } from 'react-bootstrap';
import { UserContext } from '../context';




function CreateAccount() {
  console.log('Renderizadondo CreateAccount');
  const [show, setShow] = useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');//estado para manejar los estados de error
  const {users, setUsers, addTransaction} = useContext(UserContext);

  useEffect(() => {
    console.log('Usuarios actualizados:', users);
}, [users]);

  //verificar si algún campo esta lleno
  const isAnyFieldFilled = name !== '' || email !== '' || password !== '';
 

  console.log('Contexto en CreateAccount:', users);

  function validate(field, label){
    if (!field) {
      setErrorMessage(`Error: Please enter your ${label}`);
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }
    //Verificación de formato de correo electrónico
    if (label === 'email' && !/\S+@\S+/.test(email)){
      setErrorMessage('Error: Please enter a valid email');
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }
    if (label === 'password' && password.length < 8){
      //Verificación de lonsgitud de contraseña
      setErrorMessage('Error: Password must be at least 8 characters long');
      setTimeout(() => setErrorMessage(''), 3000);
      return false
    }
    return true;
  }

  function handleCreate(event){
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    console.log('Creando cuenta:', name, email, password);
    console.log(name, email, password);
    setErrorMessage('');
    if (!validate(name, 'name') || !validate(email, 'email') || !validate(password, 'password')){
      return;
    }

    //Crea el nuevo usuario
    const newUser = {name, email, password, balance: 0, transactions: []};
    //Agrega nuevo usuario y registra la transacción
    addTransaction(email, 'Account Creation', 0, newUser);
    setUsers([...users, newUser]);
    
    console.log('Usuarios actualizados:', users);
    setShow(false);
    setStatus('Account created successfully.');
  }

    function clearForm() {
      setName('');
      setEmail('');
      setPassword('');
      setStatus('');
      setShow(true);
    }
  
    return (
      <Card bg="primary" text="white" style={{ maxWidth: "18rem" }}>
        <Card.Header>Create an Account</Card.Header>
        <Card.Body>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {show ? (
            <form onSubmit={handleCreate}>
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
              <button type="submit" className="btn btn-light" disabled={!isAnyFieldFilled}>Create Account</button>
            </form>
          ) : (
            <>
              {status && <h5>{status}</h5>}
              <button type="button" className="btn btn-light" onClick={clearForm}>Add another Account</button>
            </>
          )}
        </Card.Body>
      </Card>
    );
}

export default CreateAccount;
