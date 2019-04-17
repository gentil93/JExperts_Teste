import * as React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { JWTUser } from '../interfaces/reducerInterfaces'

class DeleteModal extends React.Component<OwnProps, any> {
	render() {
		return (
			<div>
				<Modal isOpen={this.props.open}>
					<ModalHeader toggle={this.props.handleClose}>
						Modal title
					</ModalHeader>
					<ModalBody>
						<p>Você tem certeza que deseja deletar o usuário</p>
						<p>{this.props.user.name}</p>
					</ModalBody>
					<ModalFooter>
						<Button
							color='primary'
							block
							onClick={this.props.handleDelete}
						>
							Sim
						</Button>{' '}
						<Button
							block
							color='danger'
							onClick={this.props.handleClose}
						>
							Não
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default DeleteModal

interface OwnProps {
	handleClose: any
	handleDelete: any
	open: boolean
	user: JWTUser
}

interface State {}
