import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import AdherentList from "../Components/Adherent/AdherentList";
import HeaderMembre from "../Components/Header/HeaderMember";

export default function Avis() {
  return (
    <div>
      <HeaderMembre />
      <h3
        style={{ marginTop: "4rem", fontFamily: "cursive", marginLeft: "4rem" }}
      >
        Donner mon avis sur le Club:
      </h3>
      <Form
        style={{
          marginTop: "4rem",
          fontFamily: "cursive",
          marginLeft: "4rem",
          width: "500px",
        }}
      >
        <FormGroup>
          <Label for="exampleText" style={{ fontSize: "30px" }}>
            Avis
          </Label>
          <Input
            type="textarea"
            name="avis"
            id="avis"
            style={{
              height: "300px",
            }}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
