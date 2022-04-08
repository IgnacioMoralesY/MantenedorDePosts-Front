import { DELETE_POST, SAVE_POST, GET_POSTS, LOADING_INI, LOADING_OFF } from '../actions/types'
import { createReducer, Types as ReduxSauceTypes } from 'reduxsauce'

const INITIAL_STATE = {
  posts: [],
  loading: false
}

const fetchDataPosts = (state = INITIAL_STATE, action) => ({
  ...state,
  posts: action.posts
})

const loadingIni = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})

const loadingOff = (state = INITIAL_STATE) => ({
  ...state,
  loading: false
})

const deletePost = (state = INITIAL_STATE, action) => ({
  ...state,
  posts: state.posts.filter(post => post.id !== action.postId)
})

const savePost = (state = INITIAL_STATE, action) => ({
  ...state,
  posts: state.posts.concat(action.newPost)
})

const HANDLERS = {
  [GET_POSTS]: fetchDataPosts,
  [SAVE_POST]: savePost,
  [DELETE_POST]: deletePost,
  [LOADING_INI]: loadingIni,
  [LOADING_OFF]: loadingOff,
  [ReduxSauceTypes.DEFAULT]: state => state
}

export default createReducer(INITIAL_STATE, HANDLERS)
