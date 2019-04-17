import * as React from 'react'
import { Route, Router, Redirect } from 'react-router'
import { Switch } from 'react-router-dom'
import { history } from '../main/history'
import Login from '../containers/Login'
import Register from '../containers/Register'

export default (props: OwnProps) => {
	return (
		<Router history={history}>
			<div style={{ height: '100%' }}>
				<Switch>
					<Route exact path='/' render={() => <Login />} />
					<Route
						path='/register'
						render={() =>
							!props.token ? <Redirect to='/' /> : <Register />
						}
					/>
				</Switch>
			</div>
		</Router>
	)
}

interface OwnProps {
	token: string
}
