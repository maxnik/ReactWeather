import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    const {location, temp} = this.props;
    return (
      <h3 className="text-center">It's {temp} in {location}.</h3>
    );
  }
}

module.exports = WeatherInfo;