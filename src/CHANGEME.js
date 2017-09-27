import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import NumberSelector from './components/Selectors/NumberSelector';
import BuildingSelector from './components/Selectors/BuildingSelector';
import * as Labels from './constants/Labels';
import * as Titles from './constants/Titles';
import API from './API';

class Test extends Component {
  state = {
    locations: null,
    buildingTypes: [],
    filterOptions: {
      buildingFilter: Labels.ALL_TYPES,
      minBeds: 0,
      maxBeds: 0,
      minBaths: 0,
      maxBaths: 0
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
        types.push(Labels.ALL_TYPES);
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
    if (newNumber < 0 || newNumber == null) {
      newNumber = 0;
    }
    let newFilterOptions = {
      ...this.state.filterOptions,
      [e.target.name]: parseInt(newNumber, 10)
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
          <NumberSelector
            filterOptions={filterOptions}
            roomInputType={Labels.MIN_BEDS}
            title={Titles.MIN_BEDS}
            updateNumber={this.updateNumber}
          />
          <NumberSelector
            filterOptions={filterOptions}
            roomInputType={Labels.MAX_BEDS}
            title={Titles.MAX_BEDS}
            updateNumber={this.updateNumber}
          />
          <BuildingSelector
            buildingTypes={buildingTypes}
            updateBuildingType={this.updateBuildingType}
            title={Titles.BUILDING_TITLE}
          />
          <NumberSelector
            filterOptions={filterOptions}
            roomInputType={Labels.MIN_BATHS}
            title={Titles.MIN_BATHS}
            updateNumber={this.updateNumber}
          />
          <NumberSelector
            filterOptions={filterOptions}
            roomInputType={Labels.MAX_BATHS}
            title={Titles.MAX_BATHS}
            updateNumber={this.updateNumber}
          />
        </div>
        {locations ? <RemineTable properties={locations} filterOptions={filterOptions} /> : <h1>Loading..</h1>}
      </div>
    );
  }
}

export default Test;
