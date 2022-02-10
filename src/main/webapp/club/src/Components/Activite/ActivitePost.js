import React, { Component, Fragment } from "react";
import axios from "axios";
import { Buffer } from "buffer";

import {
  Button,
  CardImg,
  Card,
  CardSubtitle,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";

class ActivitePost extends Component {
  state = {
    isLoading: true,
    activites: [],
    file: "",
  };

  async componentDidMount() {
    const response = await fetch("/api/activites");
    const body = await response.json();
    this.setState({ activites: body, isLoading: false });
  }

  render() {
    const { activites, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    let buffer = new Buffer(activites[0].image, "base64");
    let imageSrc = buffer.toString();
    console.log("HERE IMAGE SRC : ", imageSrc);
    console.table(activites);
    return (
      <Fragment>
        <table>
          {activites.map((activite) => (
            <Card>
              <CardImg
                top
                width="100%"
                src={`${new Buffer(activites[0].image.toString(), "base64")}`}
                alt={activites.nom}
                style={{ width: "300px", height: "300px" }}
              />
              <CardBody>
                <CardTitle style={{ fontSize: "40px" }}>
                  {activite.nom}
                </CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>{activite.description}</CardText>
                <Button>S'abonner</Button>
              </CardBody>
            </Card>
          ))}
        </table>
      </Fragment>
    );
  }
}

export default ActivitePost;
