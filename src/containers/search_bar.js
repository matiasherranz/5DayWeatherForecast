import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // this, here, points to SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // IMPORTANT!!!!
    // WHEN WE PASS A CALLBACK AROUND AS A FUNCTION LIKE THE
    // onChange={this.onInputChange} below, and that CALLBACK
    // has a reference to this, you need to bind the context
  }

  onInputChange(event) {
    // all DOM event handlers come along with the event object
    //console.log('User input: ', event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // go and fetch weather data!
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null because this container does not need to pass any state
export default connect(null, mapDispatchToProps)(SearchBar);
