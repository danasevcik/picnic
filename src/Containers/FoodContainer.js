import React from 'react';
import Food from '../Components/Food';

class FoodContainer extends React.Component {
  state={
    foods: []
  }
  componentDidMount() {
    fetch('http://localhost:4000/foods')
    .then(resp => resp.json())
    .then(foods => this.setState({ foods: foods }))
  }

  render() {
    let foods = this.state.foods.map(food => (
      <Food key={food.id} food={food} />
    ))
    return (
      <div class='foods-container'>
        <h1>I'm going on a picnic and I'm bringing...</h1>
        <h2>{this.state.foods.length > 0 ? foods : <h1>food coming shortly</h1>}</h2>
      </div>
    );
  }
}

export default FoodContainer;
