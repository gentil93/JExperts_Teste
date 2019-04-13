import { UsersReducer, Action } from '../../interfaces/reducerInterfaces'

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
		default:
			return state
	}
}

type UserActions = {
	type: ''
}
