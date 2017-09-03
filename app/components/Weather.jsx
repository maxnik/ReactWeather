import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherInfo from 'WeatherInfo';
import openWeatherMap from 'openWeatherMap';
import Modal from 'Modal';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: null
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: null
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false        
      });
    }, (errorMessage) => {
      this.setState({
        isLoading: false,
        errorMessage: errorMessage.message
      });
    });
  }
  render() {
    const {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherInfo location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        <Modal errorMessage={errorMessage}/>
      </div>
    );
  }
}

module.exports = Weather;