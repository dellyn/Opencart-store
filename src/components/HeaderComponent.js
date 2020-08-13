import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      test: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleLogin() {
    this.toggleModal();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar expand="md" className="header col-md-12">
          <NavbarToggler
            onClick={this.toggleNav}
            className={this.state.isNavOpen ? "togg-open" : "togg-close"}
          />
          <NavbarBrand className="logo-lay logo-lay-md " href="/">
            <img
              src="/assets/images/logo.png"
              className="logo mr-3 m-md-auto "
              alt="logo"
            />
          </NavbarBrand>
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />

            <NavbarBrand className="logo-lay" href="/">
              <img
                src="assets/images/logo.png"
                className="logo mr-3 m-md-auto "
                alt="logo"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem onClick={this.toggleNav}>
                  <NavLink className="nav-link" to="/home">
                    {/* <i className="fa fa-home fa-lg"></i> */}
                    Home
                  </NavLink>
                </NavItem>
                <NavItem onClick={this.toggleNav}>
                  <NavLink className="nav-link" to="/aboutus">
                    {/* <i className="fa fa-info fa-lg"></i> */}
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem onClick={this.toggleNav}>
                  <NavLink className="nav-link" to="/menu">
                    {/* <i className="fa fa-list fa-lg"></i> */}
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem onClick={this.toggleNav}>
                  <NavLink className="nav-link" to="/contactus">
                    {/* <i className="fa fa-address-card fa-lg"></i> */}
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto nav-second" navbar>
                <NavItem>
                  <Button onClick={this.toggleModal} className="login-btn">
                    Log in
                    {/* <i className="fa fa-sign-in fa-lg"></i>Login */}
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Del Carte</h1>
                <p>We take inspiration 2 weeks </p>
              </div>
            </div>
          </div>
        </Jumbotron> */}
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          className=""
        >
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup className="">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup className="">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" className="modal-btn mt-3">
                Log in
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
