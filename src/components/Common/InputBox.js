import React, { Component } from "react";
import PropTypes from "prop-types";

class InputBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <input
          type={this.props.inputType}
          name={this.props.inputName}
          placeholder={this.props.placeholder}
          className={this.props.className}
          onChange={this.props.onChangeText}
          value={this.props.value}
          disabled={this.props.disabledMode}
        />
        <div className="input-error">
          <small>{this.props.error}</small>
        </div>
      </React.Fragment>
    );
  }
}

InputBox.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default InputBox;
