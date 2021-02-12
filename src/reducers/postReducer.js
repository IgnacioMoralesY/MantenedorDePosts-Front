import { DELETE_POST, DELETE_POST_ERROR, SAVE_POST, GET_POSTS , SAVE_POST_ERROR, CLEAR_MESSAGE } from '../actions/types';
import { createReducer, Types as ReduxSauceTypes } from 'reduxsauce';

const emptyPost = { id: '', name: '', description: ''};

const INITIAL_STATE  = {
	getPosts: [],
	newPost: emptyPost,
  sendMessage: false,
  messages: {
    title: '',
    message: '',
    status: ''
  }
}

const fetchDataPosts = (state = INITIAL_STATE, action) => ({
  ...state,
  getPosts: action.posts
});

const deletePost = (state = INITIAL_STATE, action) => ({
  ...state,
  getPosts: state.getPosts.filter(post => post.id !== action.postId ),
  sendMessage: true,
  messages: {
    title: 'Exito!',
    message: 'Post eliminado exitosamente!',
    status: 'success'
  }
});

const deletePostError = (state = INITIAL_STATE) => ({
  ...state,
  sendMessage: true,
  messages: {
    title: 'Error!',
    message: 'Error, el Post no se ha podido eliminar. Lo lamentamos',
    status: 'error'
  }
});

const savePost = (state = INITIAL_STATE, action) => ({
    ...state,
    getPosts: state.getPosts.concat(action.newPost),
    sendMessage: true,
    messages: {
      title: 'Exito!',
      message: 'Post ' + action.newPost.name + ' creado exitosamente!',
      status: 'success'
    }
});

const savePostError = (state = INITIAL_STATE, action) => ({
  ...state,
  sendMessage: true,
  messages: {
    title: 'Error!',
    message: action.message,
    status: 'error'
  }
});

const clearMessage = (state = INITIAL_STATE) => ({
    ...state,
    sendMessage: false,
    messages: {
      title: '',
      message: '',
      status: ''
    }
});

const HANDLERS = {
  [GET_POSTS]: fetchDataPosts,
  [SAVE_POST]: savePost,
  [SAVE_POST_ERROR]: savePostError,
  [DELETE_POST]: deletePost,
  [DELETE_POST_ERROR]: deletePostError,
  [CLEAR_MESSAGE]: clearMessage,
  [ReduxSauceTypes.DEFAULT]: state => state
}

export default createReducer(INITIAL_STATE, HANDLERS);