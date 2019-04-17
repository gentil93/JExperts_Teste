import { UsersReducer, Action } from '../../interfaces/reducerInterfaces'
import { User } from '../../interfaces/commonInterfaces'

const INITIAL_STATE: UsersReducer = {
	users: [
		{
			email: 'teste@teste.com',
			login: 'teste',
			name: 'Teste',
			password:
				'$2a$10$tbOOlbAIjb63G2W9l6DEKOtN.1LXFzMlVszkWqF8fK9fC2xAqc/6a',
			tel: '48996071785'
		}
	],
	loggedUser: null,
	admin: {
		email: 'admin@example.org',
		name: 'admin',
		login: 'admin',
		password:
			'$2a$10$tbOOlbAIjb63G2W9l6DEKOtN.1LXFzMlVszkWqF8fK9fC2xAqc/6a',
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkODgyaGZablhROFp3aEJ3aWZLcTV0LjlvWXpWOHh4NGVFWVV6L2t6SUE2QUYxODZyUnh0aG0iLCJpYXQiOjE1NTU0NjA4NTAsImV4cCI6MTU1NTU0NzI1MH0.UXGAkmzfpaDpGk9SPCP9nhb-Z3bSXUf2-pHXdQ__HbM'
	},
	error: null
}

export default (state = INITIAL_STATE, action: UserActions) => {
	switch (action.type) {
		case 'ADD_USER':
			return { ...state, users: [...state.users, action.payload] }
		case 'UPDATE_USERS':
			return { ...state, users: [...action.payload] }
		case 'USER_LOGIN':
			return { ...state, loggedUser: action.payload }
		case 'UPDATE_ADMIN':
			return { ...state, admin: { ...state.admin, ...action.payload } }
		case 'UPDATE_ERROR':
			return { ...state, error: action.payload }
		default:
			return state
	}
}

type UserActions = UpdateUsers | AddUser | UserLogin | UpdateAdmin | UpdateError

interface UpdateUsers extends Action {
	type: 'UPDATE_USERS'
	payload: User[]
}

interface AddUser extends Action {
	type: 'ADD_USER'
	payload: User
}
interface UpdateError extends Action {
	type: 'UPDATE_ERROR'
	payload: string
}
interface UpdateAdmin extends Action {
	type: 'UPDATE_ADMIN'
	payload: User
}

interface UserLogin extends Action {
	type: 'USER_LOGIN'
	payload: UsersReducer['loggedUser']
}
