import React, { Component, Fragment } from "react";
import axios from "axios";
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
    console.log("HERE IMAGE SRC : ", activites[0].image);
    return (
      <Fragment>
        <table>
          {activites.map((activite) => (
            <Card>
              <CardImg
                top
                width="100%"
                src={activites.src}
                alt={activites.nom}
              />
              <CardBody>
                <CardTitle>{activite.nom}</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>{activite.description}</CardText>
                <Button>Abonner</Button>
              </CardBody>
            </Card>
          ))}
        </table>
      </Fragment>
    );
  }
}

export default ActivitePost;
