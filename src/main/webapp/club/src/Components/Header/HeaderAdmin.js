import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./Header.css";

export default class HeaderAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className="head">
          <NavbarBrand href="/" className="brand">
            Fitness Club
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/admin">Acceuil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/activite">Activités</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/membres">Membres</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/centres">Réservations</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
