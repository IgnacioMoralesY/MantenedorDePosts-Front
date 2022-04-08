import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import InputNewPost from './InputNewPost'

import Button from 'react-bootstrap/Button'

import ModalComponent from './Modal'

const CreatePostModal = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({ title: '', body: '' })

  useEffect(() => {
    setData({
      title: 'Insertar Nuevo Post',
      body: (<InputNewPost onPress={() => setOpen(false)} />)
    })
  }, [])

  return (
    <div>
      <Button color='success' className='mb-2 cursor-pointer' onClick={() => setOpen(true)}> Crear Nuevo Post </Button>
      <ModalComponent open={open} setOpen={setOpen} data={data} />
    </div>
  )
}

export default connect(null, {})(CreatePostModal)
