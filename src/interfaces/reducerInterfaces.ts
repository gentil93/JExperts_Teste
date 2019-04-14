import { User } from './commonInterfaces'

export interface RootReducerInterface {
	UsersReducer: UsersReducer
}

export interface UsersReducer {
	users: JWTUser[]
}

export interface Action {
	type: string
}

interface JWTUser extends User {
	token?: string
}
