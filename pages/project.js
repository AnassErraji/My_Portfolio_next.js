import Particle from "@/components/Particle";
import ProjectCards from "@/components/ProjectCards";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import ProjectCard from "./ProjectCards";
//import Particle from "../Particle";
//import cube from "../../Assets/Projects/cube.png";
//import hospi from "../../Assets/Projects/hospi.png";
//import minor from "../../Assets/Projects/minor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/hospi.png"
              isBlog={false}
              title="Hospi"
              description="Private Chat Room or Workspace to have real time consultation with Doctors build with react.js, Node,js, and Express. Have features which allows user for messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Iblissss/Projet-WEBSERVER"
              demoLink="https://www.hospicorp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/minor.png"
              isBlog={false}
              title="The Minor 2D"
              description="The project I created is a captivating 2D game developed using JavaScript (JS). The game offers an interactive and entertaining experience for players. With attractive graphics and fluid game mechanics, it offers stimulating challenges and levels."
              ghLink="https://github.com/Iblissss/Minor-2D"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/cube.png"
              isBlog={false}
              title="Cube"
              description="Our project is an online education platform that aims to make learning accessible to all. With interactive courses, high-quality educational materials, and advanced collaboration tools, our platform provides an immersive and engaging learning experience. Students can choose from a variety of courses in different fields, interact with their peers and instructors, and achieve their full potential, regardless of their constraints."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
