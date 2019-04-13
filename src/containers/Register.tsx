import * as React from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'

import {
	Container,
	Col,
	Button,
	Row,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle
} from 'reactstrap'

class Register extends React.Component<any, any> {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Container>
					<RegisterForm />
					<Row>
						<Col className='formInput' xs='12' md='6' lg='4' xl='3'>
							<Card>
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</CardText>
									<Button>Button</Button>
								</CardBody>
							</Card>
						</Col>
						<Col className='formInput' xs='12' md='6' lg='4' xl='3'>
							<Card>
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</CardText>
									<Button>Button</Button>
								</CardBody>
							</Card>
						</Col>
						<Col className='formInput' xs='12' md='6' lg='4' xl='3'>
							<Card>
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</CardText>
									<Button>Button</Button>
								</CardBody>
							</Card>
						</Col>
						<Col className='formInput' xs='12' md='6' lg='4' xl='3'>
							<Card>
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</CardText>
									<Button>Button</Button>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		)
	}
}

export default Register
