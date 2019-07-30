import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchId: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick() {
    this.props.findShipmentDetailById(this.state.searchId);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 filter-margin">
            <label>{this.props.label}</label>
          </div>
          <div className="col-md-7">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={this.props.placeholder}
                aria-label={this.props.placeholder}
                aria-describedby="basic-addon2"
                name="searchId"
                onChange={this.onChange}
                id="searchShipId"
              />
              <div className="input-group-append" onClick={this.handleClick}>
                <span className="input-group-text" id="basic-addon2">
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-1">
            <button className="btn btn-warning" onClick={this.props.reset}>
              <i className="fas fa-sync" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
};

export default SearchBox;
