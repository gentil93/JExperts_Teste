import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RootReducerInterface, JWTUser } from '../interfaces/reducerInterfaces'
import { Container, Col, Row } from 'reactstrap'

import { User } from '../interfaces/commonInterfaces'
import { addUser, editUser } from '../redux/actionCreators/usersActions'
import Card from '../components/UserCard'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'
import { generateJWT, setPassword } from '../utils/security'

class Register extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { formKey: 1, user: null, userIndex: null }
	}
	editUserClicked = (user: User, index: number) => {
		return () => {
			this.setState({
				user,
				userIndex: index,
				formKey: this.state.formKey + 1
			})
		}
	}
	editUser = (editedUser: JWTUser) => {
		const { editUser } = this.props
		const { userIndex } = this.state
		editUser(editedUser, userIndex)
		this.setState({
			formKey: this.state.formKey + 1,
			user: null,
			userIndex: null
		})
	}
	deleteUser = (user: User) => {
		return () => {}
	}
	addUser = (user: User) => {
		const { addUser } = this.props
		const hashedUser = this.hashUser(user)
		addUser(hashedUser)
		this.incrementFormKey()
	}
	handleUser = (user: User) => {}
	hashUser = (user: User) => {
		user.password = setPassword(user.password)
		user.token = generateJWT(user.login, user.password)
		return user
	}
	incrementFormKey = () => {
		this.setState({
			formKey: this.state.formKey + 1,
			...this.state
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
						onEdit={this.editUserClicked(user, index)}
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
						handleSave={this.addUser}
						user={this.state.user}
						handleEdit={this.editUser}
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
			editUser,
			addUser
		},
		dispatch
	)
const mapStateToProps = (state: RootReducerInterface) => ({
	users: state.UsersReducer.users,
	token: state.UsersReducer.loggedUser
})

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(Register)

interface OwnState {
	user: JWTUser
	formKey: number
	userIndex: number
}

interface OwnProps {}

interface StateProps {
	users: RootReducerInterface['UsersReducer']['users']
}

interface DispatchProps {
	addUser: any
	editUser: any
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
