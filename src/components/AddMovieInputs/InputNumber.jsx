import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="inputNumber" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="inputNumber"
          name="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
