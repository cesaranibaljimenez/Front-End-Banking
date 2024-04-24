import React, { useState, useContext } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from '../context';

function Transfers() {
    const [transferAmount, setTransferAmount] = useState('');
    const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [showStatus, setShowStatus] = useState(false);
    const [statusType, setStatusType] = useState(''); // 'success' o 'danger'
    const { currentUser, setCurrentUser, addTransaction } = useContext(UserContext);

    const handleTransfer = (e) => {
        e.preventDefault();
        setShowStatus(false);

        // Verificar si los valores ingresados son numéricos
        if (isNaN(transferAmount) || isNaN(recipientAccountNumber) || transferAmount === '' || recipientAccountNumber === '') {
            setStatusMessage('Please enter numerical values for both amount and recipient account number.');
            setStatusType('danger');
            setShowStatus(true);
            return;
        }

        // Convertir a números y verificar el saldo
        const amount = parseFloat(transferAmount);

        if (amount < 0) {
            setStatusMessage('Only positive numbers are allowed for the transfer amount.');
            setStatusType('danger');
            setShowStatus(true);
            return;
        }

        if (amount > currentUser.balance) {
            setStatusMessage('Transaction failed: insufficient funds.');
            setStatusType('danger');
            setShowStatus(true);
            return;
        }

        // Actualizar el saldo y registrar la transacción
        const updatedUser = { ...currentUser, balance: currentUser.balance - amount };
        setCurrentUser(updatedUser);
        addTransaction(currentUser.email, 'Transferencia', amount);
        setStatusMessage('The money transfer was successful.');
        setStatusType('success');
        setShowStatus(true);

        // Reiniciar los campos de entrada
        setTransferAmount('');
        setRecipientAccountNumber('');
    };

    return (
        <Card bg="primary" text="white" style={{ maxWidth: '18rem' }}>
            <Card.Header>Transfer Money</Card.Header>
            <Card.Body>
                <Card.Title>Current Balance: ${currentUser?.balance}</Card.Title>
                <Form onSubmit={handleTransfer}>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="text"
                            value={transferAmount}
                            onChange={(e) => setTransferAmount(e.target.value)}
                            placeholder="Enter amount"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Recipient's Bank Account Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={recipientAccountNumber}
                            onChange={(e) => setRecipientAccountNumber(e.target.value)}
                            placeholder="Enter recipient's account number"
                        />
                    </Form.Group>
                    <Button variant="light" type="submit" disabled={transferAmount === '' || recipientAccountNumber === ''}>
                        Transfer Money
                    </Button>
                </Form>
                {showStatus && <Alert variant={statusType}>{statusMessage}</Alert>}
            </Card.Body>
        </Card>
    );
}

export default Transfers;

