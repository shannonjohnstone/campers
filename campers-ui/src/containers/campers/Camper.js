import React from 'react';
import PropTypes from 'prop-types';

const Camper = ({ camper }) => (
  <tr>
    <td>{camper.rank}</td>
    <td>
      <img src={camper.avatar} alt={camper.username} />
    </td>
    <td>{camper.username}</td>
    <td>{camper.monthly_total}</td>
    <td>{camper.total}</td>
  </tr>
);

Camper.propTypes = {
  camper: PropTypes.shape({
    rank: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    monthly_total: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
};

export default Camper;
