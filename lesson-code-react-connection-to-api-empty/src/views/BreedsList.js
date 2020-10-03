import React from 'react';

import DOG_BREED_SERVICE from '../services/BreedService';

class BreedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log(DOG_BREED_SERVICE);
    DOG_BREED_SERVICE.listAllBreeds()
      .then(breeds => this.setState({ breeds }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.breeds.map(breed => (
          <div key={breed}>
            <p>{breed}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BreedList;
