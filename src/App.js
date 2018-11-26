import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const url = 'https://swapi.co/api/planets/';

class App extends Component {

  state = {
    planetsCount: null,
    name: null,
    population: null,
    climate: null,
    terrain: null,
    numOfFilms: null,
  };

  componentDidMount = () => {
    axios
      .get(url)
      .then(result => {
        this.setState({
          planetsCount: result.data.count,
        });
        this.searchPlanetRandom();
      });
  }

  searchPlanetRandom = () => {
    const planetID = (Math.floor(Math.random() * this.state.planetsCount) + 1);
    axios
      .get(url + planetID)
      .then(result => {
        this.setState({
          name: result.data.name,
          population: result.data.population,
          climate: result.data.climate,
          terrain: result.data.terrain,
          numOfFilms: result.data.films.length,
        })
      });
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title"> Hora do <br/> Desafio - B2W</h1>
          <div className="Planet-infos">
            <h2>Planet: {this.state.name} </h2>
            <h5>Population: {this.state.population} </h5>
            <h5>Climate: {this.state.climate} </h5>
            <h5>Terrain: {this.state.terrain}</h5>
            <h6>Featured in {this.state.numOfFilms} films </h6>
          </div>
          <button type="button" className="btn btn-outline-light" onClick={this.searchPlanetRandom}>Next</button>
          <br/>
          <h6>
            Edited by: <a className="App-link" href='https://github.com/DanielOrfeu'>Daniel Orfeu</a>.
          </h6>
        </header>
      </div>
    );
  };

}

export default App;
