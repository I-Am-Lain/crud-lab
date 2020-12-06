import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {
          this.props.restaurants.map(rest => {
            return <Restaurant key={rest.id} restaurant={rest} id={rest.id} text={rest.text} deleteRestaurant={this.props.deleteRestaurant}/>
          })
        }
      </ul>
    );
  }
};

export default Restaurants;