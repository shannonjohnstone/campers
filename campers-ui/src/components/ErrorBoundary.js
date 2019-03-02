import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ERROR_BOUNDARY_LOG:', error);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <Alert className="mt-5" variant="danger">
          Something has gone wrong while trying to retrieve campers information.
        </Alert>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
