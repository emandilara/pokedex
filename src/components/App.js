import React from 'react';
import Store from './store/Store'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppNavigation from './AppNavigation';
import AppRouter from './AppRouter';
import './styles/App.css';

function App() {
  return (
    <div className='app'>
      <Store>
        <AppNavigation />
        <Container fluid className='app-container'>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <AppRouter />
            </Col>
          </Row>
        </Container>
      </Store>
    </div>
  );
}

export default App;
