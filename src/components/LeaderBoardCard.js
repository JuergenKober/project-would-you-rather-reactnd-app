import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class LeaderBoardCard extends Component {
  render() {
    const { user } = this.props;

		return (
			<Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Header>
              {user.name}
            </Card.Header>
            <Card.Body className="justify-content-center">
              <Card.Text>
                ...has asked {user.questions.length} questions
                <br />
                ...has answered {Object.keys(user.answers).length} questions
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
			</Row>
		);
	};
};

function mapStateToProps({ users }, { userId }) {
	return {
		user: users[userId]
	};
}

export default connect(mapStateToProps)(LeaderBoardCard);
