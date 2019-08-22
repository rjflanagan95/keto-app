import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "react-bootstrap";

import "./LoginForm.css";

class LoginForm extends React.Component {
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
        <form onSubmit={e => this.props.handle_login(e, this.state)}>
          <Row className="login-row">
            <h4>Log In</h4>
          </Row>
          <Row className="login-row">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handle_change}
            />
          </Row>
          <Row className="login-row">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handle_change}
            />
          </Row>
          <Row className="login-row">
            <input className="login-submit" type="submit" />
          </Row>
        </form>
      </Container>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};