import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AnimatedTransition from "../../utils/AnimatedTransition";

function Resume() {
    return (

        <Container fluid className="about-section">
            <AnimatedTransition>

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
                                <strong className="purple">PERSONAL</strong> INFORMATION
                            </h1>
                            <hr></hr>

                            <p style={{ textAlign: "justify" }}>
                                • Full Name: Remi Gabrielsen<br></br>
                                • Email: remig06@hotmail.com<br></br>
                                • Country: Norway<br></br>
                                • City: Lyngdal<br></br>

                                <br></br>
                                • GitHub: https://github.com/ziuee<br></br>
                                • Discord: ziue#6993<br></br>
                            </p>
                            <hr style={{ marginBottom: "327px" }}></hr>

                        </Col>

                    </Row>

                    <Row>

                        <Col md={6}>
                            <h1 style={{ fontSize: "2.1em" }}>
                                <strong className="purple">WORK</strong>
                            </h1>

                            <hr></hr>

                            <p style={{ textAlign: "center", marginTop: "10" }}>
                                Freelance Web Developer
                            </p>

                            <p style={{ textAlign: "justify" }}>
                                • Planned website development, converting mockups into usable webpresence with HTML, JavaScript and JSON coding.<br></br><br></br>
                                • Designed, implemented and monitored web pages, plugins and functionality for continuous improvement.<br></br><br></br>
                                • Provided ongoing efficiency and security maintenance and patching onwebsite interface to maintain viability after launch.<br></br>
                            </p>
                            <hr style={{ marginBottom: "160px" }}></hr>
                        </Col>

                        <Col md={6}>
                            <h1 style={{ fontSize: "2.1em" }}>
                                <strong className="purple">SKILLS</strong>
                            </h1>

                            <hr></hr>
                            <p style={{ textAlign: "center", marginTop: "10" }}>
                                Development
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                • Software Proficiency <br></br>
                                • Problem-Solving <br></br>
                                • HTML & CSS <br></br>
                                • JavaScript <br></br>
                                • Node.JS/React.JS <br></br>
                                • Python <br></br>
                                • Java <br></br>
                                • C#
                            </p>
                            <hr style={{ marginBottom: "160px" }}></hr>
                        </Col>

                        <Col md={6}>
                            <h1 style={{ fontSize: "2.1em" }}>
                                <strong className="purple">EDUCATION</strong>
                            </h1>

                            <hr></hr>

                            <p style={{ textAlign: "justify", marginTop: "10px" }}>
                                • High School: Eilert Sundt | 08/2022-Present
                            </p>
                            <hr style={{ marginBottom: "160px" }}></hr>
                        </Col>

                        <Col md={6}>
                            <h1 style={{ fontSize: "2.1em" }}>
                                <strong className="purple">LANGUAGES</strong>
                            </h1>

                            <hr></hr>

                            <p style={{ textAlign: "justify" }}>
                                Norwegian: C2,
                                English: C2,
                                Swedish: B1,
                                Danish: A2,
                                German: A1,
                            </p>
                            <hr style={{ marginBottom: "160px" }}></hr>

                        </Col>
                    </Row>
                </Container>
            </AnimatedTransition>
        </Container>

    );
}

export default Resume;
