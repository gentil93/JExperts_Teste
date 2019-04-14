import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RootReducerInterface } from '../interfaces/reducerInterfaces'
import { Container, Col, Row } from 'reactstrap'

import { User } from '../interfaces/commonInterfaces'
import Card from '../components/UserCard'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'

class Register extends React.Component<Props, State> {
	editUser = (user: User) => {
		return () => {}
	}
	deleteUser = (user: User) => {
		return () => {}
	}
	renderCards = () => {
		const { users } = this.props
		console.log(users)
		return users.map((user, index) => {
			return (
				<Col
					key={index}
					className='formInput'
					xs='12'
					md='6'
					lg='4'
					xl='3'
				>
					<Card
						email={user.email}
						login={user.login}
						name={user.name}
						tel={user.tel}
						onDelete={this.deleteUser(user)}
						onEdit={this.editUser(user)}
					/>
				</Col>
			)
		})
	}
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Container>
					<RegisterForm />
					<Row>{this.renderCards()}</Row>
				</Container>
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch)
const mapStateToProps = (state: RootReducerInterface) => ({
	users: state.UsersReducer.users
})

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(Register)

interface OwnState {}

interface OwnProps {}

interface StateProps {
	users: RootReducerInterface['UsersReducer']['users']
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
