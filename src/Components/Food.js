import React from 'react';

class Food extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.food.name}</h2>
        <img src={this.props.food.img} style={{height: '200px'}} />
      </div>
    )
  }
}

export default Food;
