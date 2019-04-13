import * as React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap'

export default () => {
	const [open, setOpen] = React.useState(false)
	return (
		<Navbar color='secondary' light expand='md'>
			<NavbarBrand className='headerItem'>JExperts</NavbarBrand>
			<NavbarToggler onClick={() => setOpen(!open)} />
			<Collapse isOpen={open} navbar>
				<Nav className='ml-auto' navbar>
					<NavItem>
						<NavLink href='/' onClick={() => console.log('ha')}>
							<span className='headerItem iconLeft'>Sair</span>
							<i className='headerItem fas fa-sign-out-alt' />
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	)
}
