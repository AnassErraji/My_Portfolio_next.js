import AboutCard from "@/components/AboutCard";
import Github from "@/components/Github";
import Particle from "@/components/Particle";
import Techstack from "@/components/Techstack";
import Toolstack from "@/components/Toolstack";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about-section">
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Je me <strong className="purple">Présente</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src="/about.png" alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Mes  </strong> Compétences
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Mon</strong> Envirenement
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
