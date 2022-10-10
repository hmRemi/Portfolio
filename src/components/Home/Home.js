import { Col, Container, Row } from "react-bootstrap";

import AnimatedTransition from "../../utils/AnimatedTransition";
import Home2 from "./Home2";
import Particle from "../Particle";
import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/avatar.svg";
import { useTypedText } from '../../utils/textTyper.tsx';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <AnimatedTransition>
          <Particle />
          <Container className="home-content">
            <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
              <Col md={8} className="home-header">

                <div style={{ padding: 195, textAlign: "center" }} className="main-name">
                  <span>

                    <h1 style={{ fontSize: "1.6em", marginTop: "50px" }}>
                      {useTypedText("Hey! I'm ziue", 50, 1000)}
                      <br />
                      {useTypedText("Let me introduce myself", 50, 2000)}
                    </h1>
                    <p className="home-about-body" style={{ marginLeft: "20px" }}>
                      {useTypedText("I'm a passionate developer from Norway", 50, 2300)}
                      <br />{useTypedText("Known Languages:", 50, 2500)}
                      <i>
                        <b className="purple"> {useTypedText("Java, JavaScript, HTML, CSS, Python, C#", 50, 2600)}</b>
                      </i>
                      <br />
                      {useTypedText("I'm currently studying ", 50, 3000)} 
                      <b className="purple">{useTypedText("Computer Science", 50, 3000)}</b>
                      {useTypedText(" and ", 50, 3000)} 
                      <b className="purple">{useTypedText("Media Production", 50, 3000)}</b>
                    </p>
                  </span>
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 185 }}></Col>
            </Row>

          </Container>
        </AnimatedTransition>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
