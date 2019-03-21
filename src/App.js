import React, { Component } from 'react';
import './App.css';
import Titles from './Components/Titles';
import FormOptimized from './Components/Form';
import WeatherOptimized from './Components/WeatherOptimized.js';


const API_KEY = "8c85a1befb07a1402a4fbf9c1076856b"

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    decription: undefined,
    error: undefined

  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&APPID=${API_KEY}&units=metric`)
    const data = await api_call.json();
    

    if (city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:"Please enter the values :)"
      })
    }

  };

  render() {
    return (

        <div class="wrapper">
          <div class="main">
            <div class="container">
              <div class="row">
                <div class="col-xs-5 title-container">
                  <Titles/>
                </div>
                 <div class="col-xs-7 form-container">
                   <FormOptimized getWeather={this.getWeather}/>
                   <WeatherOptimized
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      
      
    ); 
  }
}

export default App;
