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
  }

  componentDidMount() {
    let currentComponent = this;
    axios.get("http://localhost:8000/api/meals/")
    .then(function(res) {
      console.log(res.data);
      currentComponent.setState({
        meals: res.data
      });
    })
    .catch(err => console.log(err));
  }

  logMeal = (data) => {
    // let newMeal = {
    //   title: data.food,
    //   meal_type: data.mealType,
    //   meal_date: data.mealDate,
    //   calories: data.calories,
    //   protein: data.protein,
    //   fat: data.fat,
    //   carbs: data.carbs
    // }
    // let allMeals = this.state.meals;
    // allMeals.push(newMeal);

    axios.post("http://localhost:8000/api/meals/", data)
    .then(res => console.log(res.data))
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