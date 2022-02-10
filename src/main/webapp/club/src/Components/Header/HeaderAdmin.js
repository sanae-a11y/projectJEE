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
                <NavLink href="/acceuil">Acceuil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/activitesAdmin">Activités</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/membres">Membres</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/centres">Réservations</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Logout
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/login/">Admin</NavLink>{" "}
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/login/">Membre</NavLink>{" "}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Aide ?</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
