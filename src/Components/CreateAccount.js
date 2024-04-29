import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Alert } from 'react-bootstrap';
import { UserContext } from '../context';
import {hashPassword}  from '../hashPassword';





function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');//estado para manejar los estados de error
  const {users, setUsers, addTransaction} = useContext(UserContext);

  useEffect(() => {
}, [users]);

  //verificar si algún campo esta lleno
  const isAnyFieldFilled = name !== '' || email !== '' || password !== '';
 

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

  async function handleCreate(event){
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    setErrorMessage('');
    if (!validate(name, 'name') || !validate(email, 'email') || !validate(password, 'password')){
      return;
    }

    try{
      const hashedPassword = await hashPassword(password);
      //Crea el nuevo usuario
      const newUser = {name, email, password: hashedPassword, balance: 0, transactions: []};
      // Hacer la solicitud POST al backend para crear la cuenta
      console.log('Enviando solicitud POST al backend...');
      const response = await axios.post('http://localhost:8080/api/CreateAccount', newUser);
      console.log('Respuesta del servidor:', response);
      if (response.status === 201) {
        setStatus('Account created successfully.');
        setShow(false);
        // Agregar nuevo usuario y registrar la transacción
        addTransaction(email, 'Account Creation', 0, newUser);
        setUsers([...users, newUser]);
      } else {
        console.log('Error: código de estado inesperado', response.status);
        setErrorMessage('Unknown error occurred.');
      }
    } catch (error) {
      console.error('Error hashing password:', error);
      console.error('Error creating account:', error);
      setErrorMessage('Error creating account');
    }
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
