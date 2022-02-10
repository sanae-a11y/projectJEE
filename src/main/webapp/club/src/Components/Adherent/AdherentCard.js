import React, { Fragment } from "react";
import "./Card.css";
import {
  Button,
  UncontrolledAlert,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const BANNER = "//i.imgur.com/CaKdFMq.jpg";

const AdherentCard = (props) => (
  <Fragment>
    {/* <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Account not activated.</strong>
    </UncontrolledAlert> */}

    <Card>
      <CardImg top width="100%" src={props.srcImg} alt="banner" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
          {props.title}
        </CardTitle>
        <CardSubtitle
          className="text-secondary mb-3 font-weight-light text-uppercase"
          style={{ fontSize: "0.8rem" }}
        >
          {props.subTitle}
        </CardSubtitle>
        <CardText
          className="text-secondary mb-4"
          style={{ fontSize: "0.75rem" }}
        >
          {props.description}
        </CardText>
        <Button className="font-weight-bold" className="plus">
          Voir plus
        </Button>
      </CardBody>
    </Card>
  </Fragment>
);

export default AdherentCard;
