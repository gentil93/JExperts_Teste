export interface User {
	name: string
	tel?: string
	email: string
	login: string
	password: string
	token?: string
}

export interface UserLogin {
	login: string
	password: string
}
