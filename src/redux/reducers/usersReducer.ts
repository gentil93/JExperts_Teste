import { UsersReducer, Action } from '../../interfaces/reducerInterfaces'
import { User } from '../../interfaces/commonInterfaces'

const INITIAL_STATE: UsersReducer = {
	users: [
		{
			email: 'teste@teste.com',
			login: 'teste',
			name: 'Teste',
			password: '12345678',
			tel: '48996071785'
		}
	]
}

export default (state = INITIAL_STATE, action: UserActions) => {
	switch (action.type) {
		case 'ADD_USER':
			return { ...state, users: [...state.users, action.payload] }
		case 'UPDATE_USERS':
			return { ...state, users: [...action.payload] }
		default:
			return state
	}
}

type UserActions = UpdateUsers | addUser

interface UpdateUsers extends Action {
	type: 'UPDATE_USERS'
	payload: User[]
}

interface addUser extends Action {
	type: 'ADD_USER'
	payload: User
}
