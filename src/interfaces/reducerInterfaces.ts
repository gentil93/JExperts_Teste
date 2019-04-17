import { User } from './commonInterfaces'

export interface RootReducerInterface {
	UsersReducer: UsersReducer
}

export interface UsersReducer {
	users: JWTUser[]
	admin: JWTUser
	loggedUser: string
	error: string
}

export interface Action {
	type: string
}

export interface JWTUser extends User {
	token?: string
}
