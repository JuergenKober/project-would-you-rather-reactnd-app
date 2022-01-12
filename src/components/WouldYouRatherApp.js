import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import QuestionPage from './QuestionPage';

class WouldYouRatherApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
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
          </Routes>
        </Router>
      </div>
    )
  }
}

export default WouldYouRatherApp
