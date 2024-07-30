import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import ProjectCards from './ProjectCards';
import { FaLinkedinIn } from "react-icons/fa";
import AboutCard from "@/components/AboutCard";
import Github from "@/components/Github";
import Particle from "@/components/Particle";
import Techstack from "@/components/Techstack";
import Toolstack from "@/components/Toolstack";

function Profile() {
  return (
    <Container fluid className="profile-section" id="profile">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8} className="profile-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Salut, <span className="purple">Je suis Anass Erraji</span>
            </h1>
            <p className="profile-body">
              Passionné par la programmation, j'aime explorer différents langages et technologies. Mon expertise comprend 
              <i>
                <b className="purple"> Java, C#, Javascript, C et Python.</b>
              </i>
              <br />
              <br />
              Mes centres d'intérêt incluent le développement de
              <i>
                <b className="purple"> Jeux Vidéos</b> et l'application de 
                <b className="purple"> Deep Learning</b> pour la vision par ordinateur.
              </i>
              <br />
              <br />
              J'aime également travailler sur des projets en 
              <b className="purple"> Python</b> et 
              <b className="purple"> JAVA</b>.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={8} className="skills-section">
            <h2 className="purple">Compétences</h2>
            <Card>
              <Card.Body>
                <Card.Text>
                  - Développement de logiciels en Java et C#.<br />
                  - Développement web avec Javascript.<br />
                  - Développement de jeux vidéos en Python.<br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
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
          <strong className="purple">Mon</strong> Environnement
        </h1>
        <Toolstack />

        <Github />

        <Row className="text-center mb-5">
          <Col>
            <h1 className="project-heading">
              Mes derniers <strong className="purple">Projets</strong>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCards
                  imgPath="/Projects/hospi.png"
                  isBlog={false}
                  title="Calculatrice (iOS)"
                  description="Les calculatrices sont parmi les outils les plus fondamentaux et indispensables dans le domaine de la technologie. Conçue pour offrir une expérience utilisateur intuitive et efficace, notre calculatrice iOS développée en WPF avec C# combine puissance et convivialité."
                  ghLink="https://github.com/AnassErraji/Calculator_IOS"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCards
                  imgPath="/Projects/minor.png"
                  isBlog={false}
                  title="Gestion Hôpital"
                  description="Projet de conception d'une application desktop pour gérer un hôpital, dont les médecins, les réservations et les patients avec C# WPF."
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
          </Col>
        </Row>
        

        <Row>
          <Col md={12} className="profile-social">
            <p>
              Retrouvez-moi sur <span className="purple">les réseaux sociaux</span>
            </p>
            <ul className="profile-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnassErraji"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour profile-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour profile-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anass-erraji-652b11278/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour profile-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Profile;
