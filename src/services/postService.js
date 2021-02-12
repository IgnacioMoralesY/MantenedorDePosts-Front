import axios from 'axios';

export const getPostsFetch = () => (
	axios.get('http://localhost:3700/posts')
		.then(res => {
			return res.data
		})
		.catch(error => {
			console.log(error);
			return {error}
		})
);

export const saveNewPost = (post) => (
	axios.post('http://localhost:3700/post', post, {})
		.then(res => {
			return res.data
		})
		.catch(error => {
			return {error}
		})
);

export const deletePostByPostId = (postId) => (
	axios.delete('http://localhost:3700/post/'+postId)
		.then(res => {
			return res.data
		})
		.catch(error => {
			console.log(error);
			return {error}
		})
);

