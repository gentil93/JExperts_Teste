import * as React from 'react'
import { Route, Router, Redirect } from 'react-router'
import { Switch } from 'react-router-dom'
import { history } from '../main/history'
import Login from '../containers/Login'

export default () => {
	return (
		<Router history={history}>
			<div style={{ height: '100%' }}>
				<Switch>
					<Route path='/' render={() => <Login />} />
				</Switch>
			</div>
		</Router>
	)
}
