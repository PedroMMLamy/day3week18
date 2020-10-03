import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
// import countries from "./countries.json";

class App extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    // console.log("did mount");
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then(response => {
        // console.log("api response");
        this.setState({ countries: response.data });
      })
      .catch(err => console.log(err));
  }

  // for learning purposes
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState)
    console.log('update');
  }

  render() {
    // console.log("render");

    const countries = this.state.countries;
    console.log(countries);
    //   if (!countries.length) {
    //       return (<div>Loading</div>)
    //   }

    return (
      <div className='App'>
        <Router>
          <div>
            <Navbar />
            <div className='container'>
              <div className='row'>
                <div className='col-5' style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                  <div className='list-group'>
                    <CountriesList countries={countries} />
                  </div>
                </div>
                <Switch>
                  <Route exact path='/:cca3' render={props => <CountryDetails {...props} countries={countries} />} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
