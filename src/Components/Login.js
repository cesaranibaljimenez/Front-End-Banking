import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from '../context';

function Login() {
  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {users, setUsers, currentUser, setCurrentUser, addTransaction} = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
  
    //Lógica para verificar las credenciales del usurio
  const userFound = users.find(user => user.email === email);
  
    if(userFound && userFound.password === password){
        setCurrentUser(userFound);
        navigate('/') //Redireccionamiento del usuario al Home
    } else {
      setError('Credenciales incorrectas');
    }
}



  return (
    <Card bg="primary" text="white" style={{ maxWidth: '18rem' }}>
    <Card.Header>Login</Card.Header>
        <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="light" type="submit">Login</Button>
            </Form>
            {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
    </Card>
  );
  
};

export default Login;


