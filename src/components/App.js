import React, { useState } from 'react';
import { Container, Button, Form, Col, Row } from 'react-bootstrap';

function App() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    // Calculate the age based on the date of birth
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    const diffInMilliseconds = Math.abs(today - birthDate);
    const ageInYears = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));

    setAge(ageInYears);
  };

  return (
    <Container className='mt-5'>
      <h1 className="text-center">Age Calculator</h1>
      <h4 className="text-center mt-2">Enter your date of birth</h4>
      <Form className='mt-4'>
        <Row className="justify-content-center">
          <Col sm="6">
            <Form.Control
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              style={{ maxWidth: '60%', margin:'0 auto' }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3" style={{ width:'100px', margin:'0 auto' }}>
          <Button variant="primary" onClick={calculateAge}>
            Calculate Age
          </Button>
        </Row>
      </Form>
      {age !== '' && (
        <h2 className="text-center mt-4">You are {age} years old</h2>
      )}
    </Container>
  );
}

export default App;
