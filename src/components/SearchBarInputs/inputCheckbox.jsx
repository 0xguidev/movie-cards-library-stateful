import React from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  render() {
    const { checkedId, onCheck } = this.props;
    return (
      <label
        htmlFor="inputCheckbox"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="inputCheckbox"
          checked={ checkedId }
          onChange={ onCheck }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  checkedId: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default InputCheckbox;
