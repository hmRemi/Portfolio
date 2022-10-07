import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import pdf from "../../assets/resume.pdf";
import AnimatedTransition from "../../utils/AnimatedTransition";
import Particle from "../Particle";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/ziuee/resume/main/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <AnimatedTransition>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"

            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", boxShadow: "0 0 25px #623686", fontFamily: 'Alfa Slab One' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", boxShadow: "0 0 25px #623686", fontFamily: 'Alfa Slab One' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        </AnimatedTransition>
      </Container>
    </div>
  );
}

export default ResumeNew;
