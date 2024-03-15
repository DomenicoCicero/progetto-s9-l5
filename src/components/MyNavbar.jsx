import { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

class MyNavbar extends Component {
  state = {
    isFormVisible: false,
    textForm: "",
  };

  visibleForm = () => {
    this.setState(prevState => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  toggleFormVisibility = () => {
    this.setState(prevState => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.textFormProp(this.state.textForm);
  };

  handleInputChange = e => {
    this.setState({ textForm: e.target.value });
  };

  render() {
    return (
      <Container fluid className="bg-dark">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#">
            <img src="assets/logo.png" alt="logo" style={{ width: "100px", height: "55px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center justify-content-end ms-auto">
              <Form className={this.state.isFormVisible ? "" : "d-none"} onSubmit={this.handleFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={this.state.isFormVisible ? "" : "d-none"}
                    onChange={this.handleInputChange}
                    value={this.state.textForm}
                  />{" "}
                </Form.Group>
                <Button type="submit">Search</Button>
              </Form>
              <CiSearch className="icons text-white" id="ci-search" onClick={this.visibleForm} />
              <div id="kids" className="fw-bold text-white">
                KIDS
              </div>
              <CiBellOn className="icons text-white" />
              <FaRegUserCircle className="icons text-white" />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default MyNavbar;
