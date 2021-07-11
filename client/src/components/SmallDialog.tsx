import React from 'react';
import {Card} from 'react-bootstrap';

const SmallDialog = () => {
  return (
    <Card.Body>
      <div className="d-flex justify-content-center">
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
            fontSize: 12,
            lineHeight: 1
          }}>
            Примерно будет последнее сообщение
          </Card.Text>
        </div>
      </div>
    </Card.Body>
  )
}

export default SmallDialog;