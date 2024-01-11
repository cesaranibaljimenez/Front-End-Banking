import React, { useContext } from 'react';
import { Card, Table } from 'react-bootstrap'; // Importar desde react-bootstrap
import { UserContext } from '../context';

function AllData() {
    const { users } = useContext(UserContext);


    return (
      <Card className="mt-4 mx-3" bg="light">
          <Card.Body>
              <Card.Title>All User Data</Card.Title>
              <Table striped bordered hover>
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Password</th>
                      </tr>
                  </thead>
                  <tbody>
                      {users.map((user, index) => (
                          <tr key={index}>
                              <th scope="row">{index + 1}</th>
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

