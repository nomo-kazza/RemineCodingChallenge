import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import API from './API';

class Test extends Component {
  state = {
    locations: null,
    buildinTypes: [],
    buildingFilter: 'any type'
  };
  componentWillMount() {
    API.getLocations()
      .then(({ data }) => {
        this.setState({ locations: data });
      })
      .catch(err => console.log('There was an error fetching locations', err));
    API.getBuildingTypes()
      .then(({ data }) => {
        let types = data.map(type => type.name);
        types.push('all types');
        types.reverse();
        this.setState({ buildingTypes: types });
      })
      .catch(err => console.log('There was an error fetching building types', err));
  }
  updateBuildingFilter = e => {
    console.log('changed');
  };
  render() {
    const { locations, buildingTypes, buildingFilter } = this.state;
    return (
      <div className="testContainer">
        <div className="filterContainer">
          <div>
            <label htmlFor="buildingFilter">{'Building Type'}</label>
            <select onChange={this.updateBuildingFilter}>
              {this.state.buildingTypes && buildingTypes.map((type, i) => <option key={i}>{type}</option>)}
            </select>
          </div>
        </div>
        {/* <pre>
          <code>{JSON.stringify(buildingTypes, null, 2)}</code>
        </pre> */}
        {locations ? (
          <RemineTable properties={locations} buildingTypes={buildingTypes} buildingFilter={buildingFilter} />
        ) : (
          <h1>loading</h1>
        )}
      </div>
    );
  }
}

export default Test;
