import { User } from './commonInterfaces'

export interface RootReducerInterface {
	users: UsersReducer
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
