import axios from 'axios'
const config = global.ENV[global.node_env]

export const getPostsFetch = () => (
  axios.get(`${config.apiPath}/post`)
    .then(res => {
      return res
    })
    .catch(error => {
      return { error }
    })
)

export const saveNewPost = (post) => (
  axios.post(`${config.apiPath}/post`, post, {})
    .then(res => {
      return res
    })
    .catch(error => {
      return { error }
    })
)

export const deletePostByPostId = (postId) => (
  axios.delete(`${config.apiPath}/post/${postId}`)
    .then(res => {
      return res
    })
    .catch(error => {
      return { error }
    })
)
