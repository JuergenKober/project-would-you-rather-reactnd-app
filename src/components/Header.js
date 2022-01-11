import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Header(props) {
  const { user, dispatch } = props;

  const logoutUser = () => {
		console.log('logging out');
	};

  return (
		<Fragment>
      <Card>
        <h2>Header</h2>
        <Card.Text>
          You're logged in as {user.name}
        </Card.Text>
        <Button onClick={logoutUser}>
          Logout
        </Button>
      </Card>
    </Fragment>
  );
}


function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(Header);
