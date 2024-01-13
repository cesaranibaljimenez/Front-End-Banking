import React, { useState, useContext } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from '../context';

function Withdraw() {
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [showStatus, setShowStatus] = useState(false);
    const [statusType, setStatusType] = useState(''); // 'success' o 'danger'
    const { users, setUsers, currentUser, setCurrentUser, addTransaction } = useContext(UserContext);

    const handleWithdraw = (e) => {
        e.preventDefault();
        setShowStatus(false);

        // Verificar si el valor ingresado es numérico
        if (isNaN(withdrawAmount) || withdrawAmount === '') {
            setStatusMessage('Please enter a numerical value.');
            setStatusType('danger');
            setShowStatus(true);
            return;
        }
        


        // Convertir a número y verificar el saldo
        const amount = parseFloat(withdrawAmount);

        if (amount < 0) {
          setStatusMessage('Only positive numbers are allowed')
          setStatusType('danger');
          setShowStatus(true);
          return;
      }

        if (amount > currentUser.balance) {
        //Si el monto a retira es amyor que el saldo
            setStatusMessage('Transaction failed: insufficient funds.')
            setStatusType('danger');
       
          
        } else {
            // Actualizar el saldo y registrar la transacción
            const updatedUser = {...currentUser, balance: currentUser.balance - amount };
            setCurrentUser(updatedUser);
            addTransaction(currentUser.email, 'Withdraw', amount);
            setStatusMessage('Withdrawal successful.');
            setStatusType('success');
        }

        setShowStatus(true);
        setWithdrawAmount('');
    };

    return (
        <Card bg="primary" text="white" style={{ maxWidth: '18rem' }}>
            <Card.Header>Withdraw</Card.Header>
            <Card.Body>
                <Card.Title>Current Balance: ${currentUser?.balance}</Card.Title>
                <Form onSubmit={handleWithdraw}>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="text"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            placeholder="Enter amount"
                        />
                    </Form.Group>
                    <Button variant="light" type="submit" disabled={withdrawAmount === ''}>
                        Withdraw
                    </Button>
                </Form>
                {showStatus && <Alert variant={statusType}>{statusMessage}</Alert>}
            </Card.Body>
        </Card>
    );
}

export default Withdraw;
