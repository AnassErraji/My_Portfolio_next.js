import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "/public/home-ma11in.svg";
import Particle from "@/components/Particle";
import Type from "@/components/Type";
import Home2 from "@/components/Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Salut à vous!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Je Suis
                <strong className="main-name"> Erraji Anass</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="/home-ma11in.svg"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }
              }
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
