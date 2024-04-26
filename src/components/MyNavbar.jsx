import React, { Component } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../assets/logo.png"

class MyNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} style={{ width: "100px", height: "55px" }} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="MyNavbar" />
          <Navbar.Collapse id="MyNavbar">
            <Nav className="me-auto">
              <Nav.Link href="#" className="active fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MyNavbar
