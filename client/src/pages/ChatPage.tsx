import React from 'react'
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'
import SmallDialog from '../components/SmallDialog'
import Message from '../components/Message'

const Chat = () => {
  return (
    <Container>
      <Row>
        <Col sm="4">
          <SmallDialog />
          <SmallDialog />
          <SmallDialog />
          <SmallDialog />
          <SmallDialog />
          <SmallDialog />
        </Col>
        <Col sm="8">
          <div>
            <ButtonGroup>
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </div>
          <Message />
          <Message />
          <Message />
          <Form className="pt-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="dark" type="submit">Отправить</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Chat
