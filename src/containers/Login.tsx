import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoginForm from '../components/loginForm'
import { loggedIn } from '../redux/actionCreators/usersActions'
import { RootReducerInterface } from '../interfaces/reducerInterfaces'
import { UserLogin } from '../interfaces/commonInterfaces'
import { setPassword } from '../utils/security'

class Login extends React.Component<Props, State> {
	handleLogin = (user: UserLogin) => {
		const { login, password } = user
		this.props.loggedIn(user)
	}
	render() {
		return <LoginForm handleLogin={this.handleLogin} />
	}
}

const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators(
		{
			loggedIn
		},
		dispatch
	)
const mapStateToProps = (state: RootReducerInterface) => ({})

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(Login)

interface OwnState {}

interface OwnProps {}
interface StateProps {}

interface DispatchProps {
	loggedIn: any
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
