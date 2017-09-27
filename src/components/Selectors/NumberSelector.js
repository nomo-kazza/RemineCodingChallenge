import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TEXT_TO_DISPLAY } from '../../constants/Labels';

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
          placeholder={title.slice(0, 3) === TEXT_TO_DISPLAY ? 'Enter min' : 'Enter Max'}
          name={roomInputType}
          value={theName}
          onChange={this.props.updateNumber}
        />
      </div>
    );
  }
}
export default NumberSelector;

NumberSelector.defaultProps = {
  filterOptions: {}
};

NumberSelector.propTypes = {
  filterOptions: PropTypes.object.isRequired,
  updateNumber: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
