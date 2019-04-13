import * as React from 'react'

import {
	Container,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap'

class Login extends React.Component<any, any> {
	render() {
		return (
			<Container className='App'>
				<h2>JExperts CRUD</h2>
				<Form className='loginForm'>
					<FormGroup>
						<Label>Email</Label>
						<Input
							type='email'
							name='email'
							id='exampleEmail'
							placeholder='myemail@email.com'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='examplePassword'>Password</Label>
						<Input
							type='password'
							name='password'
							id='examplePassword'
							placeholder='********'
						/>
					</FormGroup>
					<Button color='primary' block>
						Login
					</Button>
				</Form>
			</Container>
		)
	}
}

export default Login
