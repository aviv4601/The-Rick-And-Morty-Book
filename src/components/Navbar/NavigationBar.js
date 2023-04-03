import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";
import { ReactComponent as Icon } from "../Assets/LogoB&W.svg";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="light" variant="light" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="fs-3 ubunto navbar-brand">
            <svg viewBox="0 0 300 225" width="70" height="60">
              <Icon></Icon>
            </svg>
          </Link>
        </Navbar.Brand>
        <div className="justify-content-end">
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto" activeKey="/">
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>
                Characters
              </NavLink>
              <NavLink
                to="/locations"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Locations
              </NavLink>
              <NavLink
                to="/episodes"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Episodes
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
