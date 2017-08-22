import React from 'react';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();

    const location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" ref="location" placeholder="Enter city name"/>
        </div>
        <button className="btn btn-outline-primary btn-block">Get Weather</button>
      </form>
    );
  }
}

module.exports = WeatherForm;