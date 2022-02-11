import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
} from "reactstrap";
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
    console.log("ggggggggggggggggg", JSON.stringify(this.props));
    if (this.props.match.params.id !== "new") {
      console.log("UPDATEEEEEEEEEEE");
      const adherents = await (
        await fetch(`/api/adherents/${this.props.match.params.id}`)
      ).json();
      this.setState({ item: adherents });
    } else {
      console.log("INSEEEEERT");
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

    await fetch(
      "/api/adherents" + (item.id_adherent ? "/" + item.id_adherent : ""),
      {
        method: item.id_adherent ? "PUT" : "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    this.props.history.push("/api/adherents");
  }

  render() {
    const { item } = this.state;

    const title = (
      <h2 style={{ fontFamily: "cursive sans-serif" }}>
        {item.id_adherent ? "Modifier Adherent" : "Ajouter Adherent"}
      </h2>
    );

    return (
      <div>
        <HeaderAdmin />
        {/* Id : {this.props.match.params.id} */}
        <Container
          style={{ width: "600px", marginTop: "3rem", marginLeft: "4em" }}
        >
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="nom">Nom</Label>
              <Input
                type="text"
                name="nom"
                id="nom"
                value={item.nom || ""}
                onChange={this.handleChange}
                autoComplete="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Prénom</Label>
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
              <Label for="password">Mot de Passe</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={item.password || ""}
                onChange={this.handleChange}
                autoComplete="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="sexeSelect">Sexe</Label>
              <Input
                type="select"
                name="sexe"
                id="sexeSelect"
                value={item.sexe || ""}
                onChange={this.handleChange}
                autoComplete="sexe"
              >
                <option>--Sexe--</option>
                <option>H</option>
                <option>F</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/admin">
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
