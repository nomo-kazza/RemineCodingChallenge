import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import NumberSelector from './components/Selectors/NumberSelector';
import BuildingSelector from './components/Selectors/BuildingSelector';
import API from './API';

class Test extends Component {
  state = {
    locations: null,
    buildingTypes: [],
    filterOptions: {
      buildingFilter: 'all types',
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
          <NumberSelector
            filterOptions={filterOptions}
            roomInputType={'minBeds'}
            title={'Min Beds'}
            updateNumber={this.updateNumber}
          />
          <NumberSelector
            filterOptions={filterOptions}
            roomInputType={'maxBeds'}
            title={'Max Beds'}
            updateNumber={this.updateNumber}
          />
          <BuildingSelector buildingTypes={buildingTypes} updateBuildingType={this.updateBuildingType} />
          <NumberSelector
            filterOptions={filterOptions}
            roomInputType={'minBaths'}
            title={'Min Baths'}
            updateNumber={this.updateNumber}
          />
          <NumberSelector
            filterOptions={filterOptions}
            roomInputType={'maxBaths'}
            title={'Max Baths'}
            updateNumber={this.updateNumber}
          />
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
