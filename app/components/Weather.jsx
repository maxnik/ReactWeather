import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherInfo from 'WeatherInfo';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location) {
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (errorMessage) => {
      alert(errorMessage);
      this.setState({isLoading: false});
    });
  }
  render() {
    const {isLoading, location, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherInfo location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}

module.exports = Weather;