import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import AppNavbar from "./AppNavbar";

class ActiviteEdit extends Component {
  emptyItem = {
    name: "",
    email: "",
  };
  async componentDidMount() {
    if (this.props.match.params.id !== "new") {
      const activite = await (
        await fetch(`/activites-admin/${this.props.match.params.id}`)
      ).json();
      this.setState({ item: activite });
    }
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    await fetch("/activites" + (item.id ? "/" + item.id : ""), {
      method: item.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    this.props.history.push("/activites");
  }

  render() {
    const { item } = this.state;
    const title = <h2>{item.id ? "Edit Activite" : "Add Activite"}</h2>;

    return (
      <div>
        <AppNavbar />
        <Container>
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={item.name || ""}
                onChange={this.handleChange}
                autoComplete="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                value={item.email || ""}
                onChange={this.handleChange}
                autoComplete="email"
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/clients">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
}
export default withRouter(ActiviteEdit);
