import React from 'react';
import { bool } from 'prop-types';
import './Loader.css';

const Loader = ({ isLoading = false }) => {
  return isLoading ? <div className="loader" data-testid="loader" /> : null;
};

Loader.propTypes = {
  isLoading: bool.isRequired,
};

export default Loader;
