import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >

            <h1 style={{ fontSize: "2.1em", paddingTop: "120px" }}>
              Who am <strong className="purple">I?</strong>
            </h1>

            <hr></hr>
            <Aboutcard />
            <hr style={{ marginBottom: "260px" }}></hr>

          </Col>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <hr></hr>
        <Techstack />
        <hr></hr>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <hr></hr>

        <Github />
        <hr></hr>

      </Container>
    </Container>
  );
}

export default About;
