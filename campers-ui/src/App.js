import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CampersContainer from './containers/campers/CampersContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CampersContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
