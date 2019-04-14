import * as React from 'react'

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
import { useInput } from '../utils/hooks'

export default () => {
	const name = useInput('', true)
	const tel = useInput('')
	const email = useInput('')
	const login = useInput('', true)
	const password = useInput('', true)
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
							type='email'
							name='email'
							id='email'
							placeholder='test@example.com'
						/>
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
				<Col className='registerButton' xs='12' lg='4'>
					<FormGroup>
						<Button color='primary' block>
							Adicionar
						</Button>
					</FormGroup>
				</Col>
			</Row>
		</Form>
	)
}
