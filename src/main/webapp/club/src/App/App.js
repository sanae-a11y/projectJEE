import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import casaImg from "../Images/casa.jpg";
import rabatImg from "../Images/cardio.jpg";
import fesImg from "../Images/fes.jpg";
import Post from "../Components/Activite/ActivitePost";
import Header from "../Components/Header/Header";
import SideCard from "../Components/Adherent/AdherentCard";
import Landing from "../Components/Landing/Landing";

const App = () => (
  <Fragment>
    <Header />

    <main className="my-5 py-5">
      <Container className="px-0">
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Landing style={{ marginTop: "10rem" }} />
        </Row>
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <h1>CENTRES </h1>
        </Row>
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col
            xs={{ order: 2 }}
            md={{ size: 4, order: 1 }}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <SideCard title="Casablanca" srcImg={casaImg} />
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ size: 4, order: 1 }}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <SideCard title="Rabat" srcImg={rabatImg} />
          </Col>
          <Col
            xs={{ order: 2 }}
            md={{ size: 4, order: 1 }}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <SideCard title="Fes" srcImg={fesImg} />
          </Col>
        </Row>
      </Container>
    </main>
  </Fragment>
);

export default App;
