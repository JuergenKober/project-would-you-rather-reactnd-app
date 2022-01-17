import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class LeaderBoardCard extends Component {
  render() {
    const { user } = this.props;

		return (
      <Row className="justify-content-center">
        <Col md={10} xs={12}>
          <Card className="m-3">
            <Card.Header>
              <Image
                src={user.avatarURL}
                roundedCircle
                fluid
                width="35"
                height="35"
                className="mx-3"
                alt={user.name}
              />
              <b>{user.name}</b>
            </Card.Header>
            <Card.Body className="mx-3">
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
