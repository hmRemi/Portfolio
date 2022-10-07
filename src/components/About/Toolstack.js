import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiIntellijidea, SiNginx, SiVisualstudiocode, SiWebstorm } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <SiIntellijidea className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <SiWebstorm className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <SiVisualstudiocode className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <SiGithub className="tech-icon-images"/>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-animation">
          <SiNginx className="tech-icon-images"/>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
