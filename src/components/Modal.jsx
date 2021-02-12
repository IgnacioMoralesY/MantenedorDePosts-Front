import React from 'react';
import InputNewPost from './InputNewPost'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ModalController extends React.Component{
	state = {
		modalIsOpen: false
	}

	showModal = () => {
		this.setState({
			modalIsOpen: true
		});
	}

	hideModal = () => {
		this.setState({
			modalIsOpen: false
		});
	}

	render() {
		return(
			<div>
				<Button color='success' className='mb-2 cursor-pointer' onClick={this.showModal}> Crear Nuevo Post </Button>
				<Modal show={this.state.modalIsOpen} onHide={this.hideModal}>
			      	<Modal.Header closeButton>
				        <Modal.Title>Insertar Nuevo Post</Modal.Title>
				    </Modal.Header>

				    <Modal.Body>
						<InputNewPost onPress={this.hideModal}/>
				    </Modal.Body>

			      	<Modal.Footer>
			        	<Button variant="secondary" onClick={this.hideModal}>Cancelar</Button>
			      	</Modal.Footer>
			    </Modal>
		    </div>
		)
	}
}


export default ModalController;





