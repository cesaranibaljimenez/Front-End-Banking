import React from 'react';
import { Card } from 'react-bootstrap';

function Home(){

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Realizar una solicitud GET al backend para obtener un mensaje de bienvenida
    fetch('/api/welcome-message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching welcome message:', error));
  }, []);
  
  return (
    
        <Card bg="primary" text="white" style={{ maxWidth: "18rem"}}>
          <Card.Header>BadBank Landing Page</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to the bank</Card.Title>
            <Card.Text>You can use this bank</Card.Text>
            <img src="./bank.png" className="img-fluid" alt="Bad Bank Logo" />
          </Card.Body>
        </Card>
   
        
  );  
}

export default Home;
