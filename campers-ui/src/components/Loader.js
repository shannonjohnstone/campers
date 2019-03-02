import React from 'react';
import { bool } from 'prop-types';
import './Loader.css';

const Loader = ({ isLoading = false }) => {
  return isLoading ? <div className="loader">Loading...</div> : null;
};

Loader.propTypes = {
  isLoading: bool.isRequired,
};

export default Loader;
