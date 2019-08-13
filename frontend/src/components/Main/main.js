import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./main.css"

import Logger from "../Logger/logger";
import Graphs from "../Graphs/graphs";

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      meals: []
    }

    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let currentComponent = this;
    axios.get("http://localhost:8000/api/meals/")
    .then(function(res) {
      currentComponent.setState({
        meals: res.data
      }, function() {
        console.log(currentComponent.state);
      });
    })
    .catch(err => console.log(err));
  }

  logMeal = (data) => {
    let currentComponent = this;
    axios.post("http://localhost:8000/api/meals/", data)
    .then(function(res) {
      currentComponent.loadData();
    })
    .catch(err => console.log(err));
  }

  render() {

    return (
      <Container className="main-container">
        <Row className="main-row">
          <Col xs={8}>
            <Graphs meals={this.state.meals} />
          </Col>
          <Col xs={4}>
            <Logger logToMain={this.logMeal} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;