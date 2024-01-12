import React, { useState, useContext } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from '../context';

function Deposit() {
    const [depositAmount, setDepositAmount] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [showStatus, setShowStatus] = useState(false);
    const [statusType, setStatusType] = useState(''); // 'success' o 'danger'
    const { users, setUsers, currentUser, setCurrentUser, addTransaction } = useContext(UserContext);

    const handleDeposit = (e) => {
        e.preventDefault();
        setShowStatus(false);

        // Validar entrada numérica
        if (isNaN(depositAmount) || depositAmount === '') {
            setStatusMessage('Please enter a numerical value.');
            setStatusType('danger');
            setShowStatus(true);
            return;
        }

        // Validar números positivos
        const amount = parseFloat(depositAmount);
        if (amount < 0) {
            setStatusMessage('Only positive numbers are allowed')
            setStatusType('danger');
            setShowStatus(true);
            return;
        }

        // actualizar el saldo y registrar transacción
        const updatedUser = {...currentUser, balance: currentUser.balance + amount };
        setCurrentUser(updatedUser);
        addTransaction(currentUser.email, 'Deposit', amount);
        setStatusMessage('Deposit succesful.');
        setStatusType('succes'); 
        setShowStatus(true);   
        setDepositAmount('');
    };

    return (
        <Card bg="primary" text="white" style={{ maxWidth: '18rem' }}>
            <Card.Header>Deposit</Card.Header>
            <Card.Body>
                <Card.Title>Current Balance: ${currentUser?.balance}</Card.Title>
                <Form onSubmit={handleDeposit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="text"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                            placeholder="Enter amount"
                        />
                    </Form.Group>
                    <Button variant="light" type="submit" disabled={depositAmount === ''}>
                        Deposit
                    </Button>
                </Form>
                {showStatus && <Alert variant={statusType}>{statusMessage}</Alert>}
            </Card.Body>
        </Card>
    );
}

export default Deposit;