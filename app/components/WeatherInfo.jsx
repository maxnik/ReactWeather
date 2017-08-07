import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    const {location, temp} = this.props;
    return (
      <p>It's {temp} in {location}.</p>
    );
  }
}

module.exports = WeatherInfo;