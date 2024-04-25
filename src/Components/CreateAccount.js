import React, {useState, useContext, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Alert } from 'react-bootstrap';
import { UserContext } from '../context';
const superagent = require('superagent');




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

  function handleCreate(event){
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    setErrorMessage('');
    if (!validate(name, 'name') || !validate(email, 'email') || !validate(password, 'password')){
      return;
    }

    //Crea el nuevo usuario
    const newUser = {name, email, password, role:"client", balance: 0, transactions: []};
    //Agrega nuevo usuario y registra la transacción

    //Realizar la solicitud POST al backend para crear la cuenta
    superagent
      .post('http://localhost:3000/api/create-account') // URL del backend
      .send(newUser)// Enviar los datos del nuevo usuario
      .set('Content-Type', 'application/json')
      .then(response =>{
        if(response.status === 201) {
          // Si la solicitud es exitosa, manejar la respuesta
          setStatus('Account created succesfully.');
          setShow(false);
        } else if (response.status >= 400 && response.status < 500) {
          setErrorMessage(response.body.message || 'Client error: Please check your inputs.');
        } else if (response.status >= 500 && response.status < 600) {
          setErrorMessage('Server error: Please try again later.');
        } else {
          setErrorMessage('Unknown error occurred.');

        }
      })
      .catch(error => {
        console.error('Error creating account:', error);
        setErrorMessage('Error creating account');
      })

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
