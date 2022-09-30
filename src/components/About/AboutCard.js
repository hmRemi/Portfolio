import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey! I am <span className="blue">ziue </span>
            from <span className="blue"> Norway.</span>
            <br />I'm currently studying <b className="blue">Computer Science</b> and <b className="blue">Media Production</b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Talking with people
            </li>
           
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
