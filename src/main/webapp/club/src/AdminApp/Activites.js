import React from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import PropTypes from "prop-types";
import HeaderAdmin from "../Components/Header/HeaderAdmin";

export default class AdminActiivites extends React.Component {
  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    await fetch("/api/activites" + (item.id ? "/" + item.id : ""), {
      method: item.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    this.props.history.push("/api/activites");
  }
  render() {
    return (
      <div>
        <HeaderAdmin />
        <Form style={{ marginTop: "5rem", marginLeft: "5rem", width: "700px" }}>
          <FormGroup>
            <Label for="nom">Nom d'activité</Label>
            <Input
              type="text"
              name="activite"
              id="activiteNom"
              placeholder="nom d'activité"
            />
          </FormGroup>
          <FormGroup>
            <Label for="nbr">Nombre max des membres</Label>
            <Input type="number" name="activite" id="nbrMax" placeholder="0" />
          </FormGroup>
          {/* <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup> */}
          {/* <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
          {/* <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Image</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          {/* <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option one is this and
              that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option two can be something
              else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Option three is
              disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup> */}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
