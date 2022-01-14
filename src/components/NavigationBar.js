import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { unsetAuthedUser } from '../actions/authedUser';
import { NavLink, Link } from 'react-router-dom';

function NavigationBar(props) {
  const { user, dispatch } = props;

  const logoutUser = () => {
		console.log('logging out');
    dispatch(unsetAuthedUser());
	};

  return (
		<Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Would you rather...?
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact="true">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/add">
                Add Question
              </Nav.Link>
              <Nav.Link as={NavLink} to="/leaderboard">
                Leaderboard
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as <a href="#login">{user.name}</a>
            </Navbar.Text>
            <Navbar.Text>
              <Button variant="light" onClick={logoutUser}>
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </Fragment>
  );
};



function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavigationBar);
