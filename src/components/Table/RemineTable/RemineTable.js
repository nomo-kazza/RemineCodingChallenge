import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RemineTable.css';

class RemineTable extends Component {
  render() {
    const { buildingTypes, properties, buildingFilter: filter, minBeds, maxBeds } = this.props;
    var filteredProperties;
    filteredProperties = properties.filter(
      ({ buildingType, beds }) =>
        buildingType === filter || (filter === 'all types' && beds >= minBeds && (!maxBeds || beds < maxBeds))
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
  properties: []
};

RemineTable.propTypes = {
  properties: PropTypes.array
};

export default RemineTable;
