import { Dispatch } from 'redux'
const bcrypt = require('bcryptjs')
import { UsersReducer, JWTUser } from '../../interfaces/reducerInterfaces'
import { history } from '../../main/history'
import { User, UserLogin } from '../../interfaces/commonInterfaces'
import { generateJWT, validatePassword } from '../../utils/security'
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

export const updateUsers = (users: User[]) => {
	return (dispatch: Dispatch<any>, getState: any) => {
		dispatch({
			type: 'UPDATE_USERS',
			payload: users
		})
	}
}

export const loggedIn = (user: UserLogin) => {
	return (dispatch: Dispatch<any>, getState: any) => {
		const { users, admin } = getState().UsersReducer
		try {
			const findedUser = findUser(user, users, admin)
			if (findedUser.type === 'admin') {
				dispatch({
					type: 'UPDATE_ADMIN',
					payload: findedUser
				})
			} else {
				const newList = generateNewUsersList(
					findedUser,
					getState().UsersReducer.users
				)
				localStorage.setItem('users', JSON.stringify(newList))
				updateUsers(newList)
			}
			history.push('/register')
			dispatch({
				type: 'USER_LOGIN',
				payload: findedUser.token
			})
		} catch (e) {
			dispatch({
				type: 'UPDATE_ERROR',
				payload: e
			})
		}
	}
}
const generateNewUsersList = (findedUser: any, users: JWTUser[]) => {
	users[findedUser.index].token = findedUser.token
	return users
}

const findUser = (user: UserLogin, users: JWTUser[], admin: JWTUser) => {
	if (isAdmin(user, admin)) {
		return {
			type: 'admin',
			token: generateJWT(user.login, user.password)
		}
	} else if (isUser(user, users)) {
		return {
			...isUser(user, users),
			token: generateJWT(user.login, user.password)
		}
	} else {
		throw new Error('Usuário não cadastrado')
	}
}

const isAdmin = (user: UserLogin, admin: JWTUser) => {
	return checkLogin(user as JWTUser, admin)
}

const checkLogin = (user: JWTUser, user2: JWTUser) => {
	return (
		user.login === user2.login &&
		bcrypt.compareSync(user.password, user2.password)
	)
}

const isUser = (user: UserLogin, registeredUsers: JWTUser[]) => {
	for (let i = 0; i < registeredUsers.length; i++) {
		if (checkLogin(user as JWTUser, registeredUsers[i])) {
			return {
				type: 'user',
				index: i
			}
		}
	}
	return false
}

export const editUser = (user: UserLogin, index: number) => {
	return (dispatch: Dispatch<any>, getState: any) => {
		const users = getState().UsersReducer.users
		users[index] = user
		const newList = [...users]
		localStorage.setItem('users', JSON.stringify(newList))
		updateUsers(newList)
	}
}

export const deleteUser = (user: User, index: number) => {
	return (dispatch: Dispatch<any>, getState: any) => {
		const users = getState().UsersReducer.users
		users.splice(index, 1)
		const newList = [...users]
		localStorage.setItem('users', JSON.stringify(newList))
		updateUsers(newList)
		if (user.token === getState().UsersReducer.loggedUser) {
			dispatch({
				type: 'USER_LOGIN',
				payload: null
			})
			history.push('/')
		}
	}
}
