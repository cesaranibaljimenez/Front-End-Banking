import React from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from '../context';



function Withdraw(){
  // estados a manejar en el formulario Withdraw
  const [withdrawAmount, setWithDrawAmount] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [showStatus, setShowMessage] = useState(false);
  const [statusType, setStatusType] = useState(''); // 'succes' o 'danger'
  const { currentUSer, setCurrentUser} = useContext(userContext);

  const handleWithdraw = (e) => {
    e.preventDefault();
    setShowStatus(false);

    // Verificar si el valor ingresado es númerico
    if (isNaN(withdrawAmount) || withdrawAmount ==='') {
        setStatusMessage('Please enter a numerical value.')
        setStatusType('danger');
        setShowStatus(true);
        return;
    }

    const amount = parseFloat(withdrawAmount);
    if (amount > currentUSer.balance) {
        setStatusMessage('Transactio faile: insuficient funds. ');
        setStatusType('danger');
    } else{
        //Actualizar saldo
        currentUSer.User.balance -= amount;
        setCurrentUser(currentUser);
        setStatusMessage('Withdrawal succesful.');
        setStatusType('succes');
    }

    setShowStatus(true);
    setWithdrawAmount();

  };

  return (
      <Card bg="primary" text="white" style={{maxWidth: '18rem'}}>
        <Card.Header>Withdraw</Card.Header>
        <Card.Body>
        <Card.Title>Current Balance: ${currentUser.balance}</Card.Title>
        <Form onSubmit={handleWithdraw}>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control>
                type="text"
                value={withdrawAmount}
                onChange={(e) => setWithDrawAmount(e.target.value)}
                placeholder="Enter amount"
            </Form.Control>
          </Form.Group>
          <Button variant="light" type="submit" disabled={withdrawAmount===''}>
            Withdraw
          </Button>
        </Form>
        {showStatus && <Alert variant={statusType}>{statusMessage}</Alert>}
        </Card.Body>
      </Card>
  );
}
  

export default Withdraw;
