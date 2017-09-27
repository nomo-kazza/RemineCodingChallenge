import React, { Component } from 'react';

class NumberSelector extends Component {
  render() {
    const { filterOptions, roomInputType, title } = this.props;
    let theName = filterOptions[roomInputType];
    return (
      <div className="filterItem">
        <label htmlFor={roomInputType}>{title}</label>
        <input
          ref={input => (this.roomInputType = input)}
          type="number"
          placeholder="enter min"
          name={roomInputType}
          value={theName}
          onChange={this.props.updateNumber}
        />
      </div>
    );
  }
}
export default NumberSelector;
