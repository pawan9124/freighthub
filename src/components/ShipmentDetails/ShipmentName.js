import React from "react";
import PropTypes from "prop-types";

class ShipmentName extends React.Component {
  changeInput() {
    this.props.onChange();
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card no-border">
            <div className="card-body row">
              <label>Name:</label>
              <div className="status col-md-6 mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-dolly" />
                    </span>
                  </div>

                  <input
                    type="text"
                    className={`form-control${
                      this.props.isError ? " error" : ""
                    }`}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    disabled={this.props.disabledMode}
                    name="name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                {this.props.isError && (
                  <small className="red-error">
                    Shipment Name cannot be empty!
                  </small>
                )}
              </div>
              <div className="col-md-2">
                {this.props.disabledMode ? (
                  <button
                    className="btn btn-primary"
                    onClick={this.props.setEnableMode}
                  >
                    Edit
                  </button>
                ) : (
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={this.props.saveName}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-default"
                      onClick={this.props.setEnableMode}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <div className="col-md-2">
                <label>Status:</label>
                <a href="#" className="badge badge-success status-code">
                  {this.props.status}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShipmentName.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabledMode: PropTypes.bool.isRequired,
  setEnableMode: PropTypes.func.isRequired,
  saveName: PropTypes.func.isRequired
};
export default ShipmentName;
