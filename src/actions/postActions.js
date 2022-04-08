import { DELETE_POST, SAVE_POST, GET_POSTS, CLEAR_MESSAGE, LOADING_INI, LOADING_OFF } from './types'
import { getPostsFetch, saveNewPost, deletePostByPostId } from '../services/postService'
import { setMessage } from './messagesActions'

export const deletePost = (postId) => dispatch => {
  const sendMessage = { title: 'Error!', message: 'No ha podido eliminar el Post', status: 'error' }
  dispatch(loadingIni())
  deletePostByPostId(postId)
    .then(response => {
      if (response.status !== 200) {
        dispatch(setMessage(sendMessage))
      } else {
        sendMessage.title = 'Exitoso!'
        sendMessage.message = 'Tu Post se ha eliminado de forma correcta'
        sendMessage.status = 'success'
        dispatch(setMessage(sendMessage))
        dispatch(postDeleteSuccess(response.data.post))
      }
      dispatch(loadingOff())
    })
    .catch(() => {
      dispatch(setMessage(sendMessage))
      dispatch(loadingOff())
    })
}

export const savePost = (post) => dispatch => {
  const sendMessage = { title: 'Error!', message: 'No ha podido crear el Post', status: 'error' }
  dispatch(loadingIni())
  saveNewPost(post)
    .then(response => {
      if (response.status !== 200) {
        dispatch(setMessage(sendMessage))
      } else {
        sendMessage.title = 'Exitoso!'
        sendMessage.message = 'Tu Post se ha creado de forma correcta'
        sendMessage.status = 'success'
        dispatch(setMessage(sendMessage))
        dispatch(postCreatedSuccess(response.data.post))
      }
      dispatch(loadingOff())
    })
    .catch(() => {
      dispatch(setMessage(sendMessage))
      dispatch(loadingOff())
    })
}

export const getPosts = () => dispatch => {
  const sendMessage = { title: 'Ups!', message: 'No se han encontrado datos!', status: 'error' }
  dispatch(loadingIni())
  getPostsFetch()
    .then(response => {
      if (response.status !== 200) {
        dispatch(setMessage(sendMessage))
      } else {
        dispatch(fetchPostSuccess(response.data))
      }
      dispatch(loadingOff())
    })
    .catch(() => {
      dispatch(setMessage(sendMessage))
      dispatch(loadingOff())
    })
}

const loadingIni = () => ({
  type: LOADING_INI
})

const loadingOff = () => ({
  type: LOADING_OFF
})

const fetchPostSuccess = (posts) => ({
  type: GET_POSTS,
  posts
})

export const clearMessage = () => ({
  type: CLEAR_MESSAGE
})

const postCreatedSuccess = newPost => ({
  type: SAVE_POST,
  newPost
})

const postDeleteSuccess = response => ({
  type: DELETE_POST,
  postId: response.id
})
