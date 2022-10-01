import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useTypedText } from '../../utils/textTyper.tsx';
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={8} className="home-header">

              <div style={{ padding: 120, textAlign: "center" }} className="main-name">
                <h1>
                  {useTypedText("Hello everyone!", 50, 1000)}
                  <br />
                  {useTypedText("I'm ziue.", 50, 1300)}
                </h1>
                <br />
                {useTypedText("I'm a Software Developer from Norway.", 30, 1500)}

              </div>

            </Col>
            <Col md={5} style={{ paddingBottom: 49 }}></Col>
          </Row>

          <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ziuee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ziuedev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
