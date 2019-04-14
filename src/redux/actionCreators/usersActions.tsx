import { Dispatch } from 'redux'
import { history } from '../../main/history'
import { UsersReducer } from '../../interfaces/reducerInterfaces'
import { User } from '../../interfaces/commonInterfaces'

export const addUser = (user: User) => {
	return (dispatch: Dispatch<any>, getState: any) => {
		updateLocalStorage(user, getState().UsersReducer.users)
		dispatch({
			type: 'ADD_USER',
			payload: user
		})
	}
}

const updateLocalStorage = (user: User, stateUsers: User[]) => {
	let newStorageUsers = []
	if (stateUsers.length > 0) {
		newStorageUsers = [...stateUsers, user]
	} else {
		newStorageUsers = [user]
	}
	localStorage.setItem('users', JSON.stringify(newStorageUsers))
}

export const updateUser = (users: User[]) => {
	return (dispatch: Dispatch<any>, getState: any) => {
		dispatch({
			type: 'UPDATE_USERS',
			payload: users
		})
	}
}
