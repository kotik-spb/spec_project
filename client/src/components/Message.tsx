import React from 'react';
import {Card, CloseButton} from 'react-bootstrap';

const Message = () => {
  return (
    <Card.Body>
      <div className="d-flex justify-content-flex-start">
        <img
          width="50px"
          height="50px"
          src="https://image.shutterstock.com/image-vector/digital-noise-50x50-color-squares-600w-1936482712.jpg"
          alt="аватар"
          className="mr-2"
        />
        <div>
          <h6 style={{margin: 0}}>Иван Иванов</h6>
          <small>01.01.2021</small>
          <Card.Text style={{
            fontSize: 14,
            lineHeight: 1
          }}>
            Примерно будет сообщение в чате
          </Card.Text>
        </div>
        <CloseButton className="ml-auto" />
      </div>
    </Card.Body>
  )
}

export default Message;