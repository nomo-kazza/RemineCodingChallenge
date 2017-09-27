import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ALL_TYPES } from '../../../constants/Labels';
import './RemineTable.css';

class RemineTable extends Component {
  render() {
    const { properties } = this.props;
    const { buildingFilter: filter, minBeds, maxBeds, minBaths, maxBaths } = this.props.filterOptions;
    var filteredProperties;
    filteredProperties = properties.filter(
      ({ buildingType, beds, baths }) =>
        ((buildingType === filter || filter === ALL_TYPES) &&
          beds >= minBeds &&
          (!maxBeds || beds < maxBeds) &&
          baths >= minBaths &&
          (!maxBaths || baths < maxBaths)) ||
        (maxBaths === null || maxBeds === null || minBaths === null)
    );
    return (
      <div className="tableContainer">
        <p>
          Table length: <strong>{filteredProperties.length}</strong>
        </p>
        <table className="remineTable">
          <thead>
            <tr>
              <th>Address</th>
              <th>Building Type</th>
              <th>Beds</th>
              <th>Baths</th>
            </tr>
          </thead>
          <tbody className="remineTableBody">
            {filteredProperties.map(property => (
              <tr key={property.id}>
                <td>{property.address}</td>
                <td>{property.buildingType}</td>
                <td>{property.beds}</td>
                <td>{property.baths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

RemineTable.defaultProps = {
  properties: [],
  filterOptions: {}
};

RemineTable.propTypes = {
  properties: PropTypes.array,
  filterOptions: PropTypes.object
};

export default RemineTable;
