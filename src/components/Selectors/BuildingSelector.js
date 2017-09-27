import React from 'react';

export default function BuildingSelector(props) {
  const { buildingTypes } = props;
  return (
    <div className="filterItem">
      <label htmlFor="buildingFilter">all types</label>
      <select onChange={props.updateBuildingType}>
        {buildingTypes.map((type, i) => <option key={i}>{type}</option>)}
      </select>
    </div>
  );
}
