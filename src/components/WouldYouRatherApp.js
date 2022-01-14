import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';
import QuestionNew from './QuestionNew';
import PageNotFound from './PageNotFound';

class WouldYouRatherApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Container>
            <NavigationBar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home />
                }
              />
              <Route
                exact
                path="/questions/:id"
                element={
                  <QuestionPage />
                }
              />
              <Route
                exact
                path="/add"
                element={
                  <QuestionNew />
                }
              />
              <Route
                exact
                path="/leaderboard"
                element={
                  <LeaderBoard />
                }
              />
              <Route
                element={
                  <PageNotFound />
                }
              />
            </Routes>
            </Container>
        </Router>
      </div>
    )
  }
}

export default WouldYouRatherApp
