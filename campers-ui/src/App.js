import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CampersContainer from './containers/campers/CampersContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          {/* <Col lg={6}> */}
          <Col>
            <header className="">
              <p>Campers Leader Board</p>
            </header>
            <CampersContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
