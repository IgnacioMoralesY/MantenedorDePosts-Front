import React from 'react'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalComponent = ({ open, setOpen, data }) => {
  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {data.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {data.body}
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={() => setOpen(false)}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default connect(null, {})(ModalComponent)
