import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useTypedText } from '../../utils/textTyper.tsx';
import Home2 from "./Home2";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import AnimatedTransition from "../../utils/AnimatedTransition";

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
