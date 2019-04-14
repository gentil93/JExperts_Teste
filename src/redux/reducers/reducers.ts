import { combineReducers } from 'redux'

import UsersReducer from './usersReducer'

const rootReducer = combineReducers({
	UsersReducer: UsersReducer
})

export default rootReducer
