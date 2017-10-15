import React from 'react';
import PropTypes from 'prop-types';
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
);

export default function ReactFixedDataTable(props) {
  const { filteredProperties } = props;
  return (
    <Table
      rowHeight={50}
      rowsCount={filteredProperties.length}
      headerHeight={50}
      width={715}
      height={500}
      {...props}>
      <Column
        header={<Cell>Address</Cell>}
        cell={<TextCell data={filteredProperties} col="address" />}
        width={300}
      />
      <Column
        header={<Cell>Building Type</Cell>}
        cell={<TextCell data={filteredProperties} col="buildingType" />}
        width={200}
      />
      <Column
        header={<Cell>Beds</Cell>}
        cell={<TextCell data={filteredProperties} col="beds" />}
        width={100}
      />
      <Column
        header={<Cell>Baths</Cell>}
        cell={<TextCell data={filteredProperties} col="baths" />}
        width={100}
      />
    </Table>
  );
}

ReactFixedDataTable.defaultTypes = {
  filteredProperties: []
};

ReactFixedDataTable.propTypes = {
  filteredProperties: PropTypes.array
};
