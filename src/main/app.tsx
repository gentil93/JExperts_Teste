import * as React from 'react'
require('./app.css')
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RootReducerInterface } from '../interfaces/reducerInterfaces'

import { updateUsers } from '../redux/actionCreators/usersActions'
import MainRouter from '../components/mainRouter'

class App extends React.Component<Props, State> {
	componentDidMount() {
		const { updateUsers } = this.props
		const savedUsers = JSON.parse(localStorage.getItem('users'))
		if (savedUsers) {
			updateUsers(savedUsers)
		}
	}
	render() {
		return <MainRouter token={this.props.token} />
	}
}

const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators(
		{
			updateUsers
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
)(App)

interface OwnState {}

interface OwnProps {}

interface StateProps {
	users: RootReducerInterface['UsersReducer']['users']
	token: RootReducerInterface['UsersReducer']['loggedUser']
}

interface DispatchProps {
	updateUsers: any
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
