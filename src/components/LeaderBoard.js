import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import LeaderBoardCard from './LeaderBoardCard';

class LeaderBoard extends Component {
  render() {
    const { users, usersSorted } = this.props;

		return (
			<Fragment>
				<h2 className="text-center">
					<small>LeaderBoard</small>
				</h2>
        {usersSorted.map((id) => (
          <LeaderBoardCard key={id} userId={id} />
        ))}
			</Fragment>
		);
	};
};

function mapStateToProps({ users }) {
  const usersSorted = Object.keys(users).sort((a, b) => {
		const aScore =
			Object.keys(users[a].answers).length + users[a].questions.length;
		const bScore =
			Object.keys(users[b].answers).length + users[b].questions.length;

		return bScore - aScore;
	});

  console.log('usersSorted: ', usersSorted);

	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		})),
    usersSorted,
    users
	};
}

export default connect(mapStateToProps)(LeaderBoard);
