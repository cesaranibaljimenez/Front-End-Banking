import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { UserContext } from '../context';




function CreateAccount() {
  console.log('Renderizadondo CreateAccount');
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  //verificar si todos los registros estan llenos

  const allFieldsFilled = name !== '' && email !== '' && password !== '';

  console.log('Contexto en CreateAccount:', ctx);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate(event){
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    console.log('Creando cuenta:', name, email, password);
    console.log(name, email, password);
    if (!validate(name, 'name') || !validate(email, 'email') || !validate(password, 'password')) return;
    
    ctx.users.push({name, email, password, balance: 0});
    console.log('Usuario añadido:', ctx.users);
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
            <button type="submit" className="btn btn-light" disabled={!allFieldsFilled}>Create Account</button>
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

