import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultTable(props) {
  const { filteredProperties } = props;
  return (
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
  );
}

DefaultTable.defaultTypes = {
  filteredProperties: []
};

DefaultTable.propTypes = {
  filteredProperties: PropTypes.array
};
