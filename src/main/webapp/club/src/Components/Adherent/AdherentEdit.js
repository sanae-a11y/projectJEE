import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import HeaderAdmin from "../Header/HeaderAdmin";

class AdherentEdit extends Component {
  emptyItem = {
    nom: "",
    prenom: "",
    password: "",
    sexe: "",
    activites: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    if (this.props.match.params.id !== "new") {
      const adherent = await (
        await fetch(`/adherents/${this.props.match.params.id}`)
      ).json();
      this.setState({ item: adherent });
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

    await fetch("/adherents" + (item.id ? "/" + item.id : ""), {
      method: item.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    this.props.history.push("/adherents");
  }

  render() {
    const { item } = this.state;
    const title = <h2>{item.id ? "Edit Adherent" : "Add Adherent"}</h2>;

    return (
      <div>
        <HeaderAdmin />
        <Container>
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Nom</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={item.nom || ""}
                onChange={this.handleChange}
                autoComplete="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Prenom</Label>
              <Input
                type="text"
                name="prenom"
                id="prenom"
                value={item.prenom || ""}
                onChange={this.handleChange}
                autoComplete="prenom"
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/adherents">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
export default AdherentEdit;
