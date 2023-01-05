import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.scss";

export const ContactComponent = () => {
  const formInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormdetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormdetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img alt="" src={process.env.PUBLIC_URL + "assets/contact-img.svg"} />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form>
            <Row>
              <Col className="px-1" sm={6}>
                <input
                  className="firstname"
                  type="text"
                  value={formInitialDetails.firstname}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate('firstname', e.target.value)}
                />
              </Col>
              <Col className="px-1" sm={6}>
                <input
                  className="lastname"
                  type="text"
                  value={formInitialDetails.lastname}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastname", e.target.value)}
                />
              </Col>
              <Col className="px-1" sm={6}>
                <input
                  className="email"
                  type="email"
                  value={formInitialDetails.email}
                  placeholder="Email"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </Col>
              <Col className="px-1" sm={6}>
                <input
                  className="email"
                  type="tel"
                  value={formInitialDetails.phone}
                  placeholder="Phone"
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
              </Col>
              <Col className="px-1">
                <textarea
                  row="6"
                  value={formInitialDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>
              {
                status.message &&
                <Col>
                <p className={status.success ? "danger" : "success"}> {status.message}</p>
                </Col>
              }
            </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
