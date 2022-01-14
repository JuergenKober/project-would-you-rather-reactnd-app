import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render () {
  	return (
      <Row>
        <Card>
          <Card.Header>
            Oh my, the dreaded 404 error
          </Card.Header>
          <Card.Body>
            <Card.Text>
              We're really sorry but we couldn't find this page
            </Card.Text>
            <Link to="/">
              Go back to Home page
            </Link>
          </Card.Body>

        </Card>
      </Row>
  	);
  }
}

export default PageNotFound;
