import * as React from 'react'
import {
	Container,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	FormFeedback
} from 'reactstrap'
import { useInput, UseInputInterface } from '../utils/hooks'
import { UserLogin } from '../interfaces/commonInterfaces'

export default (props: OwnProps) => {
	const login = useInput('', true)
	const password = useInput('', true)
	const checkTouched = () => {
		const fields = [login, password]
		const touched = fields.every(field => {
			return field.touched
		})
		for (const field of fields) {
			;(field as UseInputInterface).setTouched(true)
		}
		return touched
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!login.error && !password.error && checkTouched()) {
			props.handleLogin({
				login: login.value,
				password: password.value
			})
		}
	}
	return (
		<Container className='App'>
			<h2>JExperts CRUD</h2>
			<Form className='loginForm' onSubmit={handleSubmit}>
				<FormGroup>
					<Label for='login'>login</Label>
					<Input
						value={login.value}
						onChange={login.onChange}
						onBlur={login.onBlur}
						invalid={Boolean(login.error)}
						type='text'
						name='login'
						id='login'
						placeholder='admin'
					/>
					<FormFeedback>{login.error}</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for='password'>Senha</Label>
					<Input
						value={password.value}
						onChange={password.onChange}
						onBlur={password.onBlur}
						invalid={Boolean(password.error)}
						type='password'
						id='password'
						placeholder='**********'
					/>
					<FormFeedback>{password.error}</FormFeedback>
				</FormGroup>
				<Button color='primary' block type='submit'>
					Login
				</Button>
			</Form>
		</Container>
	)
}

interface OwnProps {
	handleLogin: (user: UserLogin) => void
}
