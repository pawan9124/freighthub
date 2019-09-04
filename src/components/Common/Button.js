import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.btnClick();
  }

  render() {
    return (
      <div className="btn-primary-custom" onClick={this.handleClick}>
        <a>{this.props.buttonName}</a>
      </div>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired
};

export default Button;
