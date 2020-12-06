import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addReview(this.state.text, this.props.restaurantId)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' value={this.state.text} onChange={this.handleChange}/>
          <input type='submit' value='Add Review'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
