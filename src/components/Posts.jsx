import React, {useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BiTrash } from 'react-icons/bi';
import { deletePost, setInputNameSearch, getPosts, clearMessage } from '../actions';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pagination from './pagination';
import swal from 'sweetalert';

const Posts = ({ posts, inputs, deletePost , clearMessage,  setInputNameSearch, getPosts}) => {

	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(8);

	let name = inputs.nameSearch;

	useEffect(() => {
		getPosts();
	}, [])

	
	const filterPosts = posts.getPosts.filter(post => post.name.toLowerCase().includes(name.toLowerCase()));

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = filterPosts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	
	if(posts.sendMessage){
		setTimeout(() => {
			swal(posts.messages.title, posts.messages.message, posts.messages.status)
				.then(() => {
					return clearMessage();
				});
			}, 500
		);
	}

	return(
		<div>
			<Row>
				<Col className='d-flex'>
					<label className='labelSearch'> Filtrar</label>
					<input 
						name='search' 
						type='text' 
						className='form-control searchInput' 
						placeholder='Ingrese Nombre del Post' 
						onChange={e => setInputNameSearch(e.target.value)}
					/>
			    </Col>
			</Row>

			<Table striped bordered hover className='mb-0'>
			    <thead>
			    	<tr>
				        <th> Id </th>
				        <th> Nombre </th>
				        <th> Descripción </th>
				        <th> Acción </th>
			        </tr>
			    </thead>
				<tbody>
					{
						currentPosts.map((post, i) => (
							<tr key={i}>
								<td> {post.id} </td>
								<td> {post.name} </td>
								<td> {post.description} </td>
								<td> <BiTrash className='iconPost delete scale' onClick={() => deletePost(post.id)} /> </td>
							</tr>
						))
					}
				</tbody>
			</Table>
			<Row>
				<Col className='d-flex'>
					<Pagination postsPerPage={postPerPage} totalPosts={filterPosts.length} paginate={paginate} />
			    </Col>
				<Col xs={3} className='text-right'>
					<p className='mb-0 mt-1 mr-2'> Mostrando {currentPosts.length} de {filterPosts.length} Posts </p>
			    </Col>
			</Row>
			
		</div>
	)
};

const mapStateProps = ({posts, inputs}) => ({posts, inputs});


export default connect(mapStateProps, {deletePost, setInputNameSearch, getPosts, clearMessage})(Posts);

