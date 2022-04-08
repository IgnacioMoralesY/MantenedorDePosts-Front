import React from 'react'
import { connect } from 'react-redux'
import { clearMessage } from '../actions/index'

import swal from 'sweetalert'

const Message = ({ messageState, clearMessage }) => {
  if (messageState.sendMessage) {
    const { title, message, status } = messageState.messages

    setTimeout(() => {
      swal(title, message, status)
        .then(() => {
          return clearMessage()
        })
    }, 300
    )
  }

  return (
    <></>
  )
}

const mapStateProps = ({ messageState }) => ({ messageState })

export default connect(mapStateProps, { clearMessage })(Message)
