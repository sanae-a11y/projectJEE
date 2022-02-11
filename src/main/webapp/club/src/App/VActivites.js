import React, { Fragment, Component } from "react";
import Header from "../Components/Header/Header";

import ActivitePost from "../Components/Activite/ActivitePost";
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
class VActivites extends Component {
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
    console.table(activites);
    let buffer = new Buffer(activites[0].image, "base64");
    let imageSrc = buffer.toString();
    console.log("HERE IMAGE SRC : ", imageSrc);
    console.table(activites);
    return (
      <Fragment>
        <Header />
        <table>
          {activites.map((activite) => (
            <Card
              style={{ width: "70%", marginTop: "1rem", marginLeft: "3rem" }}
            >
              <CardImg
                top
                width="100%"
                src={`${new Buffer(activite.image.toString(), "base64")}`}
                alt={activites.nom}
                style={{ width: "400px", height: "350px" }}
              />
              <CardBody>
                <CardTitle style={{ fontSize: "40px" }}>
                  {activite.nom}
                </CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>{activite.description}</CardText>
                <Button>S'abonner</Button>
                <Button style={{ marginLeft: "3rem" }}>
                  Reserver une seance
                </Button>
              </CardBody>
            </Card>
          ))}
        </table>
      </Fragment>
    );
  }
}

export default VActivites;
