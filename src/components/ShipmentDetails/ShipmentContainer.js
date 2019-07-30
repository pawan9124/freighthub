import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchSingleShipment,
  postShipmentName
} from "../../actions/shipmentsActions";
import ShipmentName from "./ShipmentName";
import ShipmentInfo from "./ShipmentInfo";
import ShipmentCargo from "./ShipmentCargo";
import PropTypes from "prop-types";

class ShipmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledMode: true,
      name: "",
      isError: false,
      isChanged: false,
      id: ""
    };
    this.onChange = this.onChange.bind(this);
    this.setEnableMode = this.setEnableMode.bind(this);
    this.saveName = this.saveName.bind(this);
  }
  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.fetchSingleShipment(this.props.match.params.id);
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      isChanged: true,
      isError: false
    });
  }
  setEnableMode() {
    this.setState({ disabledMode: !this.state.disabledMode });
  }
  saveName() {
    if (this.state.name != "" && this.state.name != undefined) {
      const sendData = this.props.shipment.singleShipment;
      sendData.name = this.state.name;
      this.props.postShipmentName(sendData);
      this.setState({ disabledMode: true });
    } else {
      this.setState({ isError: true });
    }
  }
  render() {
    const { singleShipment } = this.props.shipment;
    let { disabledMode, name, isChanged, isError } = this.state;
    if (name === "" && isChanged === false) {
      name = singleShipment.name;
    }
    return (
      <div className="shipment-detail">
        <div className="card">
          <div className="card-header">Shipment Details</div>
          <div className="card-body">
            <ShipmentName
              value={name || ""}
              onChange={this.onChange}
              disabledMode={disabledMode}
              setEnableMode={this.setEnableMode}
              saveName={this.saveName}
              isError={isError}
              status={singleShipment.status}
            />

            <div className="row">
              <div className="col-md-4">
                <ShipmentInfo
                  image="fas fa-plane-departure custom-font-size"
                  info={singleShipment.origin}
                  title="Origin"
                />
              </div>
              <div className="col-md-4">
                <ShipmentInfo
                  image="fas fa-plane-arrival custom-font-size"
                  info={singleShipment.destination}
                  title="Destination"
                />
              </div>
              <div className="col-md-4">
                <ShipmentInfo
                  image="fas fa-question-circle custom-font-size"
                  info={singleShipment.type}
                  title="Type"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <ShipmentInfo
                  image="fas fa-ship custom-font-size"
                  info={singleShipment.mode}
                  title="Mode"
                />
              </div>
              <div className="col-md-4">
                <ShipmentInfo
                  image="fas fa-sitemap custom-font-size"
                  info={singleShipment.total}
                  title="Total"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ShipmentCargo
                  cargo={singleShipment.cargo}
                  services={singleShipment.services}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShipmentContainer.propTypes = {
  fetchSingleShipment: PropTypes.func.isRequired,
  postShipmentName: PropTypes.func.isRequired,
  shipment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shipment: state.shipment
});
export default connect(
  mapStateToProps,
  { fetchSingleShipment, postShipmentName }
)(ShipmentContainer);
