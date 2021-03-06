import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview, deleteReview } from '../actions/index.js'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

export default connect(state => ({ reviews: state.reviews }), { addReview, deleteReview })(ReviewsContainer);
