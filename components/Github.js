import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Container } from "react-bootstrap";

function Github() {
  return (
    <Container>
      <Row className="justify-content-center" style={{ padding: "20px 0" }}>
        <Col xs={12} md={8} className="text-center">
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Mes <strong className="purple">Disponibilités</strong>
          </h1>
          <p style={{ color: "#6c757d", fontSize: "1.9rem" }}>
            Vous trouverez ci-dessous une visualisation de mon activité de codage sur GitHub. Restez connectés pour plus de nouvelles!
          </p>
          <GitHubCalendar
            username="AnassErraji"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={19}
            style={{ marginTop: "20px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Github;

