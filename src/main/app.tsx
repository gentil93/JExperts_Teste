import * as React from 'react'
import { bindActionCreators } from 'redux'
require('./app.css')
import MainRouter from '../components/mainRouter'

class App extends React.Component<any, any> {
	render() {
		return <MainRouter />
	}
}
export default App
