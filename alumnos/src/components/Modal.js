import React from 'react'

import { Modal, Button } from 'react-bootstrap'
import FormAlumno from './FormAlumno'

const Form = ({ show, titulo, onClick }) => {
  return (
    <div>
      <Modal show={show} onHide={() => onClick({ result: 0, msg: 'Cerrar' })}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormAlumno />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => onClick({ result: 0, msg: 'Cerrar' })}
          >
            Cerrar
          </Button>
          <Button
            variant='primary'
            onClick={() => onClick({ result: 1, msg: 'Enviar' })}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Form
