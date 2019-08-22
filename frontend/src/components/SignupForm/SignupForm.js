import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "react-bootstrap";

import "./SignupForm.css";

class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <Container>
        <form onSubmit={e => this.props.handle_signup(e, this.state)}>
          <Row className="signup-row">
            <h4>Sign Up</h4>
          </Row>
          <Row className="signup-row">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handle_change}
            />
          </Row>
          <Row className="signup-row">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handle_change} />
          </Row>
          <Row className="signup-row">
            <input type="submit" />
          </Row>
        </form>
      </Container>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};