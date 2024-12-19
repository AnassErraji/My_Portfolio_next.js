import Particle from "@/components/Particle";
import ProjectCards from "@/components/ProjectCards";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Mes projets  <strong className="purple">récents </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/hospi.png"
              isBlog={false}
              title="Calculatrice(IOS)"
              description="Les calculatrices sont parmi les outils les plus fondamentaux et indispensables dans le domaine de la technologie. Conçue pour offrir une expérience utilisateur intuitive et efficace, notre calculatrice iOS développée en WPF avec C# combine puissance et convivialité."
              ghLink="https://github.com/AnassErraji/Calculator_IOS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/minor.png"
              isBlog={false}
              title="Gestion Hopital"
              description="Projet de conception d'une application desktop pour gerer un hopital ,dont les medecins les reservations et les patients avec C# wpf."
              ghLink="https://github.com/AnassErraji/Gestion_Hopital-WPF-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/cube.png"
              isBlog={false}
              title="Restaurant LaCite"
              description="Explorez une expérience culinaire unique avec Restaurant LaCite. Notre site web est conçu pour vous transporter dans un voyage gastronomique alliant saveurs authentiques, ambiance chaleureuse et service exceptionnel."
              ghLink="https://github.com/AnassErraji/R-staurant_LaCite"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
