import React, { Component } from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import avatar from "../assets/img/avatar.png"
import { Link } from "react-router-dom"
class MyNavbar extends Component {
  render() {
    return (
      <header className="mb-5 m-1">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container fluid>
            <Navbar.Brand href="index.html">
              <img src={logo} width="112" height="47" alt="Netflix logo" loading="lazy" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="ms-3">
              <Nav className="me-auto ">
                <Nav.Link className="navText" href="#">
                  Home
                </Nav.Link>
                <Nav.Link className="navText" href="#">
                  TV Shows
                </Nav.Link>
                <Nav.Link className="navText" href="#">
                  Movies
                </Nav.Link>
                <Nav.Link className="navText" href="#">
                  My List
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="navText" href="#">
                  KIDS
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bi bi-bell-fill"></i>
                </Nav.Link>
                <NavDropdown
                  title={<img src={avatar} alt="Your avatar" style={{ width: 36, height: 36 }} />}
                  id="bg-vertical-dropdown-1"
                  variant="btn btn-dark btn-sm dropdown-toggle rounded-0 ms-4 mt-1"
                  menuVariant="dark"
                  align="end"
                >
                  <NavDropdown.Item className="navText" href="#">
                    Your Name
                  </NavDropdown.Item>
                  <NavDropdown.Item className="navText" href="#">
                    Account
                  </NavDropdown.Item>
                  <NavDropdown.Item className="navText" href="">
                    <Link
                      to="/edit-profile"
                      className="text-decoration-none bg-transparent text-white"
                    >
                      Manage profiles
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="navText" href="https://www.google.com/">
                    Sign out of Netflix
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default MyNavbar
