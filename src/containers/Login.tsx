import * as React from 'react'

import { Container, Row, Col, Form, Input, Label } from 'reactstrap'

class Login extends React.Component<any, any> {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Form>
							<Label for='exampleEmail'>Email</Label>
							<Input
								type='email'
								name='email'
								id='exampleEmail'
								placeholder='with a placeholder'
							/>
						</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Login
