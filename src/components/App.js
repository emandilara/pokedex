import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppNavigation from './AppNavigation';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className='app'>
      <AppNavigation />
      <Container fluid className='app-container'>
        <Row>
          <Col xs={12} md={12}>
            <AppRouter />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
