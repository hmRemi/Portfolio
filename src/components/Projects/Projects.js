import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import luma from "../../assets/Projects/luma.png";
import AnimatedTransition from "../../utils/AnimatedTransition";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <AnimatedTransition>
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Projects</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={luma}
                isBlog={false}
                title="Luma | DISCORD BOT"
                description="A discord bot that provide features such as Music, Moderation, Tickets, Verification, Anti-Raid, Economy and more! Built in JavaScript."
                ghLink="https://github.com/ziuee/Luma-Bot"
                demoLink="https://lumadev.xyz"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={luma}
                isBlog={false}
                title="cPractice | MC PLUGIN"
                description="Highly configurable practice plugin. This project was originally closed source and is now open source. Was created in Java 8."
                ghLink="https://github.com/ziuee/cPractice"
                demoLink="https://github.com/ziuee/cPractice"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={luma}
                isBlog={false}
                title="Luma | MC HACKED CLIENT"
                description="Old Minecraft Hacked Client. This project was originally closed source and is now open source"
                ghLink="https://github.com/ziuee/lumasense"
                demoLink="https://github.com/ziuee/lumasense"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={luma}
                isBlog={false}
                title="zAPI | MC PLUGIN API"
                description="A Bukkit/Spigot API to simplify usage of command and rank / chat formatting."
                ghLink="https://github.com/ziuee/zAPI"
                demoLink="https://github.com/ziuee/zAPI"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={luma}
                isBlog={false}
                title="License Plugin | EXTENSION"
                description="An extension for the license system. Allows you to manage licenses on a minecraft server instead of acccess only through web-panel.."
                ghLink="https://github.com/ziuee/LicensePlugin"
                demoLink="https://github.com/ziuee/LicensePlugin"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={luma}
                isBlog={false}
                title="License System"
                description="A license system for your minecraft plugins. Uses MySQL and built with PHP. This project was originally closed source and is now open source"
                ghLink="https://github.com/audi-development/LicensePanel"
                demoLink="https://github.com/audi-development/LicensePanel"
              />
            </Col>
          </Row>
        </Container>
      </AnimatedTransition>
    </Container>
  );
}

export default Projects;
