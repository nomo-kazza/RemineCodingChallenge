import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import API from './API';

class Test extends Component {
  state = {
    locations: null,
    buildingTypes: [],
    filterOptions: {
      buildingFilter: 'all types',
      minBeds: 0,
      maxBeds: 0
    }
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
  updateBuildingType = e => {
    let newType = e.target.value;
    this.setState(prevState => ({
      filterOptions: {
        ...prevState.filterOptions,
        buildingFilter: newType
      }
    }));
  };
  updateNumber = e => {
    let newNumber = e.target.value;
    let newFilterOptions = {
      ...this.state.filterOptions,
      [e.target.name]: newNumber
    };
    this.setState(prevState => ({
      filterOptions: {
        ...newFilterOptions
      }
    }));
  };
  render() {
    const { locations, buildingTypes, filterOptions } = this.state;
    return (
      <div className="testContainer">
        <div className="filterContainer">
          <div className="filterItem">
            <label htmlFor="minBeds">Min Beds</label>
            <input
              ref={input => (this.minBeds = input)}
              type="number"
              placeholder="enter min"
              name="minBeds"
              value={this.state.minBeds}
              onChange={this.updateNumber}
            />
          </div>
          <div className="filterItem">
            <label htmlFor="maxBeds">Max Beds</label>
            <input
              ref={input => (this.maxBeds = input)}
              type="number"
              placeholder="enter max"
              name="maxBeds"
              value={this.state.maxBeds}
              onChange={this.updateNumber}
            />
          </div>
          <div className="filterItem">
            <label htmlFor="buildingFilter">all types</label>
            <select onChange={this.updateBuildingType}>
              {buildingTypes.map((type, i) => <option key={i}>{type}</option>)}
            </select>
          </div>
        </div>
        {/* <pre>
          <code>{JSON.stringify(buildingTypes, null, 2)}</code>
        </pre> */}
        {locations ? (
          <RemineTable
            properties={locations}
            buildingTypes={buildingTypes}
            buildingFilter={filterOptions.buildingFilter}
            minBeds={filterOptions.minBeds}
            maxBeds={filterOptions.maxBeds}
            updateBuildingType={this.updateBuildingType}
          />
        ) : (
          <h1>loading</h1>
        )}
      </div>
    );
  }
}

export default Test;
