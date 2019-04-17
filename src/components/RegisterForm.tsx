import * as React from 'react'
import { User } from '../interfaces/commonInterfaces'

import {
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Row,
	FormFeedback
} from 'reactstrap'
import {
	useInput,
	useEmailInput,
	usePhoneInput,
	UseInputInterface
} from '../utils/hooks'
import { JWTUser } from '@src/interfaces/reducerInterfaces'

const useEffect = React.useEffect
const useState = React.useState

export default (props: OwnProps) => {
	const name = useInput((props.user && props.user.name) || '', true)
	const tel = usePhoneInput((props.user && props.user.tel) || '')
	const email = useEmailInput((props.user && props.user.email) || '', true)
	const login = useInput(
		(props.user && props.user.login) || '',
		props.user === undefined
	)
	const password = useInput(
		(props.user && props.user.password) || '',
		props.user === undefined
	)
	const [error, setError] = useState(false)
	const user = {
		name: name.value,
		tel: tel.value,
		email: email.value,
		login: login.value,
		password: password.value
	}
	useEffect(() => {
		const errors = [name.error, email.error, login.error, password.error]
		setError(
			errors.some((error: string) => {
				return Boolean(error)
			})
		)
	}, [name.error, email.error, login.error, password.error])
	const checkTouched = () => {
		const fields = [name, email, login, password]
		const touched = fields.every(field => {
			if (field.touched) {
				return field.touched
			} else {
				return true
			}
		})
		for (const field of fields) {
			if (field.setTouched) {
				;(field as UseInputInterface).setTouched(true)
			}
		}
		return touched
	}
	const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!error && checkTouched()) {
			if (!props.user) {
				props.handleSave(user as User)
			} else {
				props.handleEdit(user as User)
			}
		}
	}
	return (
		<Form className='registerForm' onSubmit={handleSave}>
			<Row>
				<Col className='formInput' xs='12' lg='4'>
					<FormGroup>
						<Label for='name'>Nome</Label>
						<Input
							value={name.value}
							onChange={name.onChange}
							onBlur={name.onBlur}
							invalid={Boolean(name.error)}
							type='text'
							id='name'
							placeholder='Nome'
						/>
						<FormFeedback>{name.error}</FormFeedback>
					</FormGroup>
				</Col>
				<Col className='formInput' xs='12' lg='4'>
					<FormGroup>
						<Label for='tel'>Telefone</Label>
						<Input
							value={tel.value}
							onChange={tel.onChange}
							type='tel'
							name='tel'
							id='tel'
							placeholder='(48) 99999-9999'
						/>
					</FormGroup>
				</Col>
				<Col className='formInput' xs='12' lg='4'>
					<FormGroup>
						<Label for='email'>Email</Label>
						<Input
							value={email.value}
							onChange={email.onChange}
							onBlur={email.onBlur}
							invalid={Boolean(email.error)}
							type='email'
							name='email'
							id='email'
							placeholder='test@example.com'
						/>
						<FormFeedback>{email.error}</FormFeedback>
					</FormGroup>
				</Col>{' '}
				{!props.user && (
					<Col className='formInput' xs='12' lg='4'>
						<FormGroup>
							<Label for='login'>Login</Label>
							<Input
								value={login.value}
								onChange={login.onChange}
								onBlur={login.onBlur}
								invalid={Boolean(login.error)}
								type='text'
								id='login'
								placeholder='example99'
							/>
							<FormFeedback>{login.error}</FormFeedback>
						</FormGroup>
					</Col>
				)}{' '}
				{!props.user && (
					<Col className='formInput' xs='12' lg='4'>
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
					</Col>
				)}
			</Row>
			<FormGroup>
				<Button disabled={error} color='primary' type='submit'>
					{props.user ? 'salvar' : 'Adicionar'}
				</Button>
			</FormGroup>
		</Form>
	)
}

interface OwnProps {
	handleSave: (user: User) => void
	handleEdit: (user: User) => void
	user: JWTUser
}
