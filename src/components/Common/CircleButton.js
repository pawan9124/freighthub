import React from "react";
import PropTypes from "prop-types";

class CircleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a onClick={this.props.btnClick} className={this.props.className}>
        <i className={this.props.icon} />
      </a>
    );
  }
}

CircleButton.propTypes = {
  icon: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default CircleButton;
