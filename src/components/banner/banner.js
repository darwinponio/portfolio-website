import { Col, Row, Container } from "react-bootstrap";
import "./banner.scss";

export const BannerComponent = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={5} className="col-image">
            <img
              src={process.env.PUBLIC_URL + "assets/thumb.png"}
              alt="Heading IMG"
            />
          </Col>
          <Col xs={12} md={6} xl={7} className="col-name">
            <h1>
              <p className="first-name">Darwin</p>
              <p>Ponio.</p>
            </h1>
            <p className="position">Senior Fullstack Developer</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
