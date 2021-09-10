import React from 'react'
import { Card, Button } from 'react-bootstrap'

const SingleContactComponent = () => {
  return (
    <Card.Body>
      <div className="d-flex justify-content-center">
        <img
          width="100px"
          height="100px"
          src="https://image.shutterstock.com/image-vector/digital-noise-50x50-color-squares-600w-1936482712.jpg"
          alt="аватар"
          className="mr-2"
        />
        <div className="d-flex justify-content-center flex-column">
          <h4>Иван Иванов</h4>
          <div className="d-flex justify-content-flex-start">
            <Button className="mr-3" variant="info" type="submit">Написать сообщение</Button>
            <Button variant="danger" type="submit">Удалить из друзей</Button>
          </div>
        </div>
      </div>
    </Card.Body>
  )
}

export default SingleContactComponent
