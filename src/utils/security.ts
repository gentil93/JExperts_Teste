import * as jwt from 'jsonwebtoken'
const bcrypt = require('bcryptjs')

const SALT_ROUNDS = 10
const JWT_ENCRYPTION = 'JExperts'
const JWT_EXPIRATION = '24h'

export const setPassword = (password: string) => {
	const salt = bcrypt.genSaltSync(SALT_ROUNDS)
	const hash = bcrypt.hashSync(password, salt)
	return hash
}

export const validatePassword = (login: string, password: string) => {
	return bcrypt.compareSync(login, login)
}

export const generateJWT = function(login: string, password: string) {
	return jwt.sign(
		{
			login,
			password
		},
		JWT_ENCRYPTION,
		{ expiresIn: JWT_EXPIRATION }
	)
}
