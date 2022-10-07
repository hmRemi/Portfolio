import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiRedis,
} from "react-icons/di";
import {
  SiDotnet,
  SiMysql,
  SiCsharp,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <DiJava />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <DiJavascript1 className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <DiPython className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <SiCsharp className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <DiNodejs className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <DiReact className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <SiDotnet className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <DiRedis className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <DiMongodb className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <SiMysql className="tech-icon-images"/>
        </div>
      </Col>

    </Row>
  );
}

export default Techstack;
