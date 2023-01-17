import { Col, Row, Container } from "react-bootstrap";
import "./banner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <p>
                Ponio<span>.</span>
              </p>
            </h1>
            <p className="position">Senior Fullstack Developer</p>
            {/* <button type="submit" className="btn-go"><span>Let's Go!</span></button> */}
            <button type="button" class="btn btn-outline-light btn-lg">Let's Go!</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
