import React from 'react';
import { array } from 'prop-types';
import { Table } from 'react-bootstrap';
import Camper from './Camper';

const CampersTable = ({ campers = [] }) => {
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
          <Camper
            key={camper.username}
            camper={{ ...camper, rank: index + 1 }}
          />
        ))}
      </tbody>
    </Table>
  );
};

CampersTable.propTypes = {
  campers: array,
};

export default CampersTable;
