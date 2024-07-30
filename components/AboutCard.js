import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">EL Mehdi Alaoui </span>
            from <span className="purple"> Rabat, Morroco.</span>
            <br /> I am a final year student in Computer programing at La Cité
            Collégial.
            <br />
            Additionally, I am currently employed as a software developer at
            Gatineau.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Riding horse
            </li>
            <li className="about-activity">
              <ImPointRight /> Surf
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            &quot;Strive to build things that make a difference!&quot;
          </p>
          <footer className="blockquote-footer">Mehdi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
