import * as React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default (props: OwnProps) => {
	const { onEdit, onDelete, name, tel, email, login } = props
	return (
		<Card>
			<CardBody>
				<div className='actions'>
					<i className='iconLeft fas fa-edit' onClick={onEdit} />
					<i className='fas fa-trash-alt' onClick={onDelete} />
				</div>
				<CardTitle>{name}</CardTitle>
				<p>
					<i className='iconLeft fas fa-phone' />
					<span>{tel}</span>
				</p>
				<p>
					<i className='iconLeft fas fa-at' />
					<span>{email}</span>
				</p>
				<p>
					<i className='iconLeft fas fa-user' />
					<span>{login}</span>
				</p>
			</CardBody>
		</Card>
	)
}

interface OwnProps {
	onEdit?: any
	onDelete?: () => void
	name: string
	tel: string
	email: string
	login: string
}
