import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {
          this.props.reviews.map(review => {
            return review.restaurantId === this.props.restaurantId ?
            <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
            :
            null
          })
        }
      </ul>
    );
  }
};

export default Reviews;