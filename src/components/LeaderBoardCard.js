import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class LeaderBoardCard extends Component {
  render() {
    const { user } = this.props;

		return (
			<Fragment>
				<h2 className="text-center">
					<small>LeaderBoardCard</small>
				</h2>
        <Card>
          <Card.Text>
            {user.name}
          </Card.Text>
        </Card>
			</Fragment>
		);
	};
};

function mapStateToProps({ users }, { userId }) {
	return {
		user: users[userId]
	};
}

export default connect(mapStateToProps)(LeaderBoardCard);
