import React from 'react';
import { Table } from 'react-bootstrap';

const CampersTable = ({ campers }) => {
  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Avatar</th>
          <th>Username</th>
          <th>Monthly Total</th>
          <th>All Time Total</th>
        </tr>
      </thead>
      <tbody>
        {campers.map((camper, index) => (
          <tr key={camper.id}>
            <td>{index + 1}</td>
            <td>
              <img src={camper.avatar} alt={camper.username} />
            </td>
            <td>{camper.username}</td>
            <td>{camper.monthly_total}</td>
            <td>{camper.total}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CampersTable;
