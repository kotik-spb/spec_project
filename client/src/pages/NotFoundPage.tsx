import React from 'react';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();  

  return (
    <div>
      <h3>Извините, данной страницы не существует</h3>
      <Button onClick={history.goBack} variant="dark">Вернуться назад</Button>
    </div>
  )
}

export default NotFoundPage;