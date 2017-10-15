import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-virtualized/dist/commonjs/Table';
import Column from 'react-virtualized/dist/commonjs/Table/Column';
import 'react-virtualized/styles.css'; // only needs to be imported once

export default function ReactVirtualizedTable(props) {
  const { filteredProperties } = props;
  return (
    <Table
      width={800}
      height={500}
      headerHeight={30}
      rowHeight={40}
      rowCount={filteredProperties.length}
      rowGetter={({ index }) => filteredProperties[index]}
    >
      <Column
        label='Address'
        dataKey='address'
        width={400}
      />
      <Column
        width={200}
        label='Building Type'
        dataKey='buildingType'
      />
      <Column
        width={100}
        label='Beds'
        dataKey='beds'
      />
      <Column
        width={100}
        label='Baths'
        dataKey='baths'
      />
    </Table>
  );
}

ReactVirtualizedTable.defaultTypes = {
  filteredProperties: []
};

ReactVirtualizedTable.propTypes = {
  filteredProperties: PropTypes.array
};
