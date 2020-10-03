import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails';

class App extends Component {
    state = {
        countries: []
    }
    componentDidMount() {
        this.setState({
            countries
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <Router>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5' style={{maxHeight: '90vh', overflowY:'scroll'}}>
                                <div className='list-group'>
                                    <CountriesList countries={this.state.countries} />
                                </div>
                            </div>
                            <Route exact path='/:cca3' render={(props) => <CountryDetails {...props}  countries={countries} />} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;