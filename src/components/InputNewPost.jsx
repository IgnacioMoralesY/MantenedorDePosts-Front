import React from 'react';
import { connect } from 'react-redux';
import { setInputName, setInputDescription, savePost, resetInputs } from '../actions'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InputNewPost = ({inputs, setInputName, setInputDescription, savePost, resetInputs, onPress}) => { 
	const name = inputs.name;
	const description = inputs.description;

	const addPost = async() => {
		if(name && description){
			await savePost({name,description});
			resetInputs();
		}
	}

	return(
		<Form>
			<Form.Group controlId="formBasicName">
				<Form.Label>Nombre</Form.Label>
				<input 
					name='name' 
					type='text' 
					className='form-control' 
					placeholder='Ingrese un nombre' 
					value={name} 
					onChange={e => setInputName(e.target.value)}
				/>
			</Form.Group>


			<Form.Group controlId="formBasicDescription">
				<Form.Label>Descripción</Form.Label>
				<textarea 
					name='description' 
					className='form-control' 
					value={description} 
					onChange={e => setInputDescription(e.target.value)} 
				>
				</textarea>
			</Form.Group>

			<Button 
				variant="primary" 
				onClick={() => { 
					addPost();
					onPress();
					} 
				}
			>
				Insertar
			</Button>
		</Form>
	)
};

const mapStateProps = ({inputs}) => ({inputs});

export default connect(mapStateProps, { setInputName, setInputDescription, savePost, resetInputs })(InputNewPost);
