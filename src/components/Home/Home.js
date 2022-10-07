import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import AnimatedTransition from "../../utils/AnimatedTransition";
import { useTypedText } from '../../utils/textTyper.tsx';
import Particle from "../Particle";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <AnimatedTransition>
          <Particle />
          <Container className="home-content">
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={8} className="home-header">

                <div style={{ padding: 195, textAlign: "center" }} className="main-name">
                  <span>

                    <h1>
                      {useTypedText("Hello everyone!", 50, 1000)}
                      <br />
                      {useTypedText("I'm ziue.", 50, 1300)}
                    </h1>
                    <br />
                    <p>
                      {useTypedText("I'm a Developer from Norway.", 30, 1500)}
                    </p>
                  </span>

                </div>


              </Col>
              <Col md={5} style={{ paddingBottom: 185 }}></Col>
            </Row>

          </Container>
        </AnimatedTransition>
      </Container>
    </section>
  );
}

export default Home;
