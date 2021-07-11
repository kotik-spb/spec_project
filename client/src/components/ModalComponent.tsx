import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { IModalParams } from '../types/common';

const ModalComponent = ({handleCancel, handleAccept, show}: IModalParams) => {


  return (
    <>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Удаление поста</Modal.Title>
        </Modal.Header>
        <Modal.Body>Вы действительно хотите удалить пост?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCancel}>
            Закрыть
          </Button>
          <Button variant="danger" onClick={handleAccept}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent
