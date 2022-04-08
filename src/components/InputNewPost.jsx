import React, { useState } from 'react'
import { connect } from 'react-redux'
import { savePost, setMessage } from '../actions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const InputNewPost = ({ savePost, onPress, setMessage }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const addPost = () => {
    if (name.length > 0 && description.length > 0) {
      savePost({ name, description })
      onPress()
    } else {
      setMessage({ title: 'Ups!', message: 'Debe completar todos los datos!', status: 'warning' })
    }
  }

  return (
    <Form>
      <Form.Group controlId='formBasicName'>
        <Form.Label>Nombre</Form.Label>
        <input
          name='name'
          type='text'
          className='form-control'
          placeholder='Ingrese un nombre'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formBasicDescription'>
        <Form.Label>Descripción</Form.Label>
        <textarea
          name='description'
          className='form-control'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button
        variant='primary'
        onClick={() => { addPost() }}
      >
        Insertar
      </Button>
    </Form>
  )
}

export default connect(null, { savePost, setMessage })(InputNewPost)
