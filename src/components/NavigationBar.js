import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { unsetAuthedUser } from '../actions/authedUser';

function NavigationBar(props) {
  const { user, dispatch } = props;

  const logoutUser = () => {
		console.log('logging out');
    dispatch(unsetAuthedUser());
	};

  return (
		<Fragment>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{user.name}</a>
            </Navbar.Text>
            <Button onClick={logoutUser}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};



function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavigationBar);
