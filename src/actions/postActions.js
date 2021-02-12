import { DELETE_POST, DELETE_POST_ERROR, SAVE_POST, GET_POSTS, SAVE_POST_ERROR, CLEAR_MESSAGE } from './types';
import { getPostsFetch, saveNewPost, deletePostByPostId } from '../services/postService';

export const deletePost = (postId) => dispatch => {
	deletePostByPostId(postId)
		.then(response => {
			if(response.error){
				dispatch(postDeleteError());
			}else{
				dispatch(postDeleteSuccess(response));
			}
		})
		.catch(() => {
			dispatch(postDeleteError());
		});
};

export const savePost = (post) => dispatch => {
	saveNewPost(post)
		.then(response => {
			if(response.error){
				if(JSON.stringify(response.error).includes('401')){
					dispatch(postCreatedError('Error, este Post ya se encuentra creado!'));
				}else{
					dispatch(postCreatedError('Error, Problema interno del servidor, no se ha podido crear el nuevo Post. Lo lamentamos'));
				}
			}else{
				dispatch(postCreatedSuccess(response));
			}
		})
		.catch(() => {
			dispatch(postCreatedError('Error, Problema interno del servidor, no se ha podido crear el nuevo Post. Lo lamentamos'));
		});
};

export const getPosts = () => dispatch => {
	getPostsFetch()
		.then(response => {
			dispatch({
                type: GET_POSTS,
                posts: response
            });
		})
		.catch( () => {
			dispatch({
                type: GET_POSTS,
                posts: []
            });
		});
};

export const clearMessage = () => ({
	type: CLEAR_MESSAGE
});

const postCreatedSuccess = newPost => ({
	type: SAVE_POST,
	newPost
});

const postCreatedError = (message) => ({
	type: SAVE_POST_ERROR,
	message
});

const postDeleteSuccess = response => ({
	type: DELETE_POST,
	postId: response.id
});

const postDeleteError = () => ({
	type: DELETE_POST_ERROR
});