import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ErrorBoundary from './components/ErrorBoundary';
import CampersContainer from './containers/campers/CampersContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ErrorBoundary>
              <CampersContainer />
            </ErrorBoundary>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
