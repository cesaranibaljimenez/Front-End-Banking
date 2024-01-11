import React, { useContext } from 'react';
import { Card, Table } from 'react-bootstrap'; // Importar desde react-bootstrap
import { UserContext } from '../context';

function AllData() {
    const { users } = useContext(UserContext);

    return (
        <Card className="mt-4" bg="light">
            <Card.Body>
                <Card.Title>All User Data</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => ( // Corregir la función map aquí
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default AllData;

