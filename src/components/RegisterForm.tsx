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

const useEffect = React.useEffect
const useState = React.useState

export default (props: OwnProps) => {
	const name = useInput('', true)
	const tel = usePhoneInput('')
	const email = useEmailInput('', true)
	const login = useInput('', true)
	const password = useInput('', true)
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
			return field.touched
		})
		for (const field of fields) {
			;(field as UseInputInterface).setTouched(true)
		}
		return touched
	}
	const handleSave = async () => {
		if (!error && checkTouched()) {
			props.handleSave(user as User)
		}
	}
	return (
		<Form className='registerForm'>
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
				</Col>
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
			</Row>
			<FormGroup>
				<Button disabled={error} color='primary' onClick={handleSave}>
					Adicionar
				</Button>
			</FormGroup>
		</Form>
	)
}

interface OwnProps {
	handleSave: (
		user: User
	) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
