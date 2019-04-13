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
									<div className='actions'>
										<i
											className='iconLeft fas fa-edit'
											onClick={() => {
												console.log('hahaha')
											}}
										/>
										<i className='fas fa-trash-alt' />
									</div>
									<CardTitle>Matheus</CardTitle>
									<CardText>
										<p>
											<i className='iconLeft fas fa-phone' />
											<span>(48) 99607-1785</span>
										</p>
										<p>
											<i className='iconLeft fas fa-at' />
											<span>matheusg93@gmail.com</span>
										</p>
										<p>
											<i className='iconLeft fas fa-user' />
											<span>gentil93</span>
										</p>
									</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col className='formInput' xs='12' md='6' lg='4' xl='3'>
							<Card>
								<CardBody>
									<div className='actions'>
										<i
											className='iconLeft fas fa-edit'
											onClick={() => {
												console.log('hahaha')
											}}
										/>
										<i className='fas fa-trash-alt' />
									</div>
									<CardTitle>Matheus</CardTitle>
									<CardText>
										<p>
											<i className='iconLeft fas fa-phone' />
											<span>(48) 99607-1785</span>
										</p>
										<p>
											<i className='iconLeft fas fa-at' />
											<span>matheusg93@gmail.com</span>
										</p>
										<p>
											<i className='iconLeft fas fa-user' />
											<span>gentil93</span>
										</p>
									</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col className='formInput' xs='12' md='6' lg='4' xl='3'>
							<Card>
								<CardBody>
									<div className='actions'>
										<i
											className='iconLeft fas fa-edit'
											onClick={() => {
												console.log('hahaha')
											}}
										/>
										<i className='fas fa-trash-alt' />
									</div>
									<CardTitle>Matheus</CardTitle>
									<CardText>
										<p>
											<i className='iconLeft fas fa-phone' />
											<span>(48) 99607-1785</span>
										</p>
										<p>
											<i className='iconLeft fas fa-at' />
											<span>matheusg93@gmail.com</span>
										</p>
										<p>
											<i className='iconLeft fas fa-user' />
											<span>gentil93</span>
										</p>
									</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col className='formInput' xs='12' md='6' lg='4' xl='3'>
							<Card>
								<CardBody>
									<div className='actions'>
										<i
											className='iconLeft fas fa-edit'
											onClick={() => {
												console.log('hahaha')
											}}
										/>
										<i className='fas fa-trash-alt' />
									</div>
									<CardTitle>Matheus</CardTitle>
									<CardText>
										<p>
											<i className='iconLeft fas fa-phone' />
											<span>(48) 99607-1785</span>
										</p>
										<p>
											<i className='iconLeft fas fa-at' />
											<span>matheusg93@gmail.com</span>
										</p>
										<p>
											<i className='iconLeft fas fa-user' />
											<span>gentil93</span>
										</p>
									</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col className='formInput' xs='12' md='6' lg='4' xl='3'>
							<Card>
								<CardBody>
									<div className='actions'>
										<i
											className='iconLeft fas fa-edit'
											onClick={() => {
												console.log('hahaha')
											}}
										/>
										<i className='fas fa-trash-alt' />
									</div>
									<CardTitle>Matheus</CardTitle>
									<CardText>
										<p>
											<i className='iconLeft fas fa-phone' />
											<span>(48) 99607-1785</span>
										</p>
										<p>
											<i className='iconLeft fas fa-at' />
											<span>matheusg93@gmail.com</span>
										</p>
										<p>
											<i className='iconLeft fas fa-user' />
											<span>gentil93</span>
										</p>
									</CardText>
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
