import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SingleContactComponent from "../components/SingleContact"

const Contacts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SingleContactComponent />
          <SingleContactComponent />
          <SingleContactComponent />
          <SingleContactComponent />
          <SingleContactComponent />
          <SingleContactComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default Contacts
