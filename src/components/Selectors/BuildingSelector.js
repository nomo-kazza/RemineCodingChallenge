import React from 'react';
import PropTypes from 'prop-types';

export default function BuildingSelector(props) {
  const { buildingTypes, title } = props;
  return (
    <div className="filterItem">
      <label htmlFor="buildingFilter">{title}</label>
      <select onChange={props.updateBuildingType}>
        {buildingTypes.map((type, i) => <option key={i}>{type}</option>)}
      </select>
    </div>
  );
}

BuildingSelector.defaultTypes = {
  buildingTypes: []
};

BuildingSelector.propTypes = {
  buildingTypes: PropTypes.array,
  updateBuildingType: PropTypes.func
};
