import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RootReducerInterface } from '../interfaces/reducerInterfaces'
import { Container, Col, Row } from 'reactstrap'

import { User } from '../interfaces/commonInterfaces'
import { addUser } from '../redux/actionCreators/usersActions'
import Card from '../components/UserCard'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'
import { generateJWT, setPassword } from '../utils/security'

class Register extends React.Component<Props, State> {
	state = { formKey: 1 }
	editUser = (user: User) => {
		return () => {}
	}
	deleteUser = (user: User) => {
		return () => {}
	}
	addUser = (user: User) => {}
	handleUser = (user: User) => {
		const { addUser } = this.props
		const hashedUser = this.hashUser(user)
		addUser(user)
		this.incrementFormKey()
	}
	hashUser = (user: User) => {
		user.password = setPassword(user.password)
		user.token = generateJWT(user.login, user.password)
		return user
	}
	incrementFormKey = () => {
		this.setState({
			formKey: this.state.formKey + 1
		})
	}
	renderCards = () => {
		const { users } = this.props
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
					<RegisterForm
						key={this.state.formKey}
						handleSave={this.handleUser}
					/>
					<Row>{this.renderCards()}</Row>
				</Container>
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators(
		{
			addUser
		},
		dispatch
	)
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

interface DispatchProps {
	addUser: any
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
