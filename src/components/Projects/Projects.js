import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import luma from "../../assets/Projects/luma.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luma}
              isBlog={false}
              title="Luma"
              description="A discord bot that provide features such as Music, Moderation, Tickets, Verification, Anti-Raid, Economy and more! Built in JavaScript."
              ghLink="https://github.com/ziuee/Luma-Bot"
              demoLink="https://lumadev.xyz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="cPractice"
              description="Highly configurable practice plugin. This project was originally closed source and is now open source. Was created in Java 8."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luma}
              isBlog={false}
              title="Luma"
              description="A discord bot that provide features such as Music, Moderation, Tickets, Verification, Anti-Raid, Economy and more! Built in JavaScript."
              ghLink="https://github.com/ziuee/Luma-Bot"
              demoLink="https://lumadev.xyz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="cPractice"
              description="Highly configurable practice plugin. This project was originally closed source and is now open source. Was created in Java 8."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
