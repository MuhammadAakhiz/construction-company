import React from "react";
import logo1 from "../../Assets/images/logo1.svg";
import { Nav, Container, Navbar } from "react-bootstrap";
import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const HeaderNav = () => {
  return (
    <div className={styles.navbarMain}>
      <Navbar collapseOnSelect expand="lg" className={`py-3 ${styles.navbar}`}>
        <Container>
          <NavLink to="/" className="text-decoration-none">
            <Navbar.Brand className={styles.navbrand}>
              Construction Company Landing
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
            <Nav className="ms-auto">
              <LinkContainer to="home" activeClassName={styles.activeLink}>
                <NavLink
                  to="home"
                  className={`text-dark px-2 ${styles.navlinks}`}
                  activeClassName={styles.activeLink}
                >
                  Home
                </NavLink>
              </LinkContainer>
              <LinkContainer to="about" activeClassName={styles.activeLink}>
                <NavLink className={`text-dark px-2 ${styles.navlinks}`}>
                  About
                </NavLink>
              </LinkContainer>
              <LinkContainer to="services" activeClassName={styles.activeLink}>
                <NavLink className={`text-dark px-2 ${styles.navlinks}`}>
                  Services
                </NavLink>
              </LinkContainer>
              <LinkContainer to="service" activeClassName={styles.activeLink}>
                <NavLink className={`text-dark px-2 ${styles.navlinks}`}>
                  Service
                </NavLink>
              </LinkContainer>
              <LinkContainer to="portfolio" activeClassName={styles.activeLink}>
                <NavLink className={`text-dark px-2 ${styles.navlinks}`}>
                  Portfolio
                </NavLink>
              </LinkContainer>
              <LinkContainer to="blog" activeClassName={styles.activeLink}>
                <NavLink className={`text-dark px-2 ${styles.navlinks}`}>
                  Blog
                </NavLink>
              </LinkContainer>
              <LinkContainer to="project" activeClassName={styles.activeLink}>
                <NavLink className={`text-dark px-2 ${styles.navlinks}`}>
                  Project
                </NavLink>
              </LinkContainer>
              <LinkContainer to="contact" activeClassName={styles.activeLink}>
                <NavLink className={`text-dark px-2 ${styles.navlinks}`}>
                  Contact
                </NavLink>
              </LinkContainer>
            </Nav>
            <img src={logo1} alt="Logo" className={styles.logo} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
