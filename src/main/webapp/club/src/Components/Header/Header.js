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

export default class Header extends React.Component {
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
                <NavLink href="/v1">Activités</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/centres">Centres</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Se Connecter
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/loginAdmin/" color="secandary">
                      Admin
                    </NavLink>{" "}
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/loginMembre/" color="secandary">
                      Membre
                    </NavLink>{" "}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
