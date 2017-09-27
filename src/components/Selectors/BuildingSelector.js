import React from 'react';

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
