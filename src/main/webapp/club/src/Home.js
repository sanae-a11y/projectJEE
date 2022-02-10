import React, { Component } from "react";
import "./Components/App/App.css";
import AppNavbar from "./Components/Navbar/AppNavbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button color="link">
            <Link to="/adherents">Adherents</Link>
          </Button>
        </Container>
      </div>
    );
  }
}

export default Home;
