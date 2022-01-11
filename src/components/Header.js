import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

function Header(props) {
  const { user, dispatch } = props;
  return (
		<Fragment>
      <Card>
        <h2>Header</h2>
        <Card.Text>You're logged in as {user.name}</Card.Text>
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
