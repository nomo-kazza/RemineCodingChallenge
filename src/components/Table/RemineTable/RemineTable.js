import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ALL_TYPES } from '../../../constants/Labels';
import DefaultTable from '../AlternativeTables/DefaultTable';
import ReactFixedDataTable from '../AlternativeTables/ReactFixedDataTable';
import ReactVirtualizedTable from '../AlternativeTables/ReactVirtualizedTable';

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
        (maxBaths === null || maxBeds === null || minBaths === null || minBeds === null)
    );
    return (
      <div className="tableContainer">
        <p>
          Table length: <strong>{filteredProperties.length}</strong>
        </p>
        {/* <DefaultTable filteredProperties={filteredProperties} /> */}
        {/* <ReactFixedDataTable filteredProperties={filteredProperties} /> */}
        <ReactVirtualizedTable filteredProperties={filteredProperties} />
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
