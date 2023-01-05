import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import "./about.scss";

export const AboutComponent = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <div className="skill-bx">
          <Row className="">
            <Col xs={12} md={6} xl={5}>
              <h2>About Me</h2>
              <p>
                I am a Senior Full Stack Developer with experience in designing,
                coding, and testing complex systems. I'm highly proficient in
                Web Development, Web Design and Graphic Design
              </p>
              <div>
                <Nav variant="pills" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Web Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Web Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">Graphic Design</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col xs={12} md={6} xl={7}>
              <img
                className="about-img"
                src={process.env.PUBLIC_URL + "assets/cartoon_1.png"}
                alt="Heading IMG"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
