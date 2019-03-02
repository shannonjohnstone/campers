import React from 'react';
import { Table } from 'react-bootstrap';

const CampersTable = ({ campers }) => {
  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>Ranking</th>
          <th>ID</th>
          <th>Username</th>
          <th>Profile Image</th>
          <th>Monthly Total</th>
          <th>All Time Total</th>
        </tr>
      </thead>
      <tbody>
        {campers.map(camper => (
          <tr key={camper.id}>
            <td>{camper.id}</td>
            <td>{camper.id}</td>
            <td>{camper.username}</td>
            <td>
              <img src={camper.avatar} alt={camper.username} />
            </td>
            <td>{camper.monthly_total}</td>
            <td>{camper.total}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CampersTable;
