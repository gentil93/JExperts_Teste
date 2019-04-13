import * as React from 'react'

import { Col, Form, FormGroup, Label, Input, Button, Row } from 'reactstrap'

export default () => (
	<Form className='registerForm'>
		<Row>
			<Col className='formInput' xs='12' lg='4'>
				<FormGroup>
					<Label for='name'>Nome</Label>
					<Input
						type='text'
						name='name'
						id='name'
						placeholder='Nome'
					/>
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
						type='text'
						name='login'
						id='login'
						placeholder='example99'
					/>
				</FormGroup>
			</Col>
			<Col className='formInput' xs='12' lg='4'>
				<FormGroup>
					<Label for='password'>Senha</Label>
					<Input
						type='password'
						name='password'
						id='password'
						placeholder='**********'
					/>
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
