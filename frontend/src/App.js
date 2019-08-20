import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './App.css';

import Main from "./components/Main/main";
import Nav from "./components/Nav/Nav";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";

// function App() {
//   return (
//     <div>
//       <Main />
//       <div className="footer">
//         <a href="https://github.com/rjflanagan95/keto-tracker">View the code on GitHub</a>
//       </div>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/keto/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/keto/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <Container className="App">
        <Row>
          <Col xs={9}>
            <h3 className="header-text">
              {this.state.logged_in ? `Hello, ${this.state.username}` : 'Please Log In'}
            </h3>
          </Col>
          <Col xs={3}>
            <Nav logged_in={this.state.logged_in} display_form={this.display_form} handle_logout={this.handle_logout} />
            {form}
          </Col>
        </Row>
        <Row>
        </Row>
        <Main />
        <div className="footer">
          <a href="https://github.com/rjflanagan95/keto-tracker">View the code on GitHub</a>
        </div>
      </Container>
    );
  }
}

export default App;