import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Setting the value of activelink
  const onUpdateActiveLink = (value) => {
    return setActiveLink(value);
  };

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + "assets/logo.png"}
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                Link
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#fb">
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </a>
                <a href="#linkedin">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </a>
                <a href="#google">
                  <FontAwesomeIcon icon="fa-brands fa-google" />
                </a>
              </div>
              <button className="btnConnect">
                {" "}
                <span>Let's connect</span>{" "}
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
