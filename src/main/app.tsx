import * as React from 'react'
require('./app.css')
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RootReducerInterface } from '../interfaces/reducerInterfaces'

import { updateUser } from '../redux/actionCreators/usersActions'
import MainRouter from '../components/mainRouter'

class App extends React.Component<Props, State> {
	componentDidMount() {
		const { updateUser } = this.props
		const savedUsers = JSON.parse(localStorage.getItem('users'))
		if (savedUsers) {
			updateUser(savedUsers)
		}
	}
	render() {
		return <MainRouter />
	}
}

const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators(
		{
			updateUser
		},
		dispatch
	)
const mapStateToProps = (state: RootReducerInterface) => ({
	users: state.UsersReducer.users
})

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(App)

interface OwnState {}

interface OwnProps {}

interface StateProps {
	users: RootReducerInterface['UsersReducer']['users']
}

interface DispatchProps {
	updateUser: any
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
