import * as React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as ReactDOM from 'react-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import 'bootstrap/dist/css/bootstrap.css'
import reducers from './redux/reducers/reducers'
import App from './main/app'
import RegisterSW from './utils/registerSW'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

RegisterSW()
