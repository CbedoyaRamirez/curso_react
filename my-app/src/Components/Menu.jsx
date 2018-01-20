import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return ( 
            <Navbar>
                <Navbar.Header className="navbar-header, before">
                    <Navbar.Brand className="navbar-brand">
                        <a href="#home">PaloSanto "Memorias en yeso"</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className="nav navbar-nav">
                    <NavItem eventKey={1} href="#">
                        Link
			        </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
			        </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} href="#">
                        Link
			        </NavItem>                     
                </Nav>
            </Navbar>
        )
    }
}

export default Menu;